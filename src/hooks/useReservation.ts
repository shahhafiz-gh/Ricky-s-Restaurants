"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    reservationSchema,
    type ReservationFormData,
    reservationService,
} from "@/services/reservation.service";



export function useReservation() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const form = useForm<ReservationFormData>({
        resolver: zodResolver(reservationSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            guests: "2",
            specialRequests: "",
        },
    });

    const onSubmit = async (data: ReservationFormData) => {
        setIsSubmitting(true);
        setError(null);
        setIsSuccess(false);

        try {
            const result = await reservationService.submitReservation(data);
            if (result.success) {
                setIsSuccess(true);
                form.reset();

                // Clear success message after 8 seconds
                setTimeout(() => setIsSuccess(false), 8000);
            }
        } catch (err: any) {
            setError(err.message || "Failed to submit reservation. Please try again or call us.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        form,
        isSubmitting,
        isSuccess,
        error,
        onSubmit: form.handleSubmit(onSubmit),
    };
}
