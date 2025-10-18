import React, { useState } from 'react';
import { BasePageProps } from '../types';
import { t } from '../i18n';
import { generateAIImage } from '../services/geminiService';
import AIPrompt from '../components/AIPrompt';

// FIX: Implemented the AIBoothPage component.
const AIBoothPage: React.FC<BasePageProps> = ({ lang }) => {
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async (prompt: string) => {
        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);
        try {
            const imageUrl = await generateAIImage(prompt);
            setGeneratedImage(imageUrl);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{t(lang, 'serviceAITitle')}</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{t(lang, 'serviceAIDesc')}</p>
                </div>
                
                <div className="max-w-2xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                   <AIPrompt onGenerate={handleGenerate} isLoading={isLoading} lang={lang} />
                </div>

                {isLoading && (
                    <div className="text-center mt-8">
                        <p className="text-lg text-purple-600">Generating your masterpiece... Please wait.</p>
                        <div className="mt-4">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
                        </div>
                    </div>
                )}
                
                {error && (
                    <div className="text-center mt-8 max-w-2xl mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                        <strong className="font-bold">Error: </strong>
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                {generatedImage && (
                    <div className="mt-12 text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your AI-Generated Image</h2>
                        <img src={generatedImage} alt="AI Generated" className="mx-auto rounded-lg shadow-xl border-4 border-white" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default AIBoothPage;
