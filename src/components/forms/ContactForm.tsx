"use client";

import { Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactForm() {
    const { formData, errors, isSubmitting, isSuccess, handleChange, handleSubmit } =
        useContactForm();

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center rounded-card border border-gold/20 bg-gold/5 px-8 py-16 text-center">
                <CheckCircle2 className="mb-4 h-12 w-12 text-gold" />
                <h3 className="mb-2 font-display text-heading-md font-semibold">
                    Message Sent!
                </h3>
                <p className="text-body-md text-muted-foreground">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-body-sm font-medium">
                        Full Name <span className="text-gold">*</span>
                    </label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.name && <p className="text-caption text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-body-sm font-medium">
                        Email <span className="text-gold">*</span>
                    </label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.email && <p className="text-caption text-destructive">{errors.email}</p>}
                </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-body-sm font-medium">
                        Phone
                    </label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.phone && <p className="text-caption text-destructive">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                    <label htmlFor="subject" className="text-body-sm font-medium">
                        Subject <span className="text-gold">*</span>
                    </label>
                    <Input
                        id="subject"
                        name="subject"
                        placeholder="Reservation inquiry"
                        value={formData.subject}
                        onChange={handleChange}
                        className={errors.subject ? "border-destructive focus-visible:ring-destructive" : ""}
                    />
                    {errors.subject && <p className="text-caption text-destructive">{errors.subject}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-body-sm font-medium">
                    Message <span className="text-gold">*</span>
                </label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`min-h-[140px] ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                />
                {errors.message && <p className="text-caption text-destructive">{errors.message}</p>}
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-brown-900 border-t-transparent" />
                        Sending...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                    </span>
                )}
            </Button>
        </form>
    );
}
