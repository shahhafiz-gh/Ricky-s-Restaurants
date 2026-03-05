"use client";

import Image from "next/image";
import { forwardRef } from "react";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import type { FeaturedDish } from "@/types";



interface CircularMenuProps {
    dishes: FeaturedDish[];
    setItemRef: (index: number, el: HTMLDivElement | null) => void;
}

const CircularMenu = forwardRef<HTMLDivElement, CircularMenuProps>(
    ({ dishes, setItemRef }, ref) => {
        return (
            <div
                ref={ref}
                className="relative flex h-[100vh] items-center justify-center overflow-hidden bg-background"
            >
                <div className="pointer-events-none absolute flex flex-col items-center gap-3">
                    <div className="h-20 w-20 rounded-full border-2 border-gold/20 sm:h-24 sm:w-24" />
                    <div className="h-1 w-12 rounded-full bg-gold/30" />
                </div>

                {dishes.map((dish, index) => (
                    <div
                        key={dish.id}
                        ref={(el) => setItemRef(index, el)}
                        className="absolute"
                        style={{ willChange: "transform, opacity" }}
                    >
                        <div className="group relative h-[180px] w-[140px] overflow-hidden rounded-2xl shadow-card transition-shadow duration-300 hover:shadow-card-hover sm:h-[240px] sm:w-[190px] md:h-[300px] md:w-[240px] lg:h-[350px] lg:w-[280px]">
                            <Image
                                src={dish.image}
                                alt={dish.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 140px, (max-width: 768px) 190px, (max-width: 1024px) 240px, 280px"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-brown/80 via-brown/40 to-transparent" />

                            {dish.badge && (
                                <div className="absolute left-2 top-2 sm:left-3 sm:top-3">
                                    <Badge variant="gold" className="text-[10px] sm:text-xs">
                                        {dish.badge}
                                    </Badge>
                                </div>
                            )}

                            <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                                <h3 className="mb-0.5 font-display text-xs font-semibold text-cream-50 sm:text-sm md:text-base lg:text-lg">
                                    {dish.name}
                                </h3>
                                <span className="font-display text-xs font-bold text-gold sm:text-sm md:text-base">
                                    {formatPrice(dish.price)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
);

CircularMenu.displayName = "CircularMenu";
export default CircularMenu;
