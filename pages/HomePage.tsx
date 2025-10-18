import React from 'react';
import { BasePageProps, Page } from '../types';
import { services, clients, reviews } from '../constants';
import { t } from '../i18n/index';
import ServiceCard from '../components/ServiceCard';
import ClientLogo from '../components/ClientLogo';
import ReviewCard from '../components/ReviewCard';
import { StarIcon } from '../components/icons/StarIcon';
import { ShieldCheckIcon } from '../components/icons/ShieldCheckIcon';
import { UserCircleIcon } from '../components/icons/UserCircleIcon';

const HomePage: React.FC<BasePageProps> = ({ navigate, lang }) => {
    const whyChooseUsFeatures = [
        {
            icon: <StarIcon className="h-12 w-12 text-purple-600" />,
            titleKey: 'whyChooseUsFeature1Title',
            descriptionKey: 'whyChooseUsFeature1Desc'
        },
        {
            icon: <ShieldCheckIcon className="h-12 w-12 text-purple-600" />,
            titleKey: 'whyChooseUsFeature2Title',
            descriptionKey: 'whyChooseUsFeature2Desc'
        },
        {
            icon: <UserCircleIcon className="h-12 w-12 text-purple-600" />,
            titleKey: 'whyChooseUsFeature3Title',
            descriptionKey: 'whyChooseUsFeature3Desc'
        }
    ] as const;
    
    const displayedReviews = [...reviews, ...reviews];

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-purple-50 text-center py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">{t(lang, 'homeHeroTitle')}</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t(lang, 'homeHeroSubtitle')}</p>
                    <button
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                        className="mt-8 bg-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-purple-700 transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        {t(lang, 'homeHeroButton')}
                    </button>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.titleKey}
                                service={service}
                                lang={lang}
                                onClick={() => navigate(service.page)}
                            />
                        ))}
                    </div>
                </div>
            </section>

             {/* Why Choose Us Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t(lang, 'whyChooseUsTitle')}</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{t(lang, 'whyChooseUsSubtitle')}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
                        {whyChooseUsFeatures.map((feature) => (
                            <div key={feature.titleKey} className="flex flex-col items-center">
                                <div className="mb-4 bg-purple-100 rounded-full p-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{t(lang, feature.titleKey)}</h3>
                                <p className="text-gray-600">{t(lang, feature.descriptionKey)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t(lang, 'clientsTitle')}</h2>
                        <p className="mt-4 text-lg text-gray-600">{t(lang, 'clientsSubtitle')}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                        {clients.slice(0, 4).map((client) => (
                            <ClientLogo key={client.nameKey} client={client} lang={lang} />
                        ))}
                    </div>
                </div>
            </section>

             {/* Reviews Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                     <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t(lang, 'reviewsTitle')}</h2>
                    </div>
                    <div className="relative w-full overflow-hidden">
                        <div className="flex animate-marquee">
                            {displayedReviews.map((review, index) => (
                                <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
                                    <ReviewCard review={review} lang={lang} />
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white to-transparent rtl:left-auto rtl:right-0 rtl:bg-gradient-to-l"></div>
                        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white to-transparent rtl:right-auto rtl:left-0 rtl:bg-gradient-to-r"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;