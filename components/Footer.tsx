import React from 'react';
import { VisaLogo } from './icons/VisaLogo';
import { MastercardLogo } from './icons/MastercardLogo';
import { TabbyLogo } from './icons/TabbyLogo';
import { TamaraLogo } from './icons/TamaraLogo';
import { ApplePayLogo } from './icons/ApplePayLogo';
// FIX: Corrected i18n import path for consistency.
import { t, Language } from '../i18n/index';
import { InstagramIcon } from './icons/InstagramIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';

interface FooterProps {
    lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center mb-8">
                    <div>
                        <p className="font-semibold text-gray-600 mb-4">{t(lang, 'footerPayments')}</p>
                        <div className="flex justify-center items-center space-x-4 md:space-x-6 rtl:space-x-reverse text-gray-500">
                            <VisaLogo className="h-6" />
                            <MastercardLogo className="h-6" />
                            <TabbyLogo className="h-5" />
                            <TamaraLogo className="h-5" />
                            <ApplePayLogo className="h-6" />
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-600 mb-4">{t(lang, 'footerFollowUs')}</p>
                        <div className="flex justify-center items-center space-x-6 rtl:space-x-reverse">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                                <InstagramIcon className="h-6 w-6" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                                <FacebookIcon className="h-6 w-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-900 transition-colors duration-300">
                                <LinkedInIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 text-center text-gray-500 pt-8">
                    <p>&copy; {new Date().getFullYear()} {t(lang, 'logoPart1')} {t(lang, 'logoPart2')}. {t(lang, 'footerCopyright')}</p>
                    <p className="text-sm">{t(lang, 'footerLocation')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;