import type { NavLink, SocialLink, ContactInfo, OperatingHours, FeaturedDish, Testimonial, CateringHighlight } from "@/types";


export const SITE_NAME = "Rickys Restaurant";
export const SITE_TAGLINE = "A Luxury Dining Experience";
export const SITE_DESCRIPTION =
    "Indulge in an unforgettable culinary journey at Rickys Restaurant. Where timeless elegance meets modern gastronomy, crafted with the finest ingredients and served with passion.";

export const NAV_LINKS: NavLink[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Menu", href: "/menu" },
    { label: "Catering", href: "/catering" },
    { label: "Contact", href: "/contact" },
];

export const CTA_LINK: NavLink = {
    label: "Reservation",
    href: "/reservation",
};

export const FOOTER_LINKS: NavLink[] = [
    { label: "About Us", href: "/about" },
    { label: "Our Menu", href: "/menu" },
    { label: "Catering Services", href: "/catering" },
    { label: "Make a Reservation", href: "/reservation" },
    { label: "Contact Us", href: "/contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
    { platform: "facebook", href: "https://facebook.com", label: "Facebook" },
    { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
    { platform: "twitter", href: "https://twitter.com", label: "Twitter" },
];

export const CONTACT_INFO: ContactInfo = {
    phone: "+971 4 555 7890",
    email: "info@rickysrestaurant.ae",
    address: "Gate Village 3, DIFC",
    city: "Dubai",
    state: "UAE",
    zip: "507211",
};

export const OPERATING_HOURS: OperatingHours[] = [
    { days: "Monday – Thursday", hours: "11:00 AM – 10:00 PM" },
    { days: "Friday – Saturday", hours: "11:00 AM – 11:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 9:00 PM" },
];


export const ABOUT_PREVIEW = {
    heading: "Our Story",
    subheading: "A Legacy of Culinary Excellence",
    text: "For over two decades, Rickys Restaurant has been a cornerstone of fine dining in Dubai. Founded by Executive Chef Ricky Morales, our kitchen blends time-honored Middle Eastern culinary traditions with bold, contemporary flavors. Every dish tells a story — sourced from the finest regional farms and global purveyors, prepared with passion, and presented with artistry.",
    cta: { label: "Learn More About Us", href: "/about" },
};

export const FEATURED_DISHES: FeaturedDish[] = [
    {
        id: "pan-seared-salmon",
        name: "Pan-Seared Salmon",
        description: "Atlantic salmon with crispy skin, herb butter sauce, and seasonal microgreens.",
        price: 38,
        image: "/images/dish-salmon.webp",
        badge: "Chef's Pick",
    },
    {
        id: "wagyu-ribeye",
        name: "Wagyu Ribeye",
        description: "Premium A5 wagyu, red wine reduction, roasted vegetables, and truffle jus.",
        price: 72,
        image: "/images/dish-steak.webp",
        badge: "Signature",
    },
    {
        id: "truffle-pasta",
        name: "Black Truffle Pasta",
        description: "Handmade fettuccine, black truffle cream, aged parmesan, and fresh herbs.",
        price: 34,
        image: "/images/dish-pasta.webp",
    },
    {
        id: "butter-lobster",
        name: "Butter-Poached Lobster",
        description: "Maine lobster tail over saffron risotto with grilled asparagus and champagne foam.",
        price: 58,
        image: "/images/dish-lobster-tail.webp",
        badge: "New",
    },
    {
        id: "duck-confit",
        name: "Duck Confit",
        description: "Slow-cooked duck leg with cherry gastrique, layered potato gratin, and micro herbs.",
        price: 42,
        image: "/images/dish-duck.webp",
    },
    {
        id: "tuna-tartare",
        name: "Tuna Tartare",
        description: "Sushi-grade tuna, avocado, toasted sesame, crispy wontons, and yuzu vinaigrette.",
        price: 22,
        image: "/images/dish-tuna-tartare.webp",
        badge: "Popular",
    },
    {
        id: "lamb-rack",
        name: "Herb-Crusted Lamb",
        description: "New Zealand lamb rack with mint pesto, roasted root vegetables, and rosemary jus.",
        price: 52,
        image: "/images/dish-lamb.webp",
    },
    {
        id: "creme-brulee",
        name: "Crème Brûlée",
        description: "Classic Tahitian vanilla bean custard with caramelized sugar, fresh berries, and mint.",
        price: 14,
        image: "/images/dish-brulee.webp",
        badge: "Dessert",
    },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: "testimonial-1",
        name: "Fatima Al Maktoum",
        role: "Food Critic, Gulf News",
        quote: "An extraordinary dining experience. The wagyu ribeye is simply the best I've had in Dubai. Every detail, from the ambiance to the plating, exudes sophistication.",
        rating: 5,
    },
    {
        id: "testimonial-2",
        name: "Omar Al Rashid",
        role: "Regular Guest",
        quote: "Rickys has been our family's go-to for special occasions for years. The truffle pasta is divine, and the staff makes you feel like royalty every single visit.",
        rating: 5,
    },
    {
        id: "testimonial-3",
        name: "Layla Hassan",
        role: "Wedding Planner",
        quote: "We entrusted Rickys with our catering for a DIFC gala and they exceeded every expectation. Impeccable presentation, outstanding flavors, and flawless service throughout the entire evening.",
        rating: 5,
    },
];

export const CATERING_HIGHLIGHTS: CateringHighlight[] = [
    {
        id: "private-events",
        title: "Private Events",
        description: "Intimate gatherings to grand celebrations, curated to perfection with bespoke menus.",
        icon: "champagne",
    },
    {
        id: "corporate-dining",
        title: "Corporate Dining",
        description: "Impress clients and reward your team with world-class cuisine and impeccable service.",
        icon: "briefcase",
    },
    {
        id: "wedding-catering",
        title: "Wedding Catering",
        description: "Make your special day unforgettable with our elegant, full-service wedding catering.",
        icon: "heart",
    },
];
