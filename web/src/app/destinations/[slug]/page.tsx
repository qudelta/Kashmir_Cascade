import { PageHeader } from "@/components/layout/page-header";
import { destinations } from "@/lib/data";
import { notFound } from "next/navigation";
import { MapPin, Calendar, Mountain, CloudSun, Compass } from "lucide-react";
import Link from "next/link";

// Use the correct Next.js 15 type for params
type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return destinations.map((dest) => ({
        slug: dest.id,
    }));
}

export default async function DestinationDetail({ params }: { params: Params }) {
    // Await the params to get the slug
    const { slug } = await params;
    const destination = destinations.find((d) => d.id === slug);

    if (!destination) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title={destination.title}
                subtitle={destination.subtitle}
                image={destination.image}
                className="h-[60vh]"
                imageClassName={destination.imagePosition ? `object-${destination.imagePosition}` : "object-center"}
            />

            <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section>
                        <h2 className="text-2xl font-bold font-heading mb-4 text-white flex items-center gap-3">
                            <span className="w-10 h-1 bg-primary"></span>
                            Overview
                        </h2>
                        <p className="text-lg text-white/70 leading-relaxed">
                            {destination.description}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-heading mb-6 text-white flex items-center gap-3">
                            <span className="w-10 h-1 bg-primary"></span>
                            Key Attractions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {destination.attractions.map((attraction, i) => (
                                <div key={i} className="bg-card-dark p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                                        <Compass className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-white">{attraction.title}</h3>
                                    <p className="text-white/60 text-sm">{attraction.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-3">Ready to Explore {destination.title}?</h3>
                        <p className="text-white/60 mb-6">Check out our curated packages that include {destination.title}.</p>
                        <Link
                            href="/packages"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary/90 transition-colors"
                        >
                            View Packages
                        </Link>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="bg-card-dark border border-white/10 p-8 rounded-2xl sticky top-24">
                        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">Quick Facts</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <Mountain className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-white/50">Altitude</span>
                                    <span className="font-semibold text-white">{destination.stats.altitude}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <Calendar className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-white/50">Best Time to Visit</span>
                                    <span className="font-semibold text-white">{destination.stats.bestTime}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-white/50">Distance</span>
                                    <span className="font-semibold text-white">{destination.stats.distance}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <CloudSun className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-white/50">Weather</span>
                                    <span className="font-semibold text-white">Check Forecast</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-8 py-4 rounded-xl bg-primary text-background-dark font-bold hover:bg-primary/90 transition-colors">
                            Plan a Trip Here
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
