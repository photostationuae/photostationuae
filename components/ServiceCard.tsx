import React from 'react';
import { Service } from '../types';
import { Language, t } from '../i18n/index';

interface ServiceCardProps {
    service: Omit<Service, 'title' | 'description'>;
    lang: Language;
    onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, lang, onClick }) => {
    return (
        <div 
            className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-gray-200 flex flex-col"
            onClick={onClick}
        >
            <div className="relative">
                <img className="w-full h-56 object-cover" src={service.imageUrl} alt={t(lang, service.titleKey)} />
                {service.isAI && (
                    <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
                        AI POWERED
                    </div>
                )}
            </div>
            <div className="p-6 bg-white flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-2 text-gray-800">{t(lang, service.titleKey)}</h3>
                <p className="text-gray-600 text-base flex-grow">{t(lang, service.descriptionKey)}</p>
                <div className="mt-4">
                    <span className="inline-block bg-transparent text-purple-600 font-semibold py-2 transition-all duration-300 group-hover:underline">
                        Learn More &rarr;
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
