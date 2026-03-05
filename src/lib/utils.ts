import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"




export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}



export function formatPrice(
    price: number,
    currency: string = "AED",
    locale: string = "en-AE"
): string {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(price)
}


export function formatPhone(phone: string): string {
    const cleaned = phone.replace(/\D/g, "")
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`
    }
    return phone
}


export function truncate(str: string, maxLength: number): string {
    if (str.length <= maxLength) return str
    return str.slice(0, maxLength).trimEnd() + "…"
}


export function slugify(str: string): string {
    return str
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_]+/g, "-")
        .replace(/^-+|-+$/g, "")
}


export function getInitials(name: string): string {
    return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
}


export function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
}


export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max)
}
