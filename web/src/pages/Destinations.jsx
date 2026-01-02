import { Link } from "react-router-dom";
import { PageHeader } from "@/components/layout/page-header";
import { InteractiveMap } from "@/components/sections/interactive-map";
import { destinations } from "@/lib/data";
import { ArrowRight, Calendar, Navigation } from "lucide-react";

export default function Destinations() {
    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title="Explore Destinations"
                subtitle="The gems of Kashmir & Ladakh"
                image="/images/Pahalgam.jpg"
            />

            <section className="max-w-[1280px] mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {destinations.map((dest) => (
                        <div key={dest.id}>
                            <Link
                                to={`/destinations/${dest.id}`}
                                className="group block"
                            >
                                <div className="relative h-80 rounded-2xl overflow-hidden mb-6 border border-white/10 group-hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-2">
                                    <div className="absolute inset-0 w-full h-full">
                                        <img
                                            src={dest.image}
                                            alt={dest.title}
                                            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${dest.imagePosition ? `object-${dest.imagePosition}` : 'object-center'}`}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-background-dark flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                        Explore <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>

                                <h2 className="text-3xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {dest.title}
                                </h2>
                                <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">{dest.subtitle}</p>
                                <p className="text-white/60 line-clamp-2">{dest.description}</p>

                                <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
                                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
                                        <Navigation className="h-3.5 w-3.5 text-primary" /> {dest.stats.altitude}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full">
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
