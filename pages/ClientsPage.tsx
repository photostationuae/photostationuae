import React from 'react';
import { BasePageProps } from '../types';
import { t } from '../i18n/index';
import { clients } from '../constants';
import ClientLogo from '../components/ClientLogo';

const ClientsPage: React.FC<BasePageProps> = ({ lang }) => {
    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t(lang, 'clientsTitle')}</h2>
                    <p className="mt-4 text-lg text-gray-600">{t(lang, 'clientsSubtitle')}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {clients.map((client) => (
                        <ClientLogo key={client.nameKey} client={client} lang={lang} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientsPage;
