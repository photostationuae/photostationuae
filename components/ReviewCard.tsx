import React from 'react';
import { Review } from '../types';
import { StarIcon } from './icons/StarIcon';
// FIX: Corrected i18n import path for consistency.
import { Language, t } from '../i18n/index';

interface ReviewCardProps {
    review: Review;
    lang: Language;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, lang }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 flex flex-col h-full">
            <div className="flex items-center mb-4">
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                </div>
            </div>
            <p className="text-gray-600 mb-4 flex-grow">"{t(lang, review.textKey)}"</p>
            <div className="mt-auto">
                <p className="font-bold text-gray-800">{t(lang, review.authorKey)}</p>
                <p className="text-sm text-gray-500">{t(lang, review.locationKey)}</p>
            </div>
        </div>
    );
};

export default ReviewCard;