import React from 'react';
import { BasePageProps, Page } from '../types';
import { t, TranslationKey } from '../i18n/index';
import { CheckIcon } from '../components/icons/CheckIcon';

const MagicMirrorPage: React.FC<BasePageProps> = ({ lang, navigate }) => {

    const packages = [
      {
        titleKey: 'packageBasicTitle' as TranslationKey,
        features: [
          'packageBasicFeature1',
          'packageBasicFeature2',
          'packageBasicFeature3',
          'packageBasicFeature4',
          'packageBasicFeature5',
          'packageBasicFeature6',
          'packageBasicFeature7',
          'packageBasicFeature8',
          'packageBasicFeature9',
          'packageBasicFeature10',
          'packageBasicFeature11',
          'packageBasicFeature12',
        ] as TranslationKey[],
        isPopular: false,
      },
      {
        titleKey: 'packageStandardTitle' as TranslationKey,
        features: [
            'packageStandardFeature1',
            'packageStandardFeature2',
            'packageStandardFeature3',
            'packageStandardFeature4',
            'packageStandardFeature5',
            'packageStandardFeature6',
            'packageStandardFeature7',
            'packageStandardFeature8',
            'packageStandardFeature9',
            'packageStandardFeature10',
            'packageStandardFeature11',
            'packageStandardFeature12',
        ] as TranslationKey[],
        isPopular: true,
      },
      {
        titleKey: 'packagePremiumTitle' as TranslationKey,
        features: [
          'packagePremiumFeature1',
          'packagePremiumFeature2',
          'packagePremiumFeature3',
          'packagePremiumFeature4',
          'packagePremiumFeature5',
          'packagePremiumFeature6',
          'packagePremiumFeature7',
          'packagePremiumFeature8',
          'packagePremiumFeature9',
          'packagePremiumFeature10',
          'packagePremiumFeature11',
          'packagePremiumFeature12',
          'packagePremiumFeature13',
        ] as TranslationKey[],
        isPopular: false,
      },
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{t(lang, 'serviceMirrorTitle')}</h1>
                        <img src="https://picsum.photos/seed/classicmirror-page/1200/600" alt={t(lang, 'serviceMirrorTitle')} className="my-8 rounded-lg shadow-lg" />
                        <p className="mt-4 text-lg text-gray-600">{t(lang, 'serviceMirrorDesc')}</p>
                    </div>
                </div>
            </div>

            {/* Packages Section */}
            <div className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t(lang, 'magicMirrorPackagesTitle')}</h2>
                        <p className="mt-4 text-lg text-gray-600">{t(lang, 'magicMirrorPackagesSubtitle')}</p>
                    </div>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages.map((pkg) => (
                             <div key={pkg.titleKey} className={`bg-white p-8 rounded-lg shadow-lg border flex flex-col ${pkg.isPopular ? 'border-purple-500 border-2' : 'border-gray-200'} relative`}>
                                {pkg.isPopular && (
                                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {t(lang, 'packageMostPopular')}
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">{t(lang, pkg.titleKey)}</h3>
                                <ul className="space-y-4 text-gray-600 flex-grow mb-8">
                                    {pkg.features.map(featureKey => (
                                        <li key={featureKey} className="flex items-start">
                                            <CheckIcon className="h-6 w-6 text-green-500 mr-3 rtl:ml-3 rtl:mr-0 flex-shrink-0" />
                                            <span>{t(lang, featureKey)}</span>
                                        </li>

                                    ))}
                                </ul>
                                <button
                                    onClick={() => navigate(Page.Contact)}
                                    className={`w-full font-bold py-3 px-8 rounded-full text-lg mt-auto transition-transform duration-300 ease-in-out hover:scale-105 ${pkg.isPopular ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                                >
                                    {t(lang, 'packageBookButton')}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery Section */}
            <div className="py-16 md:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{t(lang, 'magicMirrorGalleryTitle')}</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{t(lang, 'magicMirrorGallerySubtitle')}</p>
                    </div>
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Props Card */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                            <img src="https://picsum.photos/seed/mirrorprops/600/400" alt={t(lang, 'magicMirrorGalleryPropsTitle')} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{t(lang, 'magicMirrorGalleryPropsTitle')}</h3>
                                <p className="text-gray-600">{t(lang, 'magicMirrorGalleryPropsDesc')}</p>
                            </div>
                        </div>
                        {/* Envelopes Card */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                            <img src="https://picsum.photos/seed/mirrorenvelopes/600/400" alt={t(lang, 'magicMirrorGalleryEnvelopesTitle')} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{t(lang, 'magicMirrorGalleryEnvelopesTitle')}</h3>
                                <p className="text-gray-600">{t(lang, 'magicMirrorGalleryEnvelopesDesc')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MagicMirrorPage;
