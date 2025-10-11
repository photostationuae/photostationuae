import React from 'react';
import { BasePageProps } from '../types';
import { t } from '../i18n/index';

const AboutPage: React.FC<BasePageProps> = ({ lang }) => {
    return (
        <div className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{t(lang, 'aboutTitle')}</h1>
                    <div className="mt-8 text-lg text-gray-600 space-y-6 text-left rtl:text-right">
                        <p>{t(lang, 'aboutTextP1')}</p>
                        <p>{t(lang, 'aboutTextP2')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
