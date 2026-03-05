"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { CTA_LINK } from "@/constants";

export default function ReservationCTA() {
    return (
        <section id="reservation-cta" className="section relative overflow-hidden bg-background">
            <div className="container mx-auto">
                <FadeIn direction="up" duration={0.8}>
                    <div className="relative rounded-card bg-brown px-6 py-section sm:px-12 lg:px-20">
                        {/* Decorative elements */}
                        <div
                            className="absolute left-0 top-0 h-40 w-40 rounded-full bg-gold/5 blur-3xl"
                            aria-hidden="true"
                        />
                        <div
                            className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-gold/8 blur-3xl"
                            aria-hidden="true"
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center text-center">
                            {/* Decorative top */}
                            <FadeIn delay={0.1} direction="down">
                                <div className="mb-6 flex items-center gap-3" aria-hidden="true">
                                    <span className="h-px w-12 bg-gold/40" />
                                    <span className="h-2 w-2 rotate-45 bg-gold" />
                                    <span className="h-px w-12 bg-gold/40" />
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.15}>
                                <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                                    Reserve Your Table
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <h2 className="mb-4 max-w-xl font-display text-cream-50">
                                    An Unforgettable Dining Experience Awaits
                                </h2>
                            </FadeIn>

                            <FadeIn delay={0.25}>
                                <div className="gold-divider mb-6" aria-hidden="true" />
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <p className="mb-10 max-w-lg text-body-md text-cream-200">
                                    Join us for an evening of extraordinary cuisine,
                                    impeccable service, and the warm ambiance that has
                                    made Rickys Restaurant a Dubai institution.
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.35}>
                                <div className="flex flex-col items-center gap-4 sm:flex-row">
                                    <Button asChild size="lg">
                                        <Link href={CTA_LINK.href}>
                                            Book a Table
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="lg"
                                        className="border-cream-100/30 text-cream-100 hover:bg-cream-100/10"
                                    >
                                        <Link href="/contact">Contact Us</Link>
                                    </Button>
                                </div>
                            </FadeIn>

                            {/* Decorative bottom */}
                            <FadeIn delay={0.4}>
                                <div className="mt-10 flex items-center gap-3" aria-hidden="true">
                                    <span className="h-px w-8 bg-gold/30" />
                                    <span className="h-1.5 w-1.5 rotate-45 bg-gold/50" />
                                    <span className="h-px w-8 bg-gold/30" />
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
