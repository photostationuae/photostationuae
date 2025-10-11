import React, { useState } from 'react';
import { Language, t } from '../i18n/index';

const ContactForm: React.FC<{ lang: Language }> = ({ lang }) => {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate form submission
        setTimeout(() => {
            setStatus('sent');
        }, 1000);
    };

    if (status === 'sent') {
        return <p className="text-center text-lg text-green-600">Thank you for your message! We will get back to you shortly.</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t(lang, 'contactName')}</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t(lang, 'contactEmail')}</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
            </div>
             <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t(lang, 'contactPhone')}</label>
                <input type="tel" name="phone" id="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t(lang, 'contactMessage')}</label>
                <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"></textarea>
            </div>
            <div>
                <button type="submit" disabled={status === 'sending'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:bg-purple-300">
                    {status === 'sending' ? 'Sending...' : t(lang, 'contactSend')}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
