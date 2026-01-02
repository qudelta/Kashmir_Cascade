import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

// Adjusted positions for the wider satellite map view
const hotspots = [
    { id: "srinagar-city", title: "Srinagar", top: 48, left: 46, type: "City" }, // Centered in the general valley area
    { id: "gulmarg", title: "Gulmarg", top: 42, left: 35, type: "Ski Resort" }, // West/North-West
    { id: "pahalgam", title: "Pahalgam", top: 60, left: 65, type: "Valley" },   // South-East
    { id: "sonamarg", title: "Sonamarg", top: 35, left: 58, type: "Meadow" },   // North-East
    { id: "gurez", title: "Gurez Valley", top: 20, left: 42, type: "Offbeat" }, // Far North
    { id: "doodhpathri", title: "Doodhpathri", top: 52, left: 38, type: "Meadow" }, // South-West
    { id: "yusmarg", title: "Yusmarg", top: 58, left: 40, type: "Meadow" },     // South
    { id: "aru-valley", title: "Aru Valley", top: 58, left: 68, type: "Valley" }, // Near Pahalgam
];

export function InteractiveMap() {
    return (
        <section className="py-20 bg-[#0A1610] relative overflow-hidden">
            {/* Background Element using image */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img
                    src="/images/Kashmir 2.jpg"
                    alt=""
                    className="w-full h-full object-cover blur-sm"
                />
            </div>

            <div className="max-w-[1280px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Explore Map</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mt-2 mb-4">
                        Discover the Valley
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Interactive map of our featured destinations. Click on the markers to explore more.
                    </p>
                </div>

                <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] bg-[#1a2c24] rounded-3xl border border-white/10 shadow-2xl overflow-hidden group">
                    {/* Map Background */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/kashmir_minimal_map.png"
                            alt="Map of Kashmir"
                            className="w-full h-full object-cover"
                        />
                        {/* Overlay gradient for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2c24]/90 via-transparent to-transparent opacity-40" />
                    </div>
                    {/* "Map" Image - A simplified representation or actual map image would be best here */}
                    {/* For now, we simulate map placement on a blank canvas with grid */}

                    {hotspots.map((spot) => (
                        <Link
                            key={spot.id}
                            to={`/destinations/${spot.id}`}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                            style={{ top: `${spot.top}%`, left: `${spot.left}%` }}
                        >
                            <div className="relative group/spot">
                                {/* Pulsing Effect */}
                                <div className="absolute -inset-4 bg-primary/20 rounded-full animate-ping opacity-0 group-hover/spot:opacity-100" />

                                <div className="w-4 h-4 rounded-full border-2 border-white bg-primary/50 group-hover/spot:bg-primary transition-all duration-300 scale-100 group-hover/spot:scale-125" />

                                {/* Label (Hidden on Mobile, visible on Desktop) */}
                                <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs font-bold whitespace-nowrap transition-all duration-300 text-white/60 group-hover/spot:text-primary group-hover/spot:-translate-y-1 hidden md:block">
                                    {spot.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
