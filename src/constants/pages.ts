import type { MenuCategory, TeamMember, GalleryImage, CateringPackage } from "@/types";

export const ABOUT_STORY = {
    title: "Our Story",
    subtitle: "A Legacy of Culinary Excellence Since 2003",
    paragraphs: [
        "Rickys Restaurant was born from a lifelong passion for the art of gastronomy. Founded by Executive Chef Ricky Morales in 2003, what began as a small neighborhood bistro in the heart of Dubai has evolved into one of the city's most celebrated dining destinations.",
        "Our philosophy is simple: source the finest ingredients, honor culinary traditions, and push the boundaries of modern cuisine. Every dish on our menu tells a story — from the regional farms we partner with across the Gulf to the global flavors that inspire our kitchen.",
        "Over two decades, we've earned numerous accolades, but our greatest reward remains the smiles of our guests. Whether you're celebrating a milestone, hosting a business dinner, or simply enjoying an evening out, Rickys is your home for exceptional dining in DIFC.",
    ],
};

export const TEAM_MEMBERS: TeamMember[] = [
    {
        id: "chef-ricky",
        name: "Ricky Morales",
        role: "Executive Chef & Founder",
        bio: "With over 25 years of culinary experience across Europe and the Middle East, Chef Ricky brings an unmatched passion for creating memorable dining experiences. Trained at Le Cordon Bleu, Paris.",
        image: "/assets/images/chef-ricky.webp",
    },
    {
        id: "sous-chef",
        name: "Mariam Al Khouri",
        role: "Head Pastry Chef",
        bio: "Mariam's handmade desserts are legendary. Her chocolate lava cake with gold leaf has become the signature finale at Rickys, drawing guests from across Dubai and Abu Dhabi.",
        image: "/assets/images/chef-maria.webp",
    },
];

export const GALLERY_IMAGES: GalleryImage[] = [
    { id: "g1", src: "/assets/images/hero-bg.webp", alt: "Elegant dining room interior", span: "wide" },
    { id: "g2", src: "/assets/images/dish-salmon.webp", alt: "Pan-seared salmon plating" },
    { id: "g3", src: "/assets/images/dish-steak.webp", alt: "Wagyu ribeye presentation" },
    { id: "g4", src: "/assets/images/catering-setup.webp", alt: "Outdoor garden catering", span: "wide" },
    { id: "g5", src: "/assets/images/dish-pasta.webp", alt: "Truffle pasta close-up" },
    { id: "g6", src: "/assets/images/dish-lobster.webp", alt: "Lobster tail plating" },
    { id: "g7", src: "/assets/images/gallery-cocktails.webp", alt: "Signature craft cocktails at the bar" },
    { id: "g8", src: "/assets/images/gallery-private-dining.webp", alt: "Private dining room with chandelier" },
];

