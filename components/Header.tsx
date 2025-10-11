import React, { useState } from 'react';
import { Page } from '../types';
import { Language, t } from '../i18n/index';
import { MenuIcon } from './icons/MenuIcon';
import { CloseIcon } from './icons/CloseIcon';
import { useAuth } from '../contexts/AuthContext';
import { Logo } from './icons/Logo';

interface HeaderProps {
    navigate: (page: Page) => void;
    currentPage: Page;
    lang: Language;
    setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ navigate, currentPage, lang, setLang }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { currentUser, logout } = useAuth();

    const navLinks = [
        { page: Page.Home, key: 'navHome' },
        { page: Page.MagicMirror, key: 'navMagicMirror' },
        { page: Page.AIBooth, key: 'navAIBooth' },
        { page: Page.MusicPhotoBooth, key: 'navMusicPhotoBooth' },
        { page: Page.AudioGuestRoom, key: 'navAudioGuestRoom' },
        { page: Page.VideoBooth360, key: 'navVideoBooth360' },
        { page: Page.About, key: 'navAbout' },
        { page: Page.Clients, key: 'navClients' },
        { page: Page.Reviews, key: 'navReviews' },
        { page: Page.Contact, key: 'navContact' },
    ] as const;

    const NavLink: React.FC<{ page: Page, translationKey: string }> = ({ page, translationKey }) => (
        <a
            href={`#${page}`}
            onClick={(e) => {
                e.preventDefault();
                navigate(page);
                setIsMenuOpen(false);
            }}
            className={`px-3 py-2 rounded-md text-sm font-medium ${currentPage === page
                ? 'bg-gray-900 text-white'
                : 'text-gray-700 hover:bg-gray-200 hover:text-black'
                }`}
        >
            {t(lang, translationKey as any)}
        </a>
    );

    const handleLogout = () => {
        logout();
        navigate(Page.Home);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#home" onClick={(e) => { e.preventDefault(); navigate(Page.Home); }} className="flex-shrink-0">
                           <Logo className="h-10 w-auto" />
                        </a>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        {navLinks.map(link => <NavLink key={link.page} page={link.page} translationKey={link.key} />)}
                        <div className="border-l border-gray-300 h-6 mx-4"></div>
                        {currentUser ? (
                            <>
                                <NavLink page={Page.Account} translationKey="navAccount" />
                                <button onClick={handleLogout} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 hover:text-black">
                                    {t(lang, 'navLogout')}
                                </button>
                            </>
                        ) : (
                            <NavLink page={Page.Login} translationKey="navLogin" />
                        )}
                        <button onClick={() => setLang(lang === 'en' ? 'ar' : 'en')} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">
                            {lang === 'en' ? 'العربية' : 'English'}
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                        {navLinks.map(link => <NavLink key={link.page} page={link.page} translationKey={link.key} />)}
                        <div className="border-t border-gray-200 pt-4 mt-4 space-y-1">
                             {currentUser ? (
                                <>
                                    <NavLink page={Page.Account} translationKey="navAccount" />
                                     <a href="#" onClick={(e) => { e.preventDefault(); handleLogout(); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-black">
                                        {t(lang, 'navLogout')}
                                    </a>
                                </>
                            ) : (
                                <NavLink page={Page.Login} translationKey="navLogin" />
                            )}
                            <a href="#" onClick={(e) => { e.preventDefault(); setLang(lang === 'en' ? 'ar' : 'en'); }} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 hover:text-black">
                                {lang === 'en' ? 'العربية' : 'English'}
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

// FIX: Added default export to make the component available for import.
export default Header;