"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    once?: boolean;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    direction = "up",
    duration = 0.6,
    once = true,
}: FadeInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, margin: "-10% 0px" });

    const getDirectionOffset = () => {
        switch (direction) {
            case "up":
                return { y: 40, x: 0 };
            case "down":
                return { y: -40, x: 0 };
            case "left":
                return { x: 40, y: 0 };
            case "right":
                return { x: -40, y: 0 };
            default:
                return { x: 0, y: 0 };
        }
    };

    const offset = getDirectionOffset();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...offset }}
            animate={
                isInView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, ...offset }
            }
            transition={{
                duration,
                delay,
                ease: [0.25, 0.25, 0, 1], // Custom slow ease out
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
