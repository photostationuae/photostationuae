import React from 'react';
import { Client } from '../types';
import { Language, t } from '../i18n';

interface ClientLogoProps {
    client: Client;
    lang: Language;
}

const ClientLogo: React.FC<ClientLogoProps> = ({ client, lang }) => {
    return (
        <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center transition duration-300 ease-in-out hover:shadow-md hover:bg-white border border-transparent hover:border-gray-200">
            <img 
                src={client.logoUrl} 
                alt={t(lang, client.nameKey)}
                className="max-h-16 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
                title={t(lang, client.nameKey)}
            />
        </div>
    );
};

export default ClientLogo;
