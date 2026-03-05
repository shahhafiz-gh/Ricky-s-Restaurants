import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ABOUT_STORY, TEAM_MEMBERS, GALLERY_IMAGES } from "@/constants/pages";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Discover the story behind Rickys Restaurant — a legacy of culinary excellence since 2003. Meet our team and explore our passion for fine dining.",
};

export default function AboutPage() {
    return (
        <>
            <section className="relative flex h-[50vh] min-h-[360px] items-center justify-center overflow-hidden">
                <Image
                    src="/assets/images/hero-bg.webp"
                    alt="Rickys Restaurant dining room"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="overlay-gradient" aria-hidden="true" />
                <div className="relative z-10 text-center">
                    <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                        Est. 2003
                    </p>
                    <h1 className="font-display text-display-md font-bold text-white md:text-display-lg">
                        Our Story
                    </h1>
                    <div className="mx-auto mt-4 gold-divider" aria-hidden="true" />
                </div>
            </section>

            <section className="section bg-background">
                <div className="container mx-auto max-w-content-lg">
                    <div className="grid items-start gap-12 lg:grid-cols-5 lg:gap-16">
                        <div className="space-y-6 lg:col-span-3">
                            <p className="font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                                {ABOUT_STORY.subtitle}
                            </p>
                            <h2 className="font-display">{ABOUT_STORY.title}</h2>
                            <div className="gold-divider-lg !mx-0 w-28" aria-hidden="true" />
                            {ABOUT_STORY.paragraphs.map((p, i) => (
                                <p key={i} className="text-body-md leading-relaxed text-muted-foreground">
                                    {p}
                                </p>
                            ))}
                            <div className="pt-2">
                                <Button asChild size="lg">
                                    <Link href="/menu">Explore Our Menu</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Side decorative image */}
                        <div className="relative lg:col-span-2">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-card">
                                <Image
                                    src="/assets/images/dish-lobster.webp"
                                    alt="Signature lobster dish"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                            </div>
                            <div
                                className="absolute -bottom-3 -right-3 h-16 w-16 border-b-2 border-r-2 border-gold/30 rounded-br-sm"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-brown text-cream-50">
                <div className="container mx-auto">
                    <div className="mb-14 text-center">
                        <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                            The Talent Behind the Taste
                        </p>
                        <h2 className="font-display text-cream-50">Meet Our Team</h2>
                        <div className="mx-auto mt-4 gold-divider-lg" aria-hidden="true" />
                    </div>

                    <div className="grid gap-10 md:grid-cols-2">
                        {TEAM_MEMBERS.map((member) => (
                            <div
                                key={member.id}
                                className="group flex flex-col overflow-hidden rounded-card border border-cream-50/10 bg-brown-600/30 sm:flex-row"
                            >
                                <div className="relative aspect-square w-full shrink-0 sm:w-48 md:w-56">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, 224px"
                                    />
                                </div>
                                <div className="flex flex-col justify-center p-6">
                                    <h3 className="mb-1 font-display text-heading-md font-semibold text-cream-50">
                                        {member.name}
                                    </h3>
                                    <p className="mb-3 text-body-sm font-medium text-gold">
                                        {member.role}
                                    </p>
                                    <p className="text-body-sm leading-relaxed text-cream-200">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-background">
                <div className="container mx-auto">
                    <div className="mb-14 text-center">
                        <p className="mb-3 font-body text-body-sm uppercase tracking-[0.25em] text-gold">
                            A Feast for the Eyes
                        </p>
                        <h2 className="font-display">Gallery</h2>
                        <div className="mx-auto mt-4 gold-divider-lg" aria-hidden="true" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {GALLERY_IMAGES.map((img) => (
                            <div
                                key={img.id}
                                className={`group relative overflow-hidden rounded-card ${img.span === "wide" ? "sm:col-span-2" : ""
                                    }`}
                            >
                                <div className="relative aspect-[4/3]">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-brown/0 transition-colors duration-300 group-hover:bg-brown/20" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
