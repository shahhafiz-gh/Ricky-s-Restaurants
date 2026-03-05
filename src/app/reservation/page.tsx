import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";
import dynamic from "next/dynamic";
import { CONTACT_INFO, OPERATING_HOURS } from "@/constants";

const ReservationForm = dynamic(() => import("@/components/forms/ReservationForm"));

export const metadata: Metadata = {
    title: "Reservations",
    description:
        "Book a table at Rickys Restaurant. Walk-ins are welcome, but reservations are recommended to ensure your preferred dining time.",
};

export default function ReservationPage() {
    return (
        <>
            <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden bg-brown">
                <div className="absolute inset-0 bg-brown-gradient opacity-80" aria-hidden="true" />
                <div className="relative z-10 text-center">
                    <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                        Secure Your Table
                    </p>
                    <h1 className="font-display text-display-md font-bold text-cream-50 md:text-display-lg">
                        Reservations
                    </h1>
                    <div className="mx-auto mt-4 gold-divider" aria-hidden="true" />
                </div>
            </section>

            <section className="section bg-background">
                <div className="container mx-auto max-w-content-xl">
                    <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">

                        <div className="lg:col-span-3">
                            <h2 className="mb-2 font-display">Book a Table</h2>
                            <p className="mb-8 text-body-md text-muted-foreground">
                                Enjoy culinary excellence tailored for you. We strongly recommend booking in advance, especially for weekend dining.
                            </p>
                            <ReservationForm />
                        </div>

                        <aside className="space-y-8 lg:col-span-2">
                            <div className="rounded-card border border-gold/30 bg-gold/5 p-6 shadow-sm">
                                <h3 className="mb-4 flex items-center gap-2 font-display text-heading-md font-semibold text-gold">
                                    <Info className="h-5 w-5" />
                                    Important Information
                                </h3>
                                <ul className="space-y-3 text-body-sm text-muted-foreground">
                                    <li>• Reservations are recommended 2-3 weeks in advance.</li>
                                    <li>• We allocate 2.5 hours per booking for dinner services.</li>
                                    <li>• For parties larger than 8, please contact us directly.</li>
                                    <li>• Valet parking is available at the rear entrance.</li>
                                </ul>
                                <div className="mt-6 border-t border-gold/20 pt-4 text-center">
                                    <p className="mb-2 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                                        Need Assistance?
                                    </p>
                                    <a
                                        href={`tel:${CONTACT_INFO.phone}`}
                                        className="font-display text-heading-md font-bold text-foreground transition-colors hover:text-gold"
                                    >
                                        {CONTACT_INFO.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-card border border-border shadow-sm">
                                <div className="relative h-24 w-full">
                                    <Image
                                        src="/images/hero-bg.webp"
                                        alt="Dining room"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 30vw"
                                    />
                                    <div className="absolute inset-0 bg-brown/70" />
                                </div>

                                <div className="bg-card p-6">
                                    <h3 className="mb-5 font-display text-heading-sm font-semibold">
                                        Dress Code & Ambiance
                                    </h3>
                                    <p className="mb-6 text-body-sm text-muted-foreground">
                                        Rickys maintains a smart elegant dress code. We politely ask our guests to refrain from wearing sportswear or beachwear.
                                    </p>

                                    <div className="border-t border-border pt-4">
                                        <h4 className="mb-3 font-display text-body-lg font-semibold text-gold">
                                            Service Hours
                                        </h4>
                                        <ul className="space-y-2 text-body-sm">
                                            {OPERATING_HOURS.map((entry) => (
                                                <li key={entry.days} className="flex justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0">
                                                    <span className="font-medium text-foreground">{entry.days}</span>
                                                    <span className="text-muted-foreground">{entry.hours}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
