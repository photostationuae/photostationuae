import React from 'react';
import { BasePageProps, Page } from '../types';
import { t } from '../i18n/index';
import { useAuth } from '../contexts/AuthContext';

const AccountPage: React.FC<BasePageProps> = ({ navigate, lang }) => {
    const { currentUser, logout } = useAuth();

    if (!currentUser) {
        // This shouldn't happen if routing is protected, but as a fallback
        navigate(Page.Login);
        return null;
    }

    const handleLogout = () => {
        logout();
        navigate(Page.Home);
    };

    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{t(lang, 'navAccount')}</h2>
                    <div className="space-y-4">
                        <div>
                            <p className="font-semibold">{t(lang, 'contactName')}:</p>
                            <p>{currentUser.name}</p>
                        </div>
                         <div>
                            <p className="font-semibold">{t(lang, 'contactEmail')}:</p>
                            <p>{currentUser.email}</p>
                        </div>
                        <button onClick={handleLogout} className="w-full mt-4 flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700">
                            {t(lang, 'navLogout')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;
