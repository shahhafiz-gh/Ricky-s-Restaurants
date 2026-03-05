"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constants";
import { FadeIn } from "@/components/ui/fade-in";

export default function Testimonials() {
    return (
        <section id="testimonials" className="section bg-brown text-cream-50">
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="mb-14 text-center">
                    <FadeIn>
                        <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                            Guest Experiences
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h2 className="mb-4 font-display text-cream-50">
                            What Our Guests Say
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.15}>
                        <div className="gold-divider-lg" aria-hidden="true" />
                    </FadeIn>
                </div>

                {/* Testimonial Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <FadeIn key={testimonial.id} delay={0.1 * index} direction="up">
                            <article
                                className="group relative rounded-card border border-cream-50/10 bg-brown-600/30 p-8 transition-all duration-300 hover:border-gold/30 hover:bg-brown-600/40"
                            >
                                {/* Quote icon */}
                                <Quote
                                    className="mb-4 h-8 w-8 text-gold/30"
                                    aria-hidden="true"
                                />

                                {/* Stars */}
                                <div className="mb-5 flex gap-1">
                                    {Array.from({ length: testimonial.rating }).map(
                                        (_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 fill-gold text-gold"
                                                aria-hidden="true"
                                            />
                                        )
                                    )}
                                </div>

                                {/* Quote text */}
                                <blockquote className="mb-6 text-body-md leading-relaxed text-cream-200">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    {/* Avatar initials circle */}
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-display text-body-sm font-bold text-gold">
                                        {testimonial.name
                                            .split(" ")
                                            .map((w) => w[0])
                                            .join("")}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-cream-100">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-caption text-cream-400">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
