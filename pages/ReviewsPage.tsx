import React from 'react';
import { reviews } from '../constants';
import ReviewCard from '../components/ReviewCard';
import { Language, t } from '../i18n';

interface ReviewsPageProps {
    lang: Language;
}

const ReviewsPage: React.FC<ReviewsPageProps> = ({ lang }) => {
    const extendedReviews = [...reviews, ...reviews];

    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t(lang, 'reviewsTitle')}</h2>
                    <p className="mt-4 text-lg text-gray-600">{t(lang, 'reviewsSubtitle')}</p>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-marquee">
                        {extendedReviews.map((review, index) => (
                             <div key={index} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
                                <ReviewCard review={review} lang={lang} />
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent rtl:left-auto rtl:right-0 rtl:bg-gradient-to-l"></div>
                    <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent rtl:right-auto rtl:left-0 rtl:bg-gradient-to-r"></div>
                </div>
                
                <div className="text-center mt-16">
                     <a 
                        href="https://www.google.com/search?q=photo+booth+rental+uae" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white text-gray-800 hover:bg-gray-100 border border-gray-300 font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out hover:scale-105 inline-flex items-center shadow"
                    >
                        <svg className="w-6 h-6 me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                          <path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                        </svg>
                        {t(lang, 'googleReviewButton')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;