import React from 'react';
import { BasePageProps } from '../types';
import { t } from '../i18n/index';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC<BasePageProps> = ({ lang }) => {
    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t(lang, 'contactTitle')}</h2>
                        <p className="mt-4 text-lg text-gray-600">{t(lang, 'contactSubtitle')}</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                        <ContactForm lang={lang} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
