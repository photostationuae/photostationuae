import React, { useState } from 'react';
import { generateAIPromptSuggestion } from '../services/geminiService';
import { Language } from '../i18n';

interface AIPromptProps {
    lang: Language;
}

const AIPrompt: React.FC<AIPromptProps> = ({ lang }) => {
    const [prompt, setPrompt] = useState('');
    const [suggestion, setSuggestion] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setIsLoading(true);
        setError('');
        setSuggestion('');
        try {
            const result = await generateAIPromptSuggestion(prompt, lang);
            setSuggestion(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">AI Prop/Overlay Idea Generator</h3>
            <p className="text-gray-600 mb-4">Want to add something to your photo? Type an idea (e.g., "a crown", "sunglasses", "a funny hat") and let our AI suggest a creative twist!</p>
            <div className="flex flex-col sm:flex-row gap-2">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., a birthday cake"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    disabled={isLoading}
                />
                <button
                    onClick={handleGenerate}
                    disabled={isLoading || !prompt.trim()}
                    className="w-full sm:w-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-md font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-300"
                >
                    {isLoading ? 'Generating...' : 'Get Idea'}
                </button>
            </div>
            {error && <p className="mt-4 text-red-500">{error}</p>}
            {suggestion && (
                <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                    <p className="font-semibold text-purple-800">AI Suggestion:</p>
                    <p className="text-purple-700">{suggestion}</p>
                </div>
            )}
        </div>
    );
};

export default AIPrompt;
