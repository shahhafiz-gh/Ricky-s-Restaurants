import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "@/styles/globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";



const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
    variable: "--font-lato",
    display: "swap",
});


export const metadata: Metadata = {
    metadataBase: new URL("https://rickysrestaurant.com"),
    title: {
        default: "Ricky's Restaurant — Luxury Dining Experience",
        template: "%s | Ricky's Restaurant",
    },
    description:
        "Experience luxury dining at Ricky's Restaurant. Premium culinary delights with a warm, elegant atmosphere in the heart of the city.",
    keywords: [
        "Ricky's Restaurant",
        "luxury dining",
        "fine dining",
        "restaurant",
        "catering",
        "reservations",
        "gourmet food",
    ],
    openGraph: {
        title: "Ricky's Restaurant — Luxury Dining Experience",
        description:
            "Experience luxury dining at Ricky's Restaurant. Premium culinary delights with a warm, elegant atmosphere.",
        url: "https://rickysrestaurant.com",
        siteName: "Ricky's Restaurant",
        images: [
            {
                url: "/assets/images/hero-bg.webp",
                width: 1200,
                height: 630,
                alt: "Rickys Restaurant Dining Room",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ricky's Restaurant — Luxury Dining",
        description: "Premium culinary delights with a warm, elegant atmosphere.",
        images: ["/assets/images/hero-bg.webp"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "/",
    },
};


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
            <body className="flex min-h-screen flex-col font-body antialiased">
                <SmoothScroll>
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-brown-900 focus:font-semibold"
                    >
                        Skip to main content
                    </a>

                    <Navbar />

                    <main
                        id="main-content"
                        className="flex-1"
                    >
                        {children}
                    </main>

                    <Footer />
                </SmoothScroll>
            </body>
        </html>
    );
}
