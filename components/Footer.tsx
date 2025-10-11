import React from 'react';
import { VisaLogo } from './icons/VisaLogo';
import { MastercardLogo } from './icons/MastercardLogo';
import { TabbyLogo } from './icons/TabbyLogo';
import { TamaraLogo } from './icons/TamaraLogo';
import { ApplePayLogo } from './icons/ApplePayLogo';
import { t, Language } from '../i18n';

interface FooterProps {
    lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                <div className="mb-4">
                    <p className="font-semibold text-gray-600 mb-4">{t(lang, 'footerPayments')}</p>
                    <div className="flex justify-center items-center space-x-4 md:space-x-6 rtl:space-x-reverse">
                        <VisaLogo className="h-6" />
                        <MastercardLogo className="h-6" />
                        <TabbyLogo className="h-5" />
                        <TamaraLogo className="h-5" />
                        <ApplePayLogo className="h-6" />
                    </div>
                </div>
                <p className="mt-6">&copy; {new Date().getFullYear()} {t(lang, 'logoPart1')} {t(lang, 'logoPart2')}. {t(lang, 'footerCopyright')}</p>
                <p className="text-sm">{t(lang, 'footerLocation')}</p>
            </div>
        </footer>
    );
};

export default Footer;
