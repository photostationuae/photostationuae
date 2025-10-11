import React from 'react';
import { BasePageProps, Page } from '../types';
import { t, TranslationKey } from '../i18n/index';
import { CheckIcon } from '../components/icons/CheckIcon';

const AudioGuestRoomPage: React.FC<BasePageProps> = ({ lang, navigate }) => {
    const models = [
        {
            titleKey: 'audioModel1Title',
            descriptionKey: 'audioModel1Desc',
            imageUrl: 'https://picsum.photos/seed/vintagephone/800/600',
        },
        {
            titleKey: 'audioModel2Title',
            descriptionKey: 'audioModel2Desc',
            imageUrl: 'https://picsum.photos/seed/ornatephone/800/600',
        }
    ] as const;

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
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{t(lang, 'serviceAudioTitle')}</h1>
                    <p className="mt-4 text-lg text-gray-600">{t(lang, 'serviceAudioDesc')}</p>
                </div>

                {/* Features Section */}
                <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t(lang, 'audioGuestBookFeatureTitle')}</h2>
                    <ul className="space-y-4 text-gray-600 text-left rtl:text-right">
                        {features.map(featureKey => (
                            <li key={featureKey} className="flex items-start">
                                <CheckIcon className="h-6 w-6 text-green-500 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0 mt-1" />
                                <span>{t(lang, featureKey)}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {models.map((model, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex flex-col">
                            <img src={model.imageUrl} alt={t(lang, model.titleKey)} className="w-full h-72 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">{t(lang, model.titleKey)}</h2>
                                <p className="text-gray-600 flex-grow">{t(lang, model.descriptionKey)}</p>
                            </div>
                        </div>
                    ))}
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
    );
};

export default AudioGuestRoomPage;