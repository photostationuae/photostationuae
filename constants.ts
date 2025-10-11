import { Service, Review, Page, Client } from './types';

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
        titleKey: 'serviceMusicTitle',
        descriptionKey: 'serviceMusicDesc',
        imageUrl: 'https://picsum.photos/seed/musicbooth/600/400',
        page: Page.MusicPhotoBooth,
    },
    {
        titleKey: 'serviceAudioTitle',
        descriptionKey: 'serviceAudioDesc',
        imageUrl: 'https://picsum.photos/seed/audioguest/600/400',
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