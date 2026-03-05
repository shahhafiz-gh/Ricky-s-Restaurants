"use client";

import { useState, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";


export function useMobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const open = useCallback(() => setIsOpen(true), []);
    const close = useCallback(() => setIsOpen(false), []);
    const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

    // Close on route change
    useEffect(() => {
        close();
    }, [pathname, close]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return { isOpen, open, close, toggle };
}
