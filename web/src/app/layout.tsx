import type { Metadata } from "next";
import { Space_Grotesk, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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

export const metadata: Metadata = {
    title: "Kashmir Travels - Experience Paradise",
    description: "Curated journeys to Kashmir. Houseboats, treks, and local experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
            </head>
            <body className={`${spaceGrotesk.variable} ${notoSans.variable} overflow-x-hidden`}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
