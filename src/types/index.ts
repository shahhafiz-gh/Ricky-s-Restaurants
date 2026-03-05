

export interface NavLink {
    label: string;
    href: string;
}

export interface SocialLink {
    platform: string;
    href: string;
    label: string;
}

export interface ContactInfo {
    phone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}

export interface OperatingHours {
    days: string;
    hours: string;
}

export interface FeaturedDish {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    badge?: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    quote: string;
    rating: number;
}

export interface CateringHighlight {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: string;
    badge?: string;
}

export interface MenuCategory {
    id: string;
    name: string;
    description: string;
    items: MenuItem[];
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
}

export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    span?: "wide" | "tall" | "normal";
}

export interface CateringPackage {
    id: string;
    name: string;
    description: string;
    priceRange: string;
    features: string[];
    popular?: boolean;
}
