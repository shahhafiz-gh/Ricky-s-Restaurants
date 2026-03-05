import { z } from "zod";



export const reservationSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters.")
        .max(50, "Name must not exceed 50 characters."),
    email: z
        .string()
        .min(1, "Email is required.")
        .email("Please enter a valid email address."),
    phone: z
        .string()
        .min(10, "Phone number must be at least 10 characters.")
        .max(20, "Phone number is too long."),
    date: z.string().min(1, "Please select a date."),
    time: z.string().min(1, "Please select a time."),
    guests: z.string().min(1, "Please select number of guests."),
    specialRequests: z.string().max(500, "Special request must not exceed 500 characters.").optional(),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;

export const reservationService = {
    async submitReservation(data: ReservationFormData): Promise<{ success: boolean; message: string }> {
        console.log("Submitting reservation payload:", data);

        return new Promise((resolve, reject) => {
            setTimeout(() => {


                resolve({
                    success: true,
                    message: "Reservation confirmed successfully.",
                });
            }, 2000);
        });
    },
};