export const MENU_CATEGORIES: MenuCategory[] = [
    {
        id: "starters",
        name: "Starters",
        description: "Begin your journey with our refined appetizers",
        items: [
            { id: "s1", name: "Burrata Caprese", description: "Creamy burrata, heirloom tomatoes, basil oil, aged balsamic", price: 18 },
            { id: "s2", name: "Tuna Tartare", description: "Sushi-grade tuna, avocado, sesame, crispy wonton", price: 22, badge: "Popular" },
            { id: "s3", name: "French Onion Soup", description: "Classic preparation with Gruyère croutons and sherry", price: 16 },
            { id: "s4", name: "Lobster Bisque", description: "Rich and velvety, finished with cognac cream and chives", price: 20 },
        ],
    },
    {
        id: "mains",
        name: "Main Courses",
        description: "Expertly crafted entrées that define our kitchen",
        items: [
            { id: "m1", name: "Pan-Seared Salmon", description: "Atlantic salmon, herb butter, seasonal microgreens", price: 38, image: "/assets/images/dish-salmon.webp", badge: "Chef's Pick" },
            { id: "m2", name: "Wagyu Ribeye", description: "A5 wagyu, red wine reduction, roasted vegetables, truffle jus", price: 72, image: "/assets/images/dish-steak.webp", badge: "Signature" },
            { id: "m3", name: "Black Truffle Pasta", description: "Handmade fettuccine, black truffle cream, aged parmesan", price: 34, image: "/assets/images/dish-pasta.webp" },
            { id: "m4", name: "Butter-Poached Lobster", description: "Maine lobster tail, saffron risotto, asparagus, champagne foam", price: 58, image: "/assets/images/dish-lobster.webp", badge: "New" },
            { id: "m5", name: "Duck Confit", description: "Slow-cooked duck leg, cherry gastrique, potato gratin", price: 42 },
            { id: "m6", name: "Lamb Rack", description: "Herb-crusted New Zealand lamb, mint pesto, roasted root vegetables", price: 52 },
        ],
    },
    {
        id: "desserts",
        name: "Desserts",
        description: "A sweet finale to your dining experience",
        items: [
            { id: "d1", name: "Chocolate Lava Cake", description: "Warm center, gold leaf, raspberry coulis, vanilla ice cream", price: 16, image: "/assets/images/dish-dessert.webp", badge: "Signature" },
            { id: "d2", name: "Crème Brûlée", description: "Classic Tahitian vanilla bean with caramelized sugar", price: 14 },
            { id: "d3", name: "Tiramisu", description: "Espresso-soaked ladyfingers, mascarpone, cocoa dust", price: 15 },
            { id: "d4", name: "Seasonal Sorbet Trio", description: "Three artisan sorbets, fresh fruit garnish", price: 12 },
        ],
    },
    {
        id: "beverages",
        name: "Beverages",
        description: "Curated drinks to complement your meal",
        items: [
            { id: "b1", name: "Gold Rush Cocktail", description: "Bourbon, honey, fresh lemon, gold flakes", price: 18, badge: "House Special" },
            { id: "b2", name: "Sommelier's Wine Pairing", description: "Four-course wine pairing selected by our sommelier", price: 45 },
            { id: "b3", name: "Espresso Martini", description: "Vodka, fresh espresso, coffee liqueur, vanilla", price: 16 },
            { id: "b4", name: "Artisan Mocktail", description: "Seasonal non-alcoholic craft cocktail", price: 12 },
        ],
    },
];

export const CATERING_PACKAGES: CateringPackage[] = [
    {
        id: "silver",
        name: "Silver",
        description: "Perfect for intimate gatherings and small celebrations",
        priceRange: "AED 275 – AED 350 / person",
        features: [
            "Up to 50 guests",
            "3-course seated dinner",
            "Seasonal menu selections",
            "Dedicated event coordinator",
            "Standard table settings",
        ],
    },
    {
        id: "gold",
        name: "Gold",
        description: "Our most popular package for weddings and galas",
        priceRange: "AED 440 – AED 550 / person",
        features: [
            "Up to 150 guests",
            "5-course tasting menu",
            "Premium beverage pairings",
            "Full floral arrangements",
            "Personal chef on-site",
            "Gold-trimmed tableware",
        ],
        popular: true,
    },
    {
        id: "platinum",
        name: "Platinum",
        description: "The ultimate luxury experience for the most discerning hosts",
        priceRange: "AED 750+ / person",
        features: [
            "Unlimited guest count",
            "Fully custom tasting menu",
            "Premium beverage & champagne bar",
            "Live cooking stations",
            "Dedicated service team",
            "Complete venue styling",
            "Chef Ricky personal appearance",
        ],
    },
];

export const CATERING_EVENT_TYPES = [
    { title: "Weddings", description: "Bespoke menus for your perfect day" },
    { title: "Corporate Events", description: "Impress clients and celebrate teams" },
    { title: "Private Dinners", description: "Intimate gatherings, elevated cuisine" },
    { title: "Charity Galas", description: "Elegant dining for meaningful causes" },
    { title: "Birthday Celebrations", description: "Milestone moments, unforgettable flavors" },
    { title: "Holiday Parties", description: "Seasonal feasts crafted with joy" },
];
