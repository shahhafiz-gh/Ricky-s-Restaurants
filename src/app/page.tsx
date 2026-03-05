import Hero from "@/components/sections/Hero";
import FeaturedDishes from "@/components/sections/FeaturedDishes";
import AboutPreview from "@/components/sections/AboutPreview";
import dynamic from "next/dynamic";

const CateringPreview = dynamic(() => import("@/components/sections/CateringPreview"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const ReservationCTA = dynamic(() => import("@/components/sections/ReservationCTA"));

export default function Home() {
    return (
        <>
            <Hero />
            <FeaturedDishes />
            <AboutPreview />
            <CateringPreview />
            <Testimonials />
            <ReservationCTA />
        </>
    );
}
