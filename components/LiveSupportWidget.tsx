import React, { useState } from 'react';
import { Language, t } from '../i18n/index';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { CloseIcon } from './icons/CloseIcon';

const LiveSupportWidget: React.FC<{ lang: Language }> = ({ lang }) => {
    const [isOpen, setIsOpen] = useState(false);

    const phoneNumber = "+971501234567"; // Replace with actual number
    const message = "Hello, I'd like to inquire about your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;


    return (
        <div className="fixed bottom-4 right-4 z-50">
            {isOpen && (
                 <div className="bg-white rounded-lg shadow-xl border w-72 mb-2">
                    <div className="p-4 bg-green-500 text-white rounded-t-lg flex justify-between items-center">
                        <h3 className="font-bold">{t(lang, 'liveSupportTitle')}</h3>
                        <button onClick={() => setIsOpen(false)}><CloseIcon /></button>
                    </div>
                    <div className="p-4">
                        <a 
                            href={whatsappUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full bg-green-100 text-green-800 p-3 rounded-md hover:bg-green-200"
                        >
                            <WhatsAppIcon className="h-6 w-6 me-2" />
                            <span>{t(lang, 'liveSupportCTA')}</span>
                        </a>
                    </div>
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Open live support chat"
            >
                <WhatsAppIcon className="h-8 w-8" />
            </button>
        </div>
    );
};

export default LiveSupportWidget;
