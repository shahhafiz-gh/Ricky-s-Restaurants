"use client";

import Image from "next/image";
import Link from "next/link";
import { ABOUT_PREVIEW } from "@/constants";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export default function AboutPreview() {
    return (
        <section id="about-preview" className="section bg-brown text-cream-50">
            <div className="container mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <FadeIn direction="left" duration={0.8}>
                        <div className="relative">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                                <Image
                                    src="/assets/images/hero-bg.webp"
                                    alt="Inside Rickys Restaurant"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                            <div
                                className="absolute -left-3 -top-3 h-16 w-16 border-l-2 border-t-2 border-gold/40 rounded-tl-sm"
                                aria-hidden="true"
                            />
                            <div
                                className="absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-gold/40 rounded-br-sm"
                                aria-hidden="true"
                            />
                        </div>
                    </FadeIn>

                    <div className="space-y-6">
                        <FadeIn direction="right" delay={0.1}>
                            <p className="font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                                {ABOUT_PREVIEW.subheading}
                            </p>
                        </FadeIn>
                        <FadeIn direction="right" delay={0.2}>
                            <h2 className="font-display text-cream-50">
                                {ABOUT_PREVIEW.heading}
                            </h2>
                        </FadeIn>
                        <FadeIn direction="right" delay={0.3}>
                            <div className="gold-divider !mx-0 w-20" aria-hidden="true" />
                        </FadeIn>
                        <FadeIn direction="right" delay={0.35}>
                            <p className="text-body-lg leading-relaxed text-cream-200">
                                {ABOUT_PREVIEW.text}
                            </p>
                        </FadeIn>
                        <FadeIn direction="right" delay={0.45}>
                            <div className="pt-2">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                    className="border-gold text-gold hover:bg-gold/10"
                                >
                                    <Link href={ABOUT_PREVIEW.cta.href}>
                                        {ABOUT_PREVIEW.cta.label}
                                    </Link>
                                </Button>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
