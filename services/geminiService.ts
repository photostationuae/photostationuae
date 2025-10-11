import { GoogleGenAI, Type } from "@google/genai";
import { Language, t } from "../i18n";
import { AlbumDesign } from "../types";

// FIX: Use process.env.API_KEY as defined in vite.config.ts and per coding guidelines to fix TypeScript error.
// Access the API key securely from environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
    throw new Error("API_KEY environment variable not set. Please add it to your .env file and hosting provider.");
}

const ai = new GoogleGenAI({ apiKey });

const prompts = {
    en: `You are a creative assistant for an AI Photo Booth. A user wants to add an element to their photo. The element is: "{userInput}". Briefly and creatively describe a fun photo prop or digital overlay based on this. Be enthusiastic and keep it to one or two sentences.`,
    ar: `أنت مساعد إبداعي لكشك تصوير يعمل بالذكاء الاصطناعي. يريد مستخدم إضافة عنصر إلى صورته. العنصر هو: "{userInput}". صف بشكل موجز وإبداعي دعامة تصوير ممتعة أو تراكبًا رقميًا بناءً على هذا. كن متحمسًا واجعل الإجابة من جملة أو جملتين.`
}

export const generateAIPromptSuggestion = async (userInput: string, lang: Language): Promise<string> => {
    try {
        const model = "gemini-2.5-flash";
        const prompt = prompts[lang].replace('{userInput}', userInput);

        const response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: {
                // Use a smaller thinking budget for faster, creative responses
                thinkingConfig: { thinkingBudget: 0 }
            }
        });
        
        return response.text.trim();
    } catch (error) {
        console.error("Error generating content from Gemini API:", error);
        throw new Error("Failed to get a suggestion from the AI model.");
    }
};

const albumPrompts = {
    en: `You are an expert photo album designer. Your task is to create a dynamic and beautiful layout for a photo album. The album size is {albumSize}. The user has provided {imageCount} photos. Create a JSON array representing the album pages. Distribute all {imageCount} photos across the pages, ensuring a good mix of layouts. A page can have between 1 and 4 photos. Use the indexes from 0 to {maxIndex}. The output must be only the JSON array.`,
    ar: `أنت مصمم ألبومات صور خبير. مهمتك هي إنشاء تصميم ديناميكي وجميل لألبوم صور. حجم الألبوم هو {albumSize}. قدم المستخدم {imageCount} صورة. قم بإنشاء مصفوفة JSON تمثل صفحات الألبوم. قم بتوزيع جميع الصور الـ {imageCount} عبر الصفحات، مع ضمان مزيج جيد من التخطيطات. يمكن أن تحتوي الصفحة على ما بين 1 و 4 صور. استخدم الفهارس من 0 إلى {maxIndex}. يجب أن يكون الإخراج مصفوفة JSON فقط.`
};

export const generateAlbumLayout = async (imageCount: number, albumSize: string, lang: Language): Promise<AlbumDesign> => {
    try {
        const model = "gemini-2.5-flash";
        const prompt = albumPrompts[lang]
            .replace('{albumSize}', albumSize)
            .replace('{imageCount}', imageCount.toString())
            .replace('{maxIndex}', (imageCount - 1).toString());

        const response = await ai.models.generateContent({
            model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            layout: {
                                type: Type.STRING,
                                enum: ['single-full', 'two-vertical', 'two-horizontal', 'three-collage', 'four-grid'],
                            },
                            imageIndexes: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.INTEGER,
                                }
                            }
                        },
                        required: ['layout', 'imageIndexes']
                    }
                }
            }
        });

        const jsonText = response.text.trim();
        return JSON.parse(jsonText) as AlbumDesign;

    } catch (error) {
        console.error("Error generating album layout from Gemini API:", error);
        throw new Error(t(lang, 'aiDesignError'));
    }
};
