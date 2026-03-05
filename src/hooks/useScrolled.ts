"use client";

import { useState, useEffect, useCallback } from "react";



export function useScrolled(threshold: number = 20): boolean {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > threshold);
    }, [threshold]);

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return scrolled;
}
