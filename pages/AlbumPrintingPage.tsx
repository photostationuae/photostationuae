import React, { useState } from 'react';
import { BasePageProps, AlbumDesign, Page } from '../types';
import { t } from '../i18n/index';
import { generateAlbumLayout } from '../services/geminiService';
import { UploadIcon } from '../components/icons/UploadIcon';
import { TrashIcon } from '../components/icons/TrashIcon';

const AlbumPrintingPage: React.FC<BasePageProps> = ({ lang, navigate }) => {
    const [images, setImages] = useState<string[]>([]);
    const [albumSize, setAlbumSize] = useState('8x8');
    const [albumDesign, setAlbumDesign] = useState<AlbumDesign | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const imageUrls: string[] = [];
            // FIX: Iterating over FileList with a for loop and .item(i) to ensure type safety, as the previous method was inferring file as 'unknown'.
            for (let i = 0; i < e.target.files.length; i++) {
                const file = e.target.files.item(i);
                if (file) {
                    imageUrls.push(URL.createObjectURL(file));
                }
            }
            setImages(prev => [...prev, ...imageUrls]);
        }
    };
    
    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
    };

    const handleGenerateDesign = async () => {
        if (images.length === 0) {
            setError('Please upload at least one image.');
            return;
        }
        setIsLoading(true);
        setError('');
        setAlbumDesign(null);
        try {
            const design = await generateAlbumLayout(images.length, albumSize, lang);
            setAlbumDesign(design);
        } catch (err) {
            setError(err instanceof Error ? err.message : t(lang, 'albumPrintingError'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{t(lang, 'albumPrintingTitle')}</h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{t(lang, 'albumPrintingSubtitle')}</p>
                     <button
                        onClick={() => navigate(Page.Contact)}
                        className="mt-8 bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        {t(lang, 'bookNow')}
                    </button>
                </div>

                <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200 space-y-8">
                    {/* Step 1: Upload Photos */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. {t(lang, 'albumPrintingUploadPrompt')}</h2>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <UploadIcon className="mx-auto h-12 w-12 text-gray-400" />
                            <label htmlFor="file-upload" className="mt-2 block text-sm font-medium text-purple-600 hover:text-purple-500 cursor-pointer">
                                {t(lang, 'albumPrintingUploadButton')}
                            </label>
                            <input id="file-upload" name="file-upload" type="file" multiple accept="image/*" className="sr-only" onChange={handleImageUpload} />
                            <p className="text-xs text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                        </div>
                        {images.length > 0 && (
                             <div className="mt-4">
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                                    {images.map((src, index) => (
                                        <div key={index} className="relative group">
                                            <img src={src} alt={`upload-preview-${index}`} className="w-full h-24 object-cover rounded-md" />
                                             <button onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <TrashIcon />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <button onClick={() => setImages([])} className="mt-4 text-sm text-red-600 hover:underline">{t(lang, 'albumPrintingClear')}</button>
                            </div>
                        )}
                    </div>
                    
                    {/* Step 2: Choose Size */}
                     <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. {t(lang, 'albumPrintingSizePrompt')}</h2>
                        <select
                            value={albumSize}
                            onChange={(e) => setAlbumSize(e.target.value)}
                            className="block w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                        >
                            <option value="8x8">8x8 inch Square</option>
                            <option value="10x8">10x8 inch Landscape</option>
                            <option value="12x12">12x12 inch Square</option>
                        </select>
                    </div>

                    {/* Step 3: Generate */}
                    <div>
                        <button
                            onClick={handleGenerateDesign}
                            disabled={isLoading || images.length === 0}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-300"
                        >
                            {isLoading ? t(lang, 'albumPrintingGenerating') : t(lang, 'albumPrintingGenerateButton')}
                        </button>
                        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
                    </div>
                </div>

                {/* Display Album Design */}
                {albumDesign && (
                    <div className="mt-12">
                        <h2 className="text-3xl font-bold text-center mb-8">Your AI-Generated Album Preview</h2>
                        <div className="space-y-8">
                            {albumDesign.map((page, pageIndex) => (
                                <div key={pageIndex} className="bg-white p-4 shadow-lg rounded-md border">
                                    <p className="text-center text-sm text-gray-500 mb-2">Page {pageIndex + 1}</p>
                                    {/* This is a simplified preview. A real implementation would be more complex. */}
                                    <div className="grid grid-cols-2 gap-2">
                                         {page.imageIndexes.map(imgIndex => (
                                            <img key={imgIndex} src={images[imgIndex]} alt={`page-${pageIndex}-img-${imgIndex}`} className="w-full object-cover rounded-sm" />
                                        ))}
                                    </div>
                                    <p className="text-center text-xs text-gray-400 mt-2">Layout: {page.layout}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AlbumPrintingPage;