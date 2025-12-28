import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppCta } from "@/components/ui/whatsapp-cta";
import { PlanTripModal } from "@/components/sections/plan-trip-modal";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
});

const notoSans = Noto_Sans({
    subsets: ["latin"],
    variable: "--font-noto-sans",
    weight: ["400", "500", "700"],
    display: "swap",
});

const siteUrl = "https://kashmirtravels.com";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Kashmir Travels - Premium Kashmir & Ladakh Tour Packages",
        template: "%s | Kashmir Travels"
    },
    description: "Discover the magic of Kashmir with our curated tour packages. Experience houseboats on Dal Lake, skiing in Gulmarg, trekking in Pahalgam, and authentic Kashmiri hospitality. Book your dream vacation today!",
    keywords: [
        "Kashmir tours", "Kashmir travel", "Kashmir packages", "Ladakh tours",
        "Dal Lake houseboat", "Gulmarg skiing", "Pahalgam trekking", "Sonamarg",
        "Kashmir honeymoon", "Kashmir family tour", "Kashmir adventure",
        "Srinagar tourism", "Kashmir valley", "Gurez valley", "Kashmir trip"
    ],
    authors: [{ name: "Kashmir Travels" }],
    creator: "Qudelta Studios",
    publisher: "Kashmir Travels",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: siteUrl,
        siteName: "Kashmir Travels",
        title: "Kashmir Travels - Premium Kashmir & Ladakh Tour Packages",
        description: "Discover the magic of Kashmir with our curated tour packages. Experience houseboats, skiing, trekking, and authentic Kashmiri hospitality.",
        images: [
            {
                url: "/images/Kashmir Dal Lake Background.jpg",
                width: 1200,
                height: 630,
                alt: "Kashmir Dal Lake - Kashmir Travels",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Kashmir Travels - Premium Kashmir & Ladakh Tour Packages",
        description: "Discover the magic of Kashmir with our curated tour packages. Experience houseboats, skiing, trekking, and authentic Kashmiri hospitality.",
        images: ["/images/Kashmir Dal Lake Background.jpg"],
    },
    alternates: {
        canonical: siteUrl,
    },
    category: "Travel",
    verification: {
        // Add your verification codes when you have them
        // google: "your-google-verification-code",
        // yandex: "your-yandex-verification-code",
    },
};

export const viewport: Viewport = {
    themeColor: "#0F1A14",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        name: "Kashmir Travels",
        description: "Premium Kashmir & Ladakh tour packages with authentic local experiences",
        url: siteUrl,
        logo: `${siteUrl}/images/logo.png`,
        image: `${siteUrl}/images/Kashmir Dal Lake Background.jpg`,
        telephone: "+91-9906000000",
        email: "info@kashmirtravels.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Boulevard Road, Dal Lake",
            addressLocality: "Srinagar",
            addressRegion: "Jammu & Kashmir",
            postalCode: "190001",
            addressCountry: "IN"
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 34.0837,
            longitude: 74.7973
        },
        areaServed: ["Kashmir", "Ladakh", "Jammu"],
        priceRange: "₹₹₹",
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "20:00"
        },
        sameAs: [
            "https://qudeltasolutions.com"
        ]
    };

    return (
        <html lang="en" className="dark">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/png" href="/favicon.png" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${spaceGrotesk.variable} ${notoSans.variable} overflow-x-hidden`}>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <WhatsAppCta />
                <PlanTripModal />
            </body>
        </html>
    );
}
