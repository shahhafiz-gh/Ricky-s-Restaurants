"use client";

import { useState, useEffect, useRef } from "react";


export function useScrollDirection(threshold: number = 10) {
    const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const updateScrollDirection = () => {
            const currentScrollY = window.scrollY;
            const diff = currentScrollY - lastScrollY.current;

            setScrolled(currentScrollY > 20);

            // Only change direction if scrolled more than threshold
            if (Math.abs(diff) > threshold) {
                setScrollDirection(diff > 0 ? "down" : "up");
                lastScrollY.current = currentScrollY;
            }

            ticking.current = false;
        };

        const onScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(updateScrollDirection);
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold]);

    return { scrollDirection, scrolled };
}
