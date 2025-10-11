import React, { useState, useEffect } from 'react';
import { Page } from './types';
import { Language } from './i18n';
import { AuthProvider } from './contexts/AuthContext';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VideoBooth360Page from './pages/VideoBooth360Page';
import MagicMirrorPage from './pages/MagicMirrorPage';
import AudioGuestRoomPage from './pages/AudioGuestRoomPage';
import AlbumPrintingPage from './pages/AlbumPrintingPage';
import AIBoothPage from './pages/AIBoothPage';
import MusicPhotoBoothPage from './pages/MusicPhotoBoothPage';
import LEDScreenPage from './pages/LEDScreenPage';
import ClientsPage from './pages/ClientsPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AccountPage from './pages/AccountPage';
import LiveSupportWidget from './components/LiveSupportWidget';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
    const [lang, setLang] = useState<Language>('en');

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);

    const navigate = (page: Page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        const props = { navigate, lang };
        switch (currentPage) {
            case Page.Home:
                return <HomePage {...props} />;
            case Page.About:
                return <AboutPage {...props} />;
            case Page.VideoBooth360:
                return <VideoBooth360Page {...props} />;
            case Page.MagicMirror:
                return <MagicMirrorPage {...props} />;
            case Page.AudioGuestRoom:
                return <AudioGuestRoomPage {...props} />;
            case Page.AlbumPrinting:
                return <AlbumPrintingPage {...props} />;
            case Page.LEDScreen:
                return <LEDScreenPage {...props} />;
            case Page.AIBooth:
                return <AIBoothPage {...props} />;
            case Page.MusicPhotoBooth:
                return <MusicPhotoBoothPage {...props} />;
            case Page.Clients:
                return <ClientsPage {...props} />;
            case Page.Reviews:
                return <ReviewsPage {...props} />;
            case Page.Contact:
                return <ContactPage {...props} />;
            case Page.Login:
                return <LoginPage {...props} />;
            case Page.SignUp:
                return <SignUpPage {...props} />;
            case Page.Account:
                return <AccountPage {...props} />;
            default:
                return <HomePage {...props} />;
        }
    };

    return (
        <AuthProvider>
            <div className={`App font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
                <Header navigate={navigate} currentPage={currentPage} lang={lang} setLang={setLang} />
                <main>
                    {renderPage()}
                </main>
                <Footer lang={lang} />
                <LiveSupportWidget lang={lang} />
            </div>
        </AuthProvider>
    );
};

export default App;