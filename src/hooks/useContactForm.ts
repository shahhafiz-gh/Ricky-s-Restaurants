"use client";

import { useState, useCallback } from "react";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().optional(),
    subject: z.string().min(3, "Subject must be at least 3 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

const INITIAL_FORM_DATA: ContactFormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
};

export function useContactForm() {
    const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setFormData((prev) => ({ ...prev, [name]: value }));

            // Clear error when user types
            setErrors((prev) => {
                if (prev[name as keyof ContactFormData]) {
                    return { ...prev, [name]: undefined };
                }
                return prev;
            });
        },
        []
    );

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();

            // Validate against standard Zod schema
            const result = contactSchema.safeParse(formData);
            if (!result.success) {
                const formattedErrors: Record<string, string> = {};
                result.error.issues.forEach((issue) => {
                    if (issue.path[0]) {
                        formattedErrors[issue.path[0].toString()] = issue.message;
                    }
                });
                setErrors(formattedErrors);
                return; // Stop submission due to validation error
            }
            // Clear errors on success
            setErrors({});

            setIsSubmitting(true);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData(INITIAL_FORM_DATA);

            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        },
        [formData]
    );

    const resetForm = useCallback(() => {
        setFormData(INITIAL_FORM_DATA);
        setErrors({});
        setIsSuccess(false);
    }, []);

    return {
        formData,
        errors,
        isSubmitting,
        isSuccess,
        handleChange,
        handleSubmit,
        resetForm,
    };
}
