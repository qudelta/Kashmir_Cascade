import { PageHeader } from "@/components/layout/page-header";
import { packages } from "@/lib/data";
import { notFound } from "next/navigation";
import { PackageTimeline } from "@/components/ui/package-timeline";
import { CheckCircle2, XCircle, MapPin, Clock, Users, Mountain, Star, IndianRupee, Shield, Phone, Mail } from "lucide-react";

// Generic params type
type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
    return packages.map((pkg) => ({
        slug: pkg.id,
    }));
}

export default async function PackageDetail({ params }: { params: Params }) {
    const { slug } = await params;
    const pkg = packages.find((p) => p.id === slug);

    if (!pkg) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-background-dark">
            <PageHeader
                title={pkg.title}
                subtitle={pkg.tagline}
                image={pkg.image}
                className="h-[70vh]"
            />

            {/* Quick Info Bar */}
            <div className="bg-card-dark border-y border-white/10 py-6 -mt-16 relative z-10">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="flex items-center gap-3">
                            <Clock className="w-6 h-6 text-primary" />
                            <div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Duration</div>
                                <div className="font-bold text-white">{pkg.days} Days / {pkg.nights} Nights</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Users className="w-6 h-6 text-primary" />
                            <div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Group Size</div>
                                <div className="font-bold text-white">{pkg.groupSize}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mountain className="w-6 h-6 text-primary" />
                            <div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Difficulty</div>
                                <div className="font-bold text-white">{pkg.difficulty}</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                            <div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Rating</div>
                                <div className="font-bold text-white">{pkg.rating} ({pkg.reviews} reviews)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Overview */}
                    <section>
                        <h2 className="text-3xl font-bold font-heading mb-6 text-white flex items-center gap-3">
                            <span className="w-12 h-1 bg-primary"></span>
                            Tour Overview
                        </h2>
                        <p className="text-lg text-white/70 leading-relaxed">
                            {pkg.overview}
                        </p>

                        {/* Highlights */}
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
                            {pkg.highlights.map((highlight, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="text-sm font-medium text-white/80">{highlight}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Route */}
                    <section>
                        <h2 className="text-3xl font-bold font-heading mb-6 text-white flex items-center gap-3">
                            <span className="w-12 h-1 bg-primary"></span>
                            Tour Route
                        </h2>
                        <div className="flex flex-wrap items-center gap-3">
                            {pkg.route.map((place, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="flex items-center gap-2 bg-card-dark border border-white/10 px-4 py-2 rounded-full">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span className="font-medium text-white">{place}</span>
                                    </div>
                                    {i < pkg.route.length - 1 && (
                                        <div className="mx-2 text-primary font-bold">→</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Itinerary */}
                    <section>
                        <h2 className="text-3xl font-bold font-heading mb-8 text-white flex items-center gap-3">
                            <span className="w-12 h-1 bg-primary"></span>
                            Day-by-Day Itinerary
                        </h2>
                        <PackageTimeline items={pkg.itinerary} />
                    </section>

                    {/* Inclusions & Exclusions */}
                    <section className="grid md:grid-cols-2 gap-8">
                        {/* Inclusions */}
                        <div className="bg-green-900/20 border border-green-500/20 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                                <CheckCircle2 className="w-6 h-6" />
                                What's Included
                            </h3>
                            <ul className="space-y-3">
                                {pkg.inclusions.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-green-200/80">
                                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Exclusions */}
                        <div className="bg-red-900/20 border border-red-500/20 rounded-2xl p-6">
                            <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                                <XCircle className="w-6 h-6" />
                                What's Not Included
                            </h3>
                            <ul className="space-y-3">
                                {pkg.exclusions.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-red-200/80">
                                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Booking Sidebar */}
                <div className="space-y-8">
                    <div className="bg-card-dark border border-white/10 p-8 rounded-2xl sticky top-24">
                        {/* Price */}
                        <div className="mb-6">
                            <span className="text-sm text-white/50">Starting from</span>
                            <div className="flex items-baseline gap-3">
                                <div className="flex items-center text-4xl font-bold text-white">
                                    <IndianRupee className="w-8 h-8" />
                                    {pkg.price.toLocaleString('en-IN')}
                                </div>
                                {pkg.originalPrice && (
                                    <span className="text-lg text-white/40 line-through">
                                        ₹{pkg.originalPrice.toLocaleString('en-IN')}
                                    </span>
                                )}
                            </div>
                            <span className="text-sm text-white/50">per person</span>
                            {pkg.originalPrice && (
                                <div className="mt-2 inline-block bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                                    Save ₹{(pkg.originalPrice - pkg.price).toLocaleString('en-IN')}
                                </div>
                            )}
                        </div>

                        {/* Quick Details */}
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm py-3 border-b border-dashed border-white/10">
                                <span className="text-white/50">Duration</span>
                                <span className="font-semibold text-white">{pkg.days} Days / {pkg.nights} Nights</span>
                            </div>
                            <div className="flex justify-between text-sm py-3 border-b border-dashed border-white/10">
                                <span className="text-white/50">Tour Type</span>
                                <span className="font-semibold text-white">{pkg.category}</span>
                            </div>
                            <div className="flex justify-between text-sm py-3 border-b border-dashed border-white/10">
                                <span className="text-white/50">Group Size</span>
                                <span className="font-semibold text-white">{pkg.groupSize}</span>
                            </div>
                            <div className="flex justify-between text-sm py-3 border-b border-dashed border-white/10">
                                <span className="text-white/50">Difficulty</span>
                                <span className="font-semibold text-white">{pkg.difficulty}</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <button className="w-full py-4 rounded-xl bg-primary text-background-dark font-bold text-lg hover:bg-primary/90 transition-colors mb-3">
                            Book This Tour
                        </button>
                        <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors">
                            Customize This Trip
                        </button>

                        <p className="text-xs text-center text-white/40 mt-4">
                            No payment required to enquire. Customizations available.
                        </p>

                        {/* Trust Badges */}
                        <div className="mt-6 pt-6 border-t border-white/10">
                            <div className="flex items-center justify-center gap-2 text-sm text-white/60">
                                <Shield className="w-4 h-4 text-green-400" />
                                <span>100% Secure Booking</span>
                            </div>
                        </div>
                    </div>

                    {/* Need Help */}
                    <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 p-6 rounded-2xl">
                        <h3 className="text-lg font-bold text-white mb-2">Need Help Planning?</h3>
                        <p className="text-sm text-white/60 mb-4">
                            Our travel experts are here to help you plan the perfect trip.
                        </p>
                        <div className="space-y-2 text-sm">
                            <p className="font-semibold text-white flex items-center gap-2">
                                <Phone className="w-4 h-4 text-primary" /> +91 1234 567 890
                            </p>
                            <p className="font-semibold text-white flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary" /> info@kashmirtours.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
