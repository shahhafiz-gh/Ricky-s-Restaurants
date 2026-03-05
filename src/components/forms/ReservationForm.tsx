"use client";

import { CalendarCheck, CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useReservation } from "@/hooks/useReservation";

export default function ReservationForm() {
    const { form, isSubmitting, isSuccess, error, onSubmit } = useReservation();

    const {
        register,
        formState: { errors },
    } = form;

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center rounded-card border border-gold/20 bg-gold/5 px-8 py-16 text-center shadow-sm transition-all animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="mb-4 h-12 w-12 text-gold animate-bounce" />
                <h3 className="mb-2 font-display text-heading-md font-semibold text-gold">
                    Reservation Confirmed
                </h3>
                <p className="text-body-md text-muted-foreground">
                    Thank you, your table is booked. We have sent the confirmation
                    details to your email.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={onSubmit} className="space-y-6 animate-in fade-in duration-500">
            {error && (
                <div className="flex items-center gap-3 rounded-md border border-destructive/50 bg-destructive/10 p-4 text-destructive">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <p className="text-body-sm">{error}</p>
                </div>
            )}

            {/* Booking Details */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-display text-heading-sm font-semibold text-gold">
                    1. Booking Details
                </h3>
                <div className="grid gap-5 sm:grid-cols-3">
                    <div className="space-y-2 relative">
                        <label htmlFor="date" className="text-body-sm font-medium">
                            Date <span className="text-gold">*</span>
                        </label>
                        <Input
                            id="date"
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                            {...register("date")}
                            className={errors.date ? "border-destructive focus-visible:ring-destructive" : ""}
                        />
                        {errors.date && (
                            <p className="text-caption text-destructive absolute -bottom-5">
                                {errors.date.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2 relative">
                        <label htmlFor="time" className="text-body-sm font-medium">
                            Time <span className="text-gold">*</span>
                        </label>
                        <select
                            id="time"
                            {...register("time")}
                            className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-ring focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.time
                                    ? "border-destructive focus-visible:ring-destructive"
                                    : "border-input"
                                }`}
                        >
                            <option value="" disabled className="text-white bg-brown-900">
                                Select time
                            </option>
                            <option value="17:00">5:00 PM</option>
                            <option value="17:30">5:30 PM</option>
                            <option value="18:00">6:00 PM</option>
                            <option value="18:30">6:30 PM</option>
                            <option value="19:00">7:00 PM</option>
                            <option value="19:30">7:30 PM</option>
                            <option value="20:00">8:00 PM</option>
                            <option value="20:30">8:30 PM</option>
                            <option value="21:00">9:00 PM</option>
                        </select>
                        {errors.time && (
                            <p className="text-caption text-destructive absolute -bottom-5">
                                {errors.time.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2 relative">
                        <label htmlFor="guests" className="text-body-sm font-medium">
                            Guests <span className="text-gold">*</span>
                        </label>
                        <select
                            id="guests"
                            {...register("guests")}
                            className={`flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-sm ring-ring focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${errors.guests
                                    ? "border-destructive focus-visible:ring-destructive"
                                    : "border-input"
                                }`}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                <option key={num} value={num}>
                                    {num} {num === 1 ? "Guest" : "Guests"}
                                </option>
                            ))}
                            <option value="9+">9+ Guests (Contact us)</option>
                        </select>
                        {errors.guests && (
                            <p className="text-caption text-destructive absolute -bottom-5">
                                {errors.guests.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Contact Details */}
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-display text-heading-sm font-semibold text-gold">
                    2. Contact Information
                </h3>
                <div className="grid gap-5 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-2 relative lg:col-span-1">
                        <label htmlFor="name" className="text-body-sm font-medium">
                            Full Name <span className="text-gold">*</span>
                        </label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            {...register("name")}
                            className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                        />
                        {errors.name && (
                            <p className="text-caption text-destructive absolute -bottom-5">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2 relative lg:col-span-1">
                        <label htmlFor="email" className="text-body-sm font-medium">
                            Email <span className="text-gold">*</span>
                        </label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            {...register("email")}
                            className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                        />
                        {errors.email && (
                            <p className="text-caption text-destructive absolute -bottom-5">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2 relative lg:col-span-1">
                        <label htmlFor="phone" className="text-body-sm font-medium">
                            Phone Number <span className="text-gold">*</span>
                        </label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            {...register("phone")}
                            className={errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
                        />
                        {errors.phone && (
                            <p className="text-caption text-destructive absolute -bottom-5">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-2 relative">
                <label htmlFor="specialRequests" className="text-body-sm font-medium">
                    Special Requests (Optional)
                </label>
                <Textarea
                    id="specialRequests"
                    placeholder="Allergies, special occasions, dietary requirements..."
                    {...register("specialRequests")}
                    className={`min-h-[100px] ${errors.specialRequests ? "border-destructive focus-visible:ring-destructive" : ""
                        }`}
                />
                {errors.specialRequests && (
                    <p className="text-caption text-destructive absolute -bottom-5">
                        {errors.specialRequests.message}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto mt-2 transition-all duration-300 relative group"
            >
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-brown-900 border-t-transparent" />
                        Processing...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <CalendarCheck className="h-4 w-4 transition-transform group-hover:scale-110" />
                        Confirm Reservation
                    </span>
                )}
            </Button>
        </form>
    );
}
