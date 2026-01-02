import { Hero } from "@/components/sections/hero";
import { SeasonalOffers } from "@/components/sections/seasonal-offers";
import { FeaturedDestinations } from "@/components/sections/featured-destinations";
import { BestSellingPackages } from "@/components/sections/best-selling-packages";
import { WhyChooseUs } from "@/components/sections/why-choose-us";

export default function Home() {
    return (
        <>
            <Hero />
            <SeasonalOffers />

            <div className="max-w-[1280px] mx-auto px-6 py-16 flex flex-col gap-24">
                <FeaturedDestinations />
                <BestSellingPackages />
                <WhyChooseUs />
            </div>
        </>
    );
}
