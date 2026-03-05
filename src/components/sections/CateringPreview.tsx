"use client";

import Image from "next/image";
import Link from "next/link";
import { Wine, Briefcase, Heart } from "lucide-react";
import { CATERING_HIGHLIGHTS } from "@/constants";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const ICONS: Record<string, React.ElementType> = {
    champagne: Wine,
    briefcase: Briefcase,
    heart: Heart,
};

export default function CateringPreview() {
    return (
        <section id="catering-preview" className="section relative overflow-hidden bg-background">
            <div className="container mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Text Side */}
                    <div>
                        <FadeIn direction="left">
                            <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                                Exceptional Events
                            </p>
                        </FadeIn>
                        <FadeIn direction="left" delay={0.1}>
                            <h2 className="mb-4 font-display">Catering Services</h2>
                        </FadeIn>
                        <FadeIn direction="left" delay={0.15}>
                            <div className="gold-divider-lg !mx-0 mb-6 w-32" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn direction="left" delay={0.2}>
                            <p className="mb-10 max-w-lg text-body-md text-muted-foreground">
                                From intimate dinners to grand celebrations, let
                                Rickys Restaurant bring our culinary excellence to
                                your next event.
                            </p>
                        </FadeIn>

                        {/* Highlight Cards */}
                        <div className="space-y-6">
                            {CATERING_HIGHLIGHTS.map((item, index) => {
                                const Icon = ICONS[item.icon];
                                return (
                                    <FadeIn key={item.id} delay={0.25 + index * 0.1} direction="left">
                                        <div
                                            className="group flex gap-5 rounded-lg border border-border/60 bg-card p-5 transition-all duration-300 hover:border-gold/30 hover:shadow-card"
                                        >
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold/20">
                                                {Icon && <Icon className="h-6 w-6" />}
                                            </div>
                                            <div>
                                                <h4 className="mb-1 font-display text-heading-sm font-semibold">
                                                    {item.title}
                                                </h4>
                                                <p className="text-body-sm text-muted-foreground">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </FadeIn>
                                );
                            })}
                        </div>

                        <FadeIn delay={0.55} direction="left">
                            <div className="mt-10">
                                <Button asChild size="lg">
                                    <Link href="/catering">Plan Your Event</Link>
                                </Button>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn direction="right" duration={0.8} className="relative order-first lg:order-last">
                        <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                            <Image
                                src="/images/catering-setup.webp"
                                alt="Elegant catering setup by Rickys Restaurant"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        {/* Gold glow accent */}
                        <div
                            className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gold/10 blur-3xl"
                            aria-hidden="true"
                        />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
