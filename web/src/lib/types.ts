// Type definitions for Kashmir Tours data

export interface Destination {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    imagePosition?: 'top' | 'center' | 'bottom';
    stats: {
        altitude: string;
        bestTime: string;
        distance: string;
    };
    attractions: { title: string; desc: string }[];
}

export interface ItineraryItem {
    day: number;
    title: string;
    desc: string;
    highlights?: string[];
    meals?: string;
    accommodation?: string;
    distance?: string;
    icon?: 'plane' | 'car' | 'mountain' | 'lake' | 'camera' | 'shopping' | 'temple' | 'ski' | 'food';
    timelineImage?: string;
    imagePosition?: string;
}

export interface Package {
    id: string;
    title: string;
    tagline: string;
    price: number;
    originalPrice?: number;
    days: number;
    nights: number;
    rating: number;
    reviews: number;
    image: string;
    gallery?: string[];
    category: string;
    groupSize: string;
    difficulty: string;
    overview: string;
    isLadakh?: boolean;
    highlights: string[];
    inclusions: string[];
    exclusions: string[];
    route: string[];
    itinerary: ItineraryItem[];
}
