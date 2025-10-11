import React from 'react';
import { BasePageProps, Page } from '../types';
import { t } from '../i18n/index';

const LEDScreenPage: React.FC<BasePageProps> = ({ lang, navigate }) => {
    return (
        <div className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{t(lang, 'serviceLEDTitle')}</h1>
                    <img src="https://picsum.photos/seed/ledscreen-page/1200/600" alt={t(lang, 'serviceLEDTitle')} className="my-8 rounded-lg shadow-lg" />
                    <p className="mt-4 text-lg text-gray-600">{t(lang, 'serviceLEDDesc')}</p>
                    <button
                        onClick={() => navigate(Page.Contact)}
                        className="mt-8 bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        {t(lang, 'bookNow')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LEDScreenPage;