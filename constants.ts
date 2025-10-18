import { Service, Review, Page, Client } from './types';

export const audioGuestBookImage = 'data:image/jpeg;base64,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';

export const services: Omit<Service, 'title' | 'description'>[] = [
    {
        titleKey: 'service360Title',
        descriptionKey: 'service360Desc',
        imageUrl: 'https://picsum.photos/seed/360booth/600/400',
        page: Page.VideoBooth360,
    },
    {
        titleKey: 'serviceMirrorTitle',
        descriptionKey: 'serviceMirrorDesc',
        imageUrl: 'https://picsum.photos/seed/classicmirror/600/400',
        page: Page.MagicMirror, 
    },
    {
        titleKey: 'serviceAITitle',
        descriptionKey: 'serviceAIDesc',
        imageUrl: 'https://picsum.photos/seed/futurebooth/600/400',
        isAI: true,
        page: Page.AIBooth,
    },
    {
        titleKey: 'serviceAudioTitle',
        descriptionKey: 'serviceAudioDesc',
        imageUrl: audioGuestBookImage,
        page: Page.AudioGuestRoom,
    },
    {
        titleKey: 'serviceAlbumTitle',
        descriptionKey: 'serviceAlbumDesc',
        imageUrl: 'https://picsum.photos/seed/albumprint/600/400',
        page: Page.AlbumPrinting,
    },
    {
        titleKey: 'serviceLEDTitle',
        descriptionKey: 'serviceLEDDesc',
        imageUrl: 'https://picsum.photos/seed/ledscreen/600/400',
        page: Page.LEDScreen,
    },
];

export const reviews: Review[] = [
    {
        authorKey: 'review1Author',
        locationKey: 'review1Location',
        rating: 5,
        textKey: 'review1Text',
    },
    {
        authorKey: 'review2Author',
        locationKey: 'review2Location',
        rating: 5,
        textKey: 'review2Text',
    },
    {
        authorKey: 'review3Author',
        locationKey: 'review3Location',
        rating: 5,
        textKey: 'review3Text',
    },
    {
        authorKey: 'review4Author',
        locationKey: 'review4Location',
        rating: 4,
        textKey: 'review4Text',
    },
    {
        authorKey: 'review5Author',
        locationKey: 'review5Location',
        rating: 5,
        textKey: 'review5Text',
    },
    {
        authorKey: 'review6Author',
        locationKey: 'review6Location',
        rating: 5,
        textKey: 'review6Text',
    },
];

export const clients: Client[] = [
    { nameKey: 'client1Name', logoUrl: 'https://picsum.photos/seed/logo1/200/100' },
    { nameKey: 'client2Name', logoUrl: 'https://picsum.photos/seed/logo2/200/100' },
    { nameKey: 'client3Name', logoUrl: 'https://picsum.photos/seed/logo3/200/100' },
    { nameKey: 'client4Name', logoUrl: 'https://picsum.photos/seed/logo4/200/100' },
    { nameKey: 'client5Name', logoUrl: 'https://picsum.photos/seed/logo5/200/100' },
    { nameKey: 'client6Name', logoUrl: 'https://picsum.photos/seed/logo6/200/100' },
    { nameKey: 'client7Name', logoUrl: 'https://picsum.photos/seed/logo7/200/100' },
    { nameKey: 'client8Name', logoUrl: 'https://picsum.photos/seed/logo8/200/100' },
    { nameKey: 'client1Name', logoUrl: 'https://picsum.photos/seed/logo9/200/100' },
    { nameKey: 'client2Name', logoUrl: 'https://picsum.photos/seed/logo10/200/100' },
    { nameKey: 'client3Name', logoUrl: 'https://picsum.photos/seed/logo11/200/100' },
    { nameKey: 'client4Name', logoUrl: 'https://picsum.photos/seed/logo12/200/100' },
    { nameKey: 'client5Name', logoUrl: 'https://picsum.photos/seed/logo13/200/100' },
    { nameKey: 'client6Name', logoUrl: 'https://picsum.photos/seed/logo14/200/100' },
    { nameKey: 'client7Name', logoUrl: 'https://picsum.photos/seed/logo15/200/100' },
    { nameKey: 'client8Name', logoUrl: 'https://picsum.photos/seed/logo16/200/100' },
];
