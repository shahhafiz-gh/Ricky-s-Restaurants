import Link from "next/link";
import Image from "next/image";
import {
    Facebook,
    Instagram,
    Twitter,
    MapPin,
    Phone,
    Mail,
    Clock,
} from "lucide-react";

import {
    SITE_NAME,
    SITE_TAGLINE,
    SITE_DESCRIPTION,
    FOOTER_LINKS,
    SOCIAL_LINKS,
    CONTACT_INFO,
    OPERATING_HOURS,
} from "@/constants";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
};

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gold/10 bg-brown text-cream-100" role="contentinfo">
            <div className="h-0.5 w-full bg-gold-gradient" aria-hidden="true" />

            <div className="container mx-auto grid gap-12 py-section-sm sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                <div className="space-y-5 sm:col-span-2 lg:col-span-1">
                    <Link href="/" className="group inline-flex items-center">
                        <Image
                            src="/assets/images/logo.webp"
                            alt="Rickys Restaurant Logo"
                            width={240}
                            height={54}
                            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 md:h-14"
                        />
                    </Link>

                    <p className="text-body-sm font-light italic text-gold/80">
                        {SITE_TAGLINE}
                    </p>

                    <p className="max-w-xs text-body-sm leading-relaxed text-cream-200">
                        {SITE_DESCRIPTION}
                    </p>

                    <div className="flex items-center gap-3 pt-2">
                        {SOCIAL_LINKS.map((social) => {
                            const Icon = SOCIAL_ICONS[social.platform];
                            return (
                                <a
                                    key={social.platform}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Follow us on ${social.label}`}
                                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/15 transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:shadow-gold-glow"
                                >
                                    {Icon && (
                                        <Icon className="h-4.5 w-4.5 text-cream-200 transition-colors duration-300 group-hover:text-gold" />
                                    )}
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="space-y-5">
                    <h4 className="font-display text-heading-sm font-semibold text-gold">
                        Quick Links
                    </h4>
                    <ul className="space-y-3" role="list">
                        {FOOTER_LINKS.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="group inline-flex items-center gap-2 text-body-sm text-cream-200 transition-colors duration-200 hover:text-gold"
                                >
                                    <span
                                        className="h-1 w-1 rounded-full bg-gold/40 transition-all duration-200 group-hover:w-2 group-hover:bg-gold"
                                        aria-hidden="true"
                                    />
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-5">
                    <h4 className="font-display text-heading-sm font-semibold text-gold">
                        Opening Hours
                    </h4>
                    <ul className="space-y-4" role="list">
                        {OPERATING_HOURS.map((entry) => (
                            <li
                                key={entry.days}
                                className="flex items-start gap-3 text-body-sm"
                            >
                                <Clock
                                    className="mt-0.5 h-4 w-4 shrink-0 text-gold/60"
                                    aria-hidden="true"
                                />
                                <div>
                                    <span className="block font-semibold text-cream-100">
                                        {entry.days}
                                    </span>
                                    <span className="text-cream-300">
                                        {entry.hours}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-5">
                    <h4 className="font-display text-heading-sm font-semibold text-gold">
                        Contact Us
                    </h4>
                    <address className="not-italic space-y-4 text-body-sm text-cream-200">
                        <div className="flex items-start gap-3">
                            <MapPin
                                className="mt-0.5 h-4 w-4 shrink-0 text-gold/60"
                                aria-hidden="true"
                            />
                            <div>
                                <p>{CONTACT_INFO.address}</p>
                                <p>
                                    {CONTACT_INFO.city}, {CONTACT_INFO.state}{" "}
                                    {CONTACT_INFO.zip}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <Phone
                                className="h-4 w-4 shrink-0 text-gold/60"
                                aria-hidden="true"
                            />
                            <a
                                href={`tel:${CONTACT_INFO.phone}`}
                                className="transition-colors duration-200 hover:text-gold"
                            >
                                {CONTACT_INFO.phone}
                            </a>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail
                                className="h-4 w-4 shrink-0 text-gold/60"
                                aria-hidden="true"
                            />
                            <a
                                href={`mailto:${CONTACT_INFO.email}`}
                                className="transition-colors duration-200 hover:text-gold"
                            >
                                {CONTACT_INFO.email}
                            </a>
                        </div>
                    </address>
                </div>
            </div>

            <div className="border-t border-cream-50/10">
                <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-6 text-caption text-cream-400 sm:flex-row">
                    <p>
                        &copy; {currentYear} {SITE_NAME}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/about"
                            className="transition-colors duration-200 hover:text-gold"
                        >
                            Privacy Policy
                        </Link>
                        <span className="text-cream-50/20" aria-hidden="true">|</span>
                        <Link
                            href="/about"
                            className="transition-colors duration-200 hover:text-gold"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
