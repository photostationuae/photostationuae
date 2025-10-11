import { TranslationKey } from "./i18n/index";

export enum Page {
    Home = 'home',
    About = 'about',
    VideoBooth360 = 'video-booth-360',
    AudioGuestRoom = 'audio-guest-room',
    AlbumPrinting = 'album-printing',
    LEDScreen = 'led-screen',
    AIBooth = 'ai-booth',
    Clients = 'clients',
    Reviews = 'reviews',
    Contact = 'contact',
    Login = 'login',
    SignUp = 'signup',
    Account = 'account',
}

export interface Service {
    titleKey: TranslationKey;
    descriptionKey: TranslationKey;
    imageUrl: string;
    isAI?: boolean;
    page: Page;
}

export interface Review {
    authorKey: TranslationKey;
    locationKey: TranslationKey;
    rating: number;
    textKey: TranslationKey;
}

export interface Client {
    nameKey: TranslationKey;
    logoUrl: string;
}

export interface BasePageProps {
    navigate: (page: Page) => void;
    lang: 'en' | 'ar';
}

export interface User {
    id: string;
    name: string;
    email: string;
}

// Types for AI Album Design
export interface AlbumPageLayout {
    layout: 'single-full' | 'two-vertical' | 'two-horizontal' | 'three-collage' | 'four-grid';
    imageIndexes: number[];
}

export type AlbumDesign = AlbumPageLayout[];