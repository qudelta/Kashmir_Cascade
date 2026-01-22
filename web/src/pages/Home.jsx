import { Hero } from "@/components/sections/hero";
import { SeasonalOffers } from "@/components/sections/seasonal-offers";
import { FeaturedDestinations } from "@/components/sections/featured-destinations";
import { BestSellingPackages } from "@/components/sections/best-selling-packages";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import SEO from "@/components/layout/SEO";

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Kashmir Cascade",
    "image": "https://kashmircascade.com/logo-black.png",
    "url": "https://kashmircascade.com",
    "telephone": "+916006853203",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Patigooro Complex, Main Chowk Sopore",
        "addressLocality": "Sopore",
        "addressRegion": "Jammu & Kashmir",
        "postalCode": "193201",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.2982,
        "longitude": 74.4673
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
    },
    "sameAs": [
        "https://www.instagram.com/kashmircascade/",
        "https://wa.me/916006853203"
    ]
};

export default function Home() {
    return (
        <>
            <SEO
                title="Premium Travel Agency in Kashmir"
                description="Kashmir Cascade is your trusted partner for premium tours in Kashmir and Ladakh. Based in Patigooro Complex, Sopore, we offer curated packages for Gulmarg, Pahalgam, and more."
                schemaData={localBusinessSchema}
            />
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
