import { GoogleGenAI, Type } from "@google/genai";
import { AlbumDesign } from "../types";

// FIX: Initialize the GoogleGenAI client according to the guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a photo album layout using the Gemini API.
 * @param imageCount The total number of images to include in the layout.
 * @param albumSize A string describing the album size (e.g., "8x8").
 * @returns A promise that resolves to an AlbumDesign object.
 */
export const generateAlbumLayout = async (
    imageCount: number,
    albumSize: string
): Promise<AlbumDesign> => {
    
    const prompt = `
        Create a photo album design for a ${albumSize} album with ${imageCount} images.
        The images are indexed from 0 to ${imageCount - 1}.
        Each page layout can be one of: 'single-full', 'two-vertical', 'two-horizontal', 'three-collage', 'four-grid'.
        Distribute all images across the pages. An image must appear only once.
        The final output must be a JSON array of page layouts.
        Example response for 4 images:
        [
            { "layout": "two-vertical", "imageIndexes": [0, 1] },
            { "layout": "two-horizontal", "imageIndexes": [2, 3] }
        ]
    `;

    // FIX: Define a response schema to ensure structured JSON output from the model.
    const responseSchema = {
        type: Type.ARRAY,
        items: {
            type: Type.OBJECT,
            properties: {
                layout: {
                    type: Type.STRING,
                    description: "The layout type for the page.",
                    enum: ['single-full', 'two-vertical', 'two-horizontal', 'three-collage', 'four-grid']
                },
                imageIndexes: {
                    type: Type.ARRAY,
                    description: "An array of image indexes for this page.",
                    items: { type: Type.INTEGER }
                }
            },
            required: ['layout', 'imageIndexes']
        }
    };

    try {
        // FIX: Use the recommended 'gemini-2.5-flash' model and API structure.
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
            },
        });

        // FIX: Access the response text directly from the .text property.
        const jsonText = response.text.trim();
        const design = JSON.parse(jsonText);

        if (!Array.isArray(design)) {
            throw new Error("Invalid album design format received from AI.");
        }

        return design as AlbumDesign;
    } catch (error) {
        console.error("Error generating album layout:", error);
        throw new Error("Failed to generate album design. Please try again.");
    }
};

/**
 * Generates an image based on a text prompt using the Gemini API.
 * @param prompt The text prompt describing the desired image.
 * @returns A promise that resolves to a base64-encoded image data URL.
 */
export const generateAIImage = async (prompt: string): Promise<string> => {
    try {
        // FIX: Use the 'imagen-4.0-generate-001' model for image generation as per guidelines.
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: prompt,
            config: {
              numberOfImages: 1,
              outputMimeType: 'image/jpeg',
              aspectRatio: '1:1',
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
            return `data:image/jpeg;base64,${base64ImageBytes}`;
        } else {
            throw new Error("No image was generated.");
        }
    } catch (error) {
        console.error("Error generating AI image:", error);
        throw new Error("Failed to generate image. The prompt may have been blocked.");
    }
}
