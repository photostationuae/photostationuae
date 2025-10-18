import React, { useState } from 'react';
import { Language, t } from '../i18n';

interface AIPromptProps {
    onGenerate: (prompt: string) => void;
    isLoading: boolean;
    lang: Language;
}

const AIPrompt: React.FC<AIPromptProps> = ({ onGenerate, isLoading, lang }) => {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (prompt.trim()) {
            onGenerate(prompt);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="ai-prompt" className="block text-sm font-medium text-gray-700">
                    {t(lang, 'aiPromptLabel' as any)} 
                </label>
                <textarea
                    id="ai-prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={3}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    placeholder={t(lang, 'aiPromptPlaceholder' as any)}
                />
            </div>
            <div>
                <button
                    type="submit"
                    disabled={isLoading || !prompt.trim()}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-300"
                >
                    {isLoading ? t(lang, 'aiPromptGenerating' as any) : t(lang, 'aiPromptGenerate' as any)}
                </button>
            </div>
        </form>
    );
};

export default AIPrompt;
