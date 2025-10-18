import React from 'react';
import { BasePageProps, Page } from '../types';
import { t, TranslationKey } from '../i18n/index';
import { CheckIcon } from '../components/icons/CheckIcon';
import { audioGuestBookImage } from '../constants';

const AudioGuestRoomPage: React.FC<BasePageProps> = ({ lang, navigate }) => {
    const features: TranslationKey[] = [
        'audioGuestBookFeature1',
        'audioGuestBookFeature2',
        'audioGuestBookFeature3',
        'audioGuestBookFeature4',
        'audioGuestBookFeature5',
        'audioGuestBookFeature6',
        'audioGuestBookFeature7',
        'audioGuestBookFeature8',
        'audioGuestBookFeature9',
        'audioGuestBookFeature10',
    ];

    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{t(lang, 'serviceAudioTitle')}</h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{t(lang, 'serviceAudioDesc')}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src={audioGuestBookImage} alt={t(lang, 'serviceAudioTitle')} className="rounded-lg shadow-lg w-full h-auto object-cover" />
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center md:text-left rtl:md:text-right">{t(lang, 'audioGuestBookFeatureTitle')}</h2>
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

export default AudioGuestRoomPage;