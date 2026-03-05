"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { SITE_NAME, SITE_TAGLINE, CTA_LINK } from "@/constants";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative flex min-h-[90vh] items-center justify-center overflow-hidden"
        >
            <Image
                src="/images/hero-bg.webp"
                alt="Rickys Restaurant luxury dining interior"
                fill
                className="object-cover"
                priority
                quality={90}
                sizes="100vw"
            />

            <div className="overlay-gradient" aria-hidden="true" />

            <div className="relative z-10 flex flex-col items-center px-4 text-center">
                <FadeIn delay={0.1} direction="down">
                    <div className="mb-6 flex items-center gap-3" aria-hidden="true">
                        <span className="h-px w-12 bg-gold/60" />
                        <span className="h-2 w-2 rotate-45 bg-gold" />
                        <span className="h-px w-12 bg-gold/60" />
                    </div>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                    <p className="mb-4 font-body text-body-sm uppercase tracking-[0.3em] text-gold">
                        {SITE_TAGLINE}
                    </p>
                </FadeIn>

                <FadeIn delay={0.3} direction="up">
                    <h1 className="mb-6 max-w-3xl flex justify-center">
                        <span className="sr-only">{SITE_NAME}</span>
                        <Image
                            src="/images/logo.webp"
                            alt={`${SITE_NAME} Logo`}
                            width={800}
                            height={180}
                            className="h-20 w-auto object-contain md:h-28 lg:h-36"
                            priority
                        />
                    </h1>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                    <p className="mb-10 max-w-xl text-body-lg text-cream-200/90">
                        Where timeless elegance meets modern gastronomy. Savor
                        extraordinary flavors in an unforgettable atmosphere.
                    </p>
                </FadeIn>

                <FadeIn delay={0.5} direction="up">
                    <div className="flex flex-col items-center gap-4 sm:flex-row">
                        <Button asChild size="lg">
                            <Link href={CTA_LINK.href}>{CTA_LINK.label}</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-cream-100/30 text-cream-100 hover:bg-cream-100/10">
                            <Link href="/menu">Explore Our Menu</Link>
                        </Button>
                    </div>
                </FadeIn>

                <FadeIn delay={0.6} direction="up">
                    <div className="mt-12 flex items-center gap-3" aria-hidden="true">
                        <span className="h-px w-8 bg-gold/40" />
                        <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />
                        <span className="h-px w-8 bg-gold/40" />
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
