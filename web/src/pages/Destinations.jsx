import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PageHeader } from "@/components/layout/page-header";
import { InteractiveMap } from "@/components/sections/interactive-map";
import { destinations } from "@/lib/data";
import { ArrowRight, Calendar, Navigation, Filter } from "lucide-react";

const regions = ["All", "Kashmir", "Ladakh"];

export default function Destinations() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeRegion, setActiveRegion] = useState("All");

    // Sync filter with URL query params
    useEffect(() => {
        const regionParam = searchParams.get("region");
        if (regionParam && regions.includes(regionParam)) {
            setActiveRegion(regionParam);
        } else {
            setActiveRegion("All");
        }
    }, [searchParams]);

    const handleFilterChange = (region) => {
        setActiveRegion(region);
        if (region === "All") {
            setSearchParams({});
        } else {
            setSearchParams({ region });
        }
    };

    const filteredDestinations = activeRegion === "All"
        ? destinations
        : destinations.filter(dest => dest.region === activeRegion);

    return (
        <div className="min-h-screen bg-background-light">
            <PageHeader
                title="Explore Destinations"
                subtitle={<>The <span className="text-primary">Gems</span> of Kashmir & Ladakh</>}
                image="/images/Pahalgam.jpg"
            />

            <section className="max-w-[1280px] mx-auto px-6 py-20">
                {/* Region Filters */}
                <div className="flex flex-wrap gap-3 mb-12 justify-center">
                    <div className="flex items-center gap-2 text-text-dark/70 mr-4">
                        <Filter className="w-4 h-4" />
                        <span className="text-sm font-medium">Region:</span>
                    </div>
                    {regions.map((region) => (
                        <button
                            key={region}
                            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${region === activeRegion
                                ? "bg-primary text-white shadow-lg shadow-primary/30"
                                : "bg-white text-text-dark/90 hover:bg-primary/5 hover:text-primary border border-text-dark/10"
                                }`}
                            onClick={() => handleFilterChange(region)}
                        >
                            {region}
                        </button>
                    ))}
                </div>

                {/* Results Count */}
                <p className="text-center text-text-dark/70 mb-8">
                    Showing <span className="font-bold text-primary">{filteredDestinations.length}</span> destinations
                    {activeRegion !== "All" && ` in ${activeRegion}`}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {filteredDestinations.map((dest) => (
                        <div key={dest.id}>
                            <Link
                                to={`/destinations/${dest.id}`}
                                className="group block"
                            >
                                <div className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-text-dark/10 group-hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-2">
                                    <div className="absolute inset-0 w-full h-full">
                                        <img
                                            src={dest.image}
                                            alt={dest.title}
                                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${dest.imagePosition ? `object-${dest.imagePosition}` : 'object-center'}`}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                                    {/* Region Badge */}
                                    {dest.region && (
                                        <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-text-dark text-xs font-bold px-3 py-1.5 rounded-full">
                                            {dest.region}
                                        </span>
                                    )}

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-white flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                        Explore <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>

                                <h2 className="text-3xl font-heading font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                                    {dest.title}
                                </h2>
                                <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">{dest.subtitle}</p>
                                <p className="text-text-dark/80 line-clamp-2">{dest.description}</p>

                                <div className="mt-4 flex items-center gap-4 text-sm text-text-dark/70">
                                    <span className="flex items-center gap-1.5 bg-primary/5 px-3 py-1.5 rounded-full">
                                        <Navigation className="h-3.5 w-3.5 text-primary" /> {dest.stats.altitude}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-primary/5 px-3 py-1.5 rounded-full">
                                        <Calendar className="h-3.5 w-3.5 text-primary" /> {dest.stats.bestTime}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <InteractiveMap />
        </div>
    );
}
