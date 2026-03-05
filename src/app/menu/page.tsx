import type { Metadata } from "next";
import Image from "next/image";
import { MENU_CATEGORIES } from "@/constants/pages";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Menu",
    description:
        "Explore the full menu at Rickys Restaurant — from refined starters and signature mains to decadent desserts and curated beverages.",
};

export default function MenuPage() {
    return (
        <>
            <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden">
                <Image
                    src="/images/dish-steak.webp"
                    alt="Signature dishes at Rickys Restaurant"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="overlay-gradient" aria-hidden="true" />
                <div className="relative z-10 text-center">
                    <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                        Culinary Excellence
                    </p>
                    <h1 className="font-display text-display-md font-bold text-white md:text-display-lg">
                        Our Menu
                    </h1>
                    <div className="mx-auto mt-4 gold-divider" aria-hidden="true" />
                </div>
            </section>

            {MENU_CATEGORIES.map((category, catIdx) => (
                <section
                    key={category.id}
                    id={category.id}
                    className={`section ${catIdx % 2 === 0 ? "bg-background" : "bg-brown text-cream-50"}`}
                >
                    <div className="container mx-auto max-w-content-xl">
                        {/* Category Header */}
                        <div className="mb-12 text-center">
                            <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                                {category.description}
                            </p>
                            <h2 className={`font-display ${catIdx % 2 !== 0 ? "text-cream-50" : ""}`}>
                                {category.name}
                            </h2>
                            <div className="mx-auto mt-4 gold-divider-lg" aria-hidden="true" />
                        </div>

                        {/* Dish Grid */}
                        <div className="grid gap-6 sm:grid-cols-2">
                            {category.items.map((item) => (
                                <article
                                    key={item.id}
                                    className={`group flex gap-5 rounded-card border p-5 transition-all duration-300 hover:shadow-card ${catIdx % 2 !== 0
                                        ? "border-cream-50/10 bg-brown-600/30 hover:border-gold/20"
                                        : "border-border bg-card hover:border-gold/20"
                                        }`}
                                >
                                    {/* Dish Image (if available) */}
                                    {item.image && (
                                        <div className="relative hidden h-24 w-24 shrink-0 overflow-hidden rounded-lg sm:block">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="96px"
                                            />
                                        </div>
                                    )}

                                    {/* Dish Info */}
                                    <div className="flex-1">
                                        <div className="mb-2 flex items-start justify-between gap-2">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-display text-heading-sm font-semibold">
                                                    {item.name}
                                                </h3>
                                                {item.badge && (
                                                    <Badge variant="gold" className="text-[10px]">
                                                        {item.badge}
                                                    </Badge>
                                                )}
                                            </div>
                                            <span className="shrink-0 font-display text-heading-sm font-bold text-gold">
                                                {formatPrice(item.price)}
                                            </span>
                                        </div>
                                        <p className={`text-body-sm leading-relaxed ${catIdx % 2 !== 0 ? "text-cream-200" : "text-muted-foreground"
                                            }`}>
                                            {item.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
