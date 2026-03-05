"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDrag } from "@use-gesture/react";
import { FEATURED_DISHES } from "@/constants";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";



const AUTOPLAY_INTERVAL = 4500;


const ARC_POSITIONS: Record<string, {
    x: number; y: number; scale: number; rotate: number; opacity: number; zIndex: number;
}> = {
    enterRight: { x: 550, y: 180, scale: 0.55, rotate: 14, opacity: 0, zIndex: 0 },
    right: { x: 380, y: 60, scale: 0.78, rotate: 7, opacity: 0.65, zIndex: 10 },
    center: { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1, zIndex: 30 },
    left: { x: -380, y: 60, scale: 0.78, rotate: -7, opacity: 0.65, zIndex: 10 },
    exitLeft: { x: -550, y: 180, scale: 0.55, rotate: -14, opacity: 0, zIndex: 0 },
};

type SlotKey = "exitLeft" | "left" | "center" | "right" | "enterRight";

export default function FeaturedDishes() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState<1 | -1>(1);
    const wheelCooldown = useRef(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const total = FEATURED_DISHES.length;

    const getIndex = useCallback(
        (offset: number) => ((activeIndex + offset) % total + total) % total,
        [activeIndex, total]
    );

    const goNext = useCallback(() => {
        if (activeIndex === total - 1) return;
        setDirection(1);
        setActiveIndex((prev) => prev + 1);
    }, [activeIndex, total]);

    const goPrev = useCallback(() => {
        if (activeIndex === 0) return;
        setDirection(-1);
        setActiveIndex((prev) => prev - 1);
    }, [activeIndex]);


    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const onWheel = (e: WheelEvent) => {
            if (e.deltaY > 0) {
                if (activeIndex === total - 1) return; // Allow native page scroll
                e.preventDefault();
                e.stopPropagation();
                if (wheelCooldown.current) return;
                wheelCooldown.current = true;
                goNext();
                setTimeout(() => { wheelCooldown.current = false; }, 1000);
            } else if (e.deltaY < 0) {
                if (activeIndex === 0) return; // Allow native page scroll
                e.preventDefault();
                e.stopPropagation();
                if (wheelCooldown.current) return;
                wheelCooldown.current = true;
                goPrev();
                setTimeout(() => { wheelCooldown.current = false; }, 1000);
            }
        };

        el.addEventListener("wheel", onWheel, { passive: false });
        return () => el.removeEventListener("wheel", onWheel);
    }, [activeIndex, goNext, goPrev, total]);


    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(goNext, AUTOPLAY_INTERVAL);
        return () => clearInterval(timer);
    }, [isPaused, goNext]);

    const bind = useDrag(({ active, movement: [mx] }) => {
        if (!active) {
            if (mx > 50) goPrev();
            else if (mx < -50) goNext();
        }
    });


    const slots = [];
    if (activeIndex >= 2) slots.push({ index: activeIndex - 2, slot: "exitLeft" as SlotKey });
    if (activeIndex >= 1) slots.push({ index: activeIndex - 1, slot: "left" as SlotKey });
    slots.push({ index: activeIndex, slot: "center" as SlotKey });
    if (activeIndex <= total - 2) slots.push({ index: activeIndex + 1, slot: "right" as SlotKey });
    if (activeIndex <= total - 3) slots.push({ index: activeIndex + 2, slot: "enterRight" as SlotKey });

    const activeDish = FEATURED_DISHES[activeIndex];


    const getInitial = (slot: SlotKey) => {
        if (direction === 1) {

            return ARC_POSITIONS.enterRight;
        } else {

            return ARC_POSITIONS.exitLeft;
        }
    };

    const getExit = (slot: SlotKey) => {
        if (direction === 1) {
            return ARC_POSITIONS.exitLeft;
        } else {
            return ARC_POSITIONS.enterRight;
        }
    };

    return (
        <section id="featured-dishes" className="section-lg bg-background overflow-hidden" ref={sectionRef}>
            <div className="container mx-auto">
                {/* Section Header */}
                <div className="mb-10 text-center md:mb-14">
                    <FadeIn>
                        <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                            Culinary Excellence
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h2 className="mb-4 font-display">Featured Dishes</h2>
                    </FadeIn>
                    <FadeIn delay={0.15}>
                        <div className="gold-divider-lg" aria-hidden="true" />
                    </FadeIn>
                </div>

                {/* Circular Arc Carousel */}
                <FadeIn delay={0.2}>
                    <div
                        className="relative mx-auto"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Arc Container */}
                        <div
                            {...bind()}
                            className="relative mx-auto flex h-[440px] items-center justify-center sm:h-[500px] md:h-[580px] lg:h-[620px] touch-pan-y"
                        >
                            <AnimatePresence mode="popLayout" initial={false}>
                                {slots.map(({ index, slot }) => {
                                    const dish = FEATURED_DISHES[index];
                                    const pos = ARC_POSITIONS[slot];
                                    const isCenter = slot === "center";
                                    const isVisible = slot !== "exitLeft" && slot !== "enterRight";

                                    return (
                                        <motion.div
                                            key={`${dish.id}-${index}`}
                                            className="absolute cursor-pointer"
                                            initial={getInitial(slot)}
                                            animate={{
                                                x: pos.x,
                                                y: pos.y,
                                                scale: pos.scale,
                                                rotate: pos.rotate,
                                                opacity: pos.opacity,
                                                zIndex: pos.zIndex,
                                            }}
                                            exit={getExit(slot)}
                                            transition={{
                                                duration: 1.2,
                                                ease: [0.22, 0.68, 0, 1],
                                            }}
                                            onClick={() => {
                                                if (slot === "left") goPrev();
                                                if (slot === "right") goNext();
                                            }}
                                            style={{ originX: 0.5, originY: 0.8 }}
                                        >
                                            <div
                                                className={`relative overflow-hidden rounded-2xl transition-shadow duration-500 ${isCenter
                                                    ? "h-[380px] w-[300px] shadow-gold-glow ring-2 ring-gold/20 sm:h-[440px] sm:w-[350px] md:h-[500px] md:w-[400px]"
                                                    : "h-[300px] w-[240px] shadow-card sm:h-[360px] sm:w-[290px] md:h-[420px] md:w-[340px]"
                                                    }`}
                                            >
                                                <Image
                                                    src={dish.image}
                                                    alt={dish.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="400px"
                                                />
                                                {/* Overlay on side cards */}
                                                {!isCenter && (
                                                    <div className="absolute inset-0 bg-brown/15" />
                                                )}
                                                {/* Bottom gradient on center */}
                                                {isCenter && (
                                                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brown/60 to-transparent" />
                                                )}
                                                {/* Badge on center */}
                                                {isCenter && dish.badge && (
                                                    <div className="absolute left-4 top-4">
                                                        <Badge variant="gold">{dish.badge}</Badge>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>

                        {/* Active Dish Details */}
                        <div className="mt-6 text-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeDish.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -16 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                    className="mx-auto max-w-md"
                                >
                                    <h3 className="mb-2 font-display text-heading-lg font-semibold">
                                        {activeDish.name}
                                    </h3>
                                    <span className="mb-3 inline-block font-display text-heading-md font-bold text-gold">
                                        {formatPrice(activeDish.price)}
                                    </span>
                                    <p className="text-body-md leading-relaxed text-muted-foreground">
                                        {activeDish.description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Dots Indicator */}
                        <div className="mt-8 flex items-center justify-center gap-2">
                            {FEATURED_DISHES.map((dish, i) => (
                                <button
                                    key={dish.id}
                                    onClick={() => {
                                        setDirection(i > activeIndex ? 1 : -1);
                                        setActiveIndex(i);
                                    }}
                                    className={`transition-all duration-300 rounded-full ${i === activeIndex
                                        ? "h-2.5 w-8 bg-gold shadow-gold-glow"
                                        : "h-2.5 w-2.5 bg-border hover:bg-gold/40"
                                        }`}
                                    aria-label={`Go to ${dish.name}`}
                                    aria-current={i === activeIndex ? "true" : "false"}
                                />
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* CTA */}
                <FadeIn delay={0.3}>
                    <div className="mt-14 text-center">
                        <Button asChild variant="outline" size="lg">
                            <Link href="/menu">View Full Menu</Link>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
