import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CATERING_HIGHLIGHTS, CTA_LINK } from "@/constants";
import { CATERING_PACKAGES, CATERING_EVENT_TYPES } from "@/constants/pages";

export const metadata: Metadata = {
    title: "Catering",
    description:
        "Let Rickys Restaurant bring luxury dining to your next event. From weddings to corporate galas, explore our catering packages.",
};

export default function CateringPage() {
    return (
        <>
            <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden">
                <Image
                    src="/images/catering-setup.webp"
                    alt="Luxury catering setup by Rickys Restaurant"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="overlay-gradient" aria-hidden="true" />
                <div className="relative z-10 text-center">
                    <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                        Exceptional Events
                    </p>
                    <h1 className="font-display text-display-md font-bold text-white md:text-display-lg">
                        Catering Services
                    </h1>
                    <div className="mx-auto mt-4 gold-divider" aria-hidden="true" />
                </div>
            </section>

            <section className="section bg-background">
                <div className="container mx-auto">
                    <div className="mb-14 text-center">
                        <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                            We Cater To
                        </p>
                        <h2 className="font-display">Event Types</h2>
                        <div className="mx-auto mt-4 gold-divider-lg" aria-hidden="true" />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {CATERING_EVENT_TYPES.map((event) => (
                            <div
                                key={event.title}
                                className="group rounded-card border border-border bg-card p-6 text-center transition-all duration-300 hover:border-gold/30 hover:shadow-card"
                            >
                                <h3 className="mb-2 font-display text-heading-sm font-semibold">
                                    {event.title}
                                </h3>
                                <p className="text-body-sm text-muted-foreground">
                                    {event.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-brown text-cream-50">
                <div className="container mx-auto">
                    <div className="mb-14 text-center">
                        <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                            Tailored To Perfection
                        </p>
                        <h2 className="font-display text-cream-50">Our Packages</h2>
                        <div className="mx-auto mt-4 gold-divider-lg" aria-hidden="true" />
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {CATERING_PACKAGES.map((pkg) => (
                            <div
                                key={pkg.id}
                                className={`relative flex flex-col rounded-card border p-8 transition-all duration-300 ${pkg.popular
                                    ? "border-gold bg-gold/5 shadow-gold-glow"
                                    : "border-cream-50/10 bg-brown-600/30 hover:border-gold/30"
                                    }`}
                            >
                                {pkg.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                        <Badge variant="gold" className="flex items-center gap-1">
                                            <Star className="h-3 w-3 fill-brown-900" />
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}

                                <h3 className="mb-2 font-display text-heading-lg font-bold text-gold">
                                    {pkg.name}
                                </h3>
                                <p className="mb-4 text-body-sm text-cream-200">
                                    {pkg.description}
                                </p>
                                <p className="mb-6 font-display text-heading-md font-bold text-cream-50">
                                    {pkg.priceRange}
                                </p>

                                <ul className="mb-8 flex-1 space-y-3">
                                    {pkg.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3 text-body-sm text-cream-200">
                                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    asChild
                                    variant={pkg.popular ? "default" : "outline"}
                                    size="lg"
                                    className={!pkg.popular ? "border-gold text-gold hover:bg-gold/10" : ""}
                                >
                                    <Link href="/contact">Get a Quote</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-background">
                <div className="container mx-auto max-w-content-md text-center">
                    <div className="mb-6 flex items-center justify-center gap-3" aria-hidden="true">
                        <span className="h-px w-12 bg-gold/40" />
                        <span className="h-2 w-2 rotate-45 bg-gold" />
                        <span className="h-px w-12 bg-gold/40" />
                    </div>
                    <h2 className="mb-4 font-display">
                        Ready to Plan Your Event?
                    </h2>
                    <p className="mx-auto mb-8 max-w-lg text-body-md text-muted-foreground">
                        Contact our events team to discuss your vision. We&apos;ll
                        craft a bespoke experience that exceeds every expectation.
                    </p>
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <Button asChild size="lg">
                            <Link href="/contact">Contact Our Events Team</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Link href="/menu">View Full Menu</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
