import React from 'react';
import { BasePageProps, Page } from '../types';
import { t, TranslationKey } from '../i18n/index';
import { CheckIcon } from '../components/icons/CheckIcon';

const VideoBooth360Page: React.FC<BasePageProps> = ({ lang, navigate }) => {

    const features: TranslationKey[] = [
        'service360Feature1',
        'service360Feature2',
        'service360Feature3',
        'service360Feature4',
        'service360Feature5',
        'service360Feature6',
        'service360Feature7',
        'service360Feature8',
        'service360Feature9',
        'service360Feature10',
    ];

    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{t(lang, 'service360Title')}</h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{t(lang, 'service360Desc')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src="https://picsum.photos/seed/360booth-page/1200/800" alt={t(lang, 'service360Title')} className="rounded-lg shadow-lg w-full h-auto object-cover" />
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left rtl:md:text-right">{t(lang, 'service360IncludesTitle')}</h2>
                            <ul className="space-y-4 text-gray-600">
                                {features.map(featureKey => (
                                    <li key={featureKey} className="flex items-start">
                                        <CheckIcon className="h-6 w-6 text-green-500 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                                        <span>{t(lang, featureKey)}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <button
                            onClick={() => navigate(Page.Contact)}
                            className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            {t(lang, 'bookNow')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoBooth360Page;