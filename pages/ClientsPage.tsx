import React from 'react';
import { BasePageProps } from '../types';
import { t } from '../i18n/index';
import { clients } from '../constants';
import ClientLogo from '../components/ClientLogo';

const ClientsPage: React.FC<BasePageProps> = ({ lang }) => {
    // Duplicate clients for a seamless loop
    const extendedClients = [...clients, ...clients];

    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t(lang, 'clientsTitle')}</h2>
                    <p className="mt-4 text-lg text-gray-600">{t(lang, 'clientsSubtitle')}</p>
                </div>
                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-marquee">
                        {extendedClients.map((client, index) => (
                             <div key={`${client.nameKey}-${index}`} className="flex-shrink-0 w-1/4 sm:w-1/5 md:w-1/6 lg:w-1/8 px-4">
                                <ClientLogo client={client} lang={lang} />
                            </div>
                        ))}
                    </div>
                     <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent"></div>
                    <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent"></div>
                </div>
            </div>
        </div>
    );
};

export default ClientsPage;