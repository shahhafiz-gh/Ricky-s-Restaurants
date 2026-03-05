import type { Config } from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "1.5rem",
                md: "2rem",
                lg: "2.5rem",
                xl: "3rem",
                "2xl": "4rem",
            },
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                gold: {
                    50: "#FDF8EB",
                    100: "#FAF0D2",
                    200: "#F5E0A5",
                    300: "#EFD078",
                    400: "#D4A843",
                    DEFAULT: "#C89B3C",
                    500: "#C89B3C",
                    600: "#A67D2E",
                    700: "#846022",
                    800: "#634817",
                    900: "#42300F",
                    950: "#211808",
                },
                brown: {
                    50: "#F5EDE6",
                    100: "#EADACC",
                    200: "#D5B599",
                    300: "#C09066",
                    400: "#8B5E3C",
                    DEFAULT: "#3B2A1A",
                    500: "#3B2A1A",
                    600: "#322315",
                    700: "#291C11",
                    800: "#1F150C",
                    900: "#160F08",
                    950: "#0D0804",
                },
                cream: {
                    50: "#FFFEF9",
                    100: "#FEFCF0",
                    200: "#FDF9E6",
                    300: "#FBF5D6",
                    DEFAULT: "#FAF3CD",
                    400: "#F5E89E",
                    500: "#F0DD6F",
                },
            },

            // Typography 
            fontFamily: {
                display: ["var(--font-playfair)", "Georgia", "serif"],
                body: ["var(--font-lato)", "system-ui", "sans-serif"],
            },
            fontSize: {
                "display-xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "display-lg": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "display-md": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
                "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
                "heading-lg": ["1.875rem", { lineHeight: "1.3" }],
                "heading-md": ["1.5rem", { lineHeight: "1.35" }],
                "heading-sm": ["1.25rem", { lineHeight: "1.4" }],
                "body-lg": ["1.125rem", { lineHeight: "1.6" }],
                "body-md": ["1rem", { lineHeight: "1.6" }],
                "body-sm": ["0.875rem", { lineHeight: "1.5" }],
                "caption": ["0.75rem", { lineHeight: "1.5" }],
            },

            //    Spacing
            spacing: {
                "4.5": "1.125rem",
                "13": "3.25rem",
                "15": "3.75rem",
                "18": "4.5rem",
                "22": "5.5rem",
                "26": "6.5rem",
                "30": "7.5rem",
                "34": "8.5rem",
                "section-sm": "3rem",
                "section": "5rem",
                "section-lg": "7rem",
                "section-xl": "9rem",
            },

            // /Containers
            maxWidth: {
                "content-sm": "540px",
                "content-md": "720px",
                "content-lg": "960px",
                "content-xl": "1140px",
                "content-2xl": "1320px",
            },

            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                card: "0.75rem",
            },

            boxShadow: {
                "card": "0 2px 8px -2px rgba(59, 42, 26, 0.08), 0 4px 16px -4px rgba(59, 42, 26, 0.12)",
                "card-hover": "0 4px 12px -2px rgba(59, 42, 26, 0.12), 0 8px 24px -4px rgba(59, 42, 26, 0.18)",
                "gold-glow": "0 0 20px rgba(200, 155, 60, 0.3)",
                "gold-glow-lg": "0 0 40px rgba(200, 155, 60, 0.4)",
                "inner-gold": "inset 0 2px 4px 0 rgba(200, 155, 60, 0.06)",
            },

            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "fade-in": {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                "fade-in-up": {
                    from: { opacity: "0", transform: "translateY(16px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in-down": {
                    from: { opacity: "0", transform: "translateY(-16px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "slide-in-left": {
                    from: { opacity: "0", transform: "translateX(-24px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                "slide-in-right": {
                    from: { opacity: "0", transform: "translateX(24px)" },
                    to: { opacity: "1", transform: "translateX(0)" },
                },
                "scale-in": {
                    from: { opacity: "0", transform: "scale(0.95)" },
                    to: { opacity: "1", transform: "scale(1)" },
                },
                "shimmer": {
                    from: { backgroundPosition: "200% 0" },
                    to: { backgroundPosition: "-200% 0" },
                },
                "gold-pulse": {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(200, 155, 60, 0.2)" },
                    "50%": { boxShadow: "0 0 30px rgba(200, 155, 60, 0.4)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "fade-in": "fade-in 0.5s ease-out forwards",
                "fade-in-up": "fade-in-up 0.6s ease-out forwards",
                "fade-in-down": "fade-in-down 0.6s ease-out forwards",
                "slide-in-left": "slide-in-left 0.6s ease-out forwards",
                "slide-in-right": "slide-in-right 0.6s ease-out forwards",
                "scale-in": "scale-in 0.4s ease-out forwards",
                "shimmer": "shimmer 3s ease-in-out infinite",
                "gold-pulse": "gold-pulse 3s ease-in-out infinite",
            },

            backgroundImage: {
                "gold-gradient": "linear-gradient(135deg, #C89B3C, #D4A843, #EFD078)",
                "brown-gradient": "linear-gradient(135deg, #3B2A1A, #634817, #3B2A1A)",
                "hero-gradient": "linear-gradient(180deg, rgba(59,42,26,0.85) 0%, rgba(59,42,26,0.6) 50%, rgba(59,42,26,0.85) 100%)",
                "card-gradient": "linear-gradient(180deg, rgba(250,243,205,0.04) 0%, rgba(200,155,60,0.06) 100%)",
                "shimmer-gradient": "linear-gradient(90deg, transparent, rgba(200,155,60,0.08), transparent)",
            },

            transitionDuration: {
                "DEFAULT": "200ms",
                "400": "400ms",
                "600": "600ms",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
