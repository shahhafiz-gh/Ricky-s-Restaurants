import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { CONTACT_INFO, OPERATING_HOURS, SOCIAL_LINKS } from "@/constants";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/forms/ContactForm"));

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Rickys Restaurant. Make a reservation, inquire about catering, or simply say hello.",
};

const SOCIAL_ICONS: Record<string, React.ElementType> = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
};

export default function ContactPage() {
    return (
        <>
            <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden bg-brown">
                <div className="absolute inset-0 bg-brown-gradient opacity-80" aria-hidden="true" />
                <div className="relative z-10 text-center">
                    <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                        We&apos;d Love to Hear From You
                    </p>
                    <h1 className="font-display text-display-md font-bold text-cream-50 md:text-display-lg">
                        Contact Us
                    </h1>
                    <div className="mx-auto mt-4 gold-divider" aria-hidden="true" />
                </div>
            </section>

            <section className="section bg-background">
                <div className="container mx-auto max-w-content-xl">
                    <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
                        <div className="lg:col-span-3">
                            <h2 className="mb-2 font-display">Send Us a Message</h2>
                            <p className="mb-8 text-body-md text-muted-foreground">
                                Whether it&apos;s a reservation, a catering inquiry, or feedback — we&apos;re here to help.
                            </p>
                            <ContactForm />
                        </div>

                        <aside className="space-y-8 lg:col-span-2">
                            {/* Contact Details */}
                            <div className="rounded-card border border-border bg-card p-6 shadow-card">
                                <h3 className="mb-5 font-display text-heading-md font-semibold">
                                    Get In Touch
                                </h3>
                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                                            <MapPin className="h-5 w-5 text-gold" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">{CONTACT_INFO.address}</p>
                                            <p className="text-body-sm text-muted-foreground">
                                                {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                                            <Phone className="h-5 w-5 text-gold" />
                                        </div>
                                        <a
                                            href={`tel:${CONTACT_INFO.phone}`}
                                            className="font-semibold hover:text-gold"
                                        >
                                            {CONTACT_INFO.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                                            <Mail className="h-5 w-5 text-gold" />
                                        </div>
                                        <a
                                            href={`mailto:${CONTACT_INFO.email}`}
                                            className="font-semibold hover:text-gold"
                                        >
                                            {CONTACT_INFO.email}
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Opening Hours */}
                            <div className="rounded-card border border-border bg-card p-6 shadow-card">
                                <h3 className="mb-5 font-display text-heading-md font-semibold">
                                    Opening Hours
                                </h3>
                                <ul className="space-y-4">
                                    {OPERATING_HOURS.map((entry) => (
                                        <li key={entry.days} className="flex items-start gap-4">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                                                <Clock className="h-5 w-5 text-gold" />
                                            </div>
                                            <div>
                                                <p className="font-semibold">{entry.days}</p>
                                                <p className="text-body-sm text-muted-foreground">
                                                    {entry.hours}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social Links */}
                            <div className="rounded-card border border-border bg-card p-6 shadow-card">
                                <h3 className="mb-5 font-display text-heading-md font-semibold">
                                    Follow Us
                                </h3>
                                <div className="flex gap-3">
                                    {SOCIAL_LINKS.map((social) => {
                                        const Icon = SOCIAL_ICONS[social.platform];
                                        return (
                                            <a
                                                key={social.platform}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Follow us on ${social.label}`}
                                                className="group flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:shadow-gold-glow"
                                            >
                                                {Icon && (
                                                    <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-gold" />
                                                )}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="bg-brown">
                <div className="relative flex h-[350px] items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-brown-gradient opacity-60" aria-hidden="true" />
                    <div className="relative z-10 text-center">
                        <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10 mb-4">
                            <MapPin className="h-7 w-7 text-gold" />
                        </div>
                        <h3 className="mb-2 font-display text-heading-md font-semibold text-cream-50">
                            Visit Us
                        </h3>
                        <p className="text-body-md text-cream-200">
                            {CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                        </p>
                        <p className="mt-2 text-body-sm text-cream-400">
                            Interactive map coming soon
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
