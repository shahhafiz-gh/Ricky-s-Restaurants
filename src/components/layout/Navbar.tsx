"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { NAV_LINKS, CTA_LINK, SITE_NAME } from "@/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useMobileMenu } from "@/hooks/useMobileMenu";



export default function Navbar() {
    const pathname = usePathname();
    const { scrollDirection, scrolled } = useScrollDirection(20);
    const mobileMenu = useMobileMenu();

    return (
        <>
            <header
                className={cn(
                    "sticky top-0 z-50 w-full transition-all duration-300",
                    scrolled && scrollDirection === "down" && !mobileMenu.isOpen
                        ? "-translate-y-full"
                        : "translate-y-0",
                    scrolled
                        ? "border-b border-gold/15 bg-background/95 shadow-card backdrop-blur-xl"
                        : "border-b border-transparent bg-background/80 backdrop-blur-lg"
                )}
            >
                <nav
                    className="container mx-auto flex h-16 items-center justify-between md:h-20"
                    aria-label="Main navigation"
                >
                    <Link
                        href="/"
                        className="group flex items-center"
                        aria-label="Rickys Restaurant — Home"
                    >
                        <Image
                            src="/images/logo.webp"
                            alt="Rickys Restaurant Logo"
                            width={200}
                            height={45}
                            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-12"
                            priority
                        />
                    </Link>

                    <div className="hidden items-center gap-1 md:flex">
                        <ul className="flex items-center gap-0.5" role="menubar">
                            {NAV_LINKS.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.href} role="none">
                                        <Link
                                            href={link.href}
                                            role="menuitem"
                                            className={cn(
                                                "relative rounded-md px-4 py-2 text-body-sm font-medium transition-colors duration-200",
                                                isActive
                                                    ? "text-gold"
                                                    : "text-foreground/70 hover:text-gold"
                                            )}
                                        >
                                            {link.label}
                                            {isActive && (
                                                <span
                                                    className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-gold"
                                                    aria-hidden="true"
                                                />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        <div className="ml-4">
                            <Button asChild size="sm">
                                <Link href={CTA_LINK.href}>{CTA_LINK.label}</Link>
                            </Button>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={mobileMenu.toggle}
                        className={cn(
                            "relative z-50 inline-flex items-center justify-center rounded-md p-2 transition-colors duration-200 md:hidden",
                            mobileMenu.isOpen
                                ? "text-gold"
                                : "text-foreground hover:text-gold"
                        )}
                        aria-expanded={mobileMenu.isOpen}
                        aria-controls="mobile-menu"
                        aria-label={mobileMenu.isOpen ? "Close menu" : "Open menu"}
                    >
                        <span className="sr-only">
                            {mobileMenu.isOpen ? "Close" : "Open"} navigation menu
                        </span>
                        {mobileMenu.isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </nav>
            </header>

            <div
                id="mobile-menu"
                className={cn(
                    "fixed inset-x-0 top-16 bottom-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden",
                    mobileMenu.isOpen
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-4 opacity-0"
                )}
                aria-hidden={!mobileMenu.isOpen}
            >
                <div className="container mx-auto flex flex-col gap-2 px-4 py-6">
                    <div className="gold-divider mb-4" aria-hidden="true" />

                    <ul className="flex flex-col gap-1" role="menu">
                        {NAV_LINKS.map((link, index) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href} role="none">
                                    <Link
                                        href={link.href}
                                        role="menuitem"
                                        onClick={mobileMenu.close}
                                        className={cn(
                                            "flex items-center gap-3 rounded-lg px-4 py-3.5 text-body-lg font-medium transition-all duration-200",
                                            isActive
                                                ? "bg-gold/10 text-gold"
                                                : "text-foreground/70 hover:bg-gold/5 hover:text-gold"
                                        )}
                                        style={{
                                            animationDelay: `${index * 50}ms`,
                                        }}
                                    >
                                        <span
                                            className={cn(
                                                "h-1.5 w-1.5 rounded-full transition-colors duration-200",
                                                isActive
                                                    ? "bg-gold"
                                                    : "bg-foreground/20"
                                            )}
                                            aria-hidden="true"
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-4 px-4">
                        <Button asChild size="lg" className="w-full">
                            <Link
                                href={CTA_LINK.href}
                                onClick={mobileMenu.close}
                            >
                                {CTA_LINK.label}
                            </Link>
                        </Button>
                    </div>

                    <div className="gold-divider mt-6" aria-hidden="true" />
                </div>
            </div>
        </>
    );
}
