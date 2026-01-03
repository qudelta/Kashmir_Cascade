import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/layout/page-header";
import { destinations } from "@/lib/data";
import { fetchWeather } from "@/lib/weather-service";
import { MapPin, Calendar, Mountain, CloudSun, Compass, CloudRain, CloudSnow, CloudFog, CloudLightning, Sun, Cloud } from "lucide-react";

const WeatherIcon = ({ icon, className }) => {
    switch (icon) {
        case 'Sun': return <Sun className={className} />;
        case 'CloudSun': return <CloudSun className={className} />;
        case 'CloudFog': return <CloudFog className={className} />;
        case 'CloudRain': return <CloudRain className={className} />;
        case 'CloudSnow': return <CloudSnow className={className} />;
        case 'CloudLightning': return <CloudLightning className={className} />;
        default: return <Cloud className={className} />;
    }
};

export default function DestinationDetail() {
    const { id } = useParams();
    const destination = destinations.find((d) => d.id === id);
    const [weather, setWeather] = useState(null);
    const [loadingWeather, setLoadingWeather] = useState(false);

    useEffect(() => {
        async function getWeather() {
            if (destination?.stats?.lat && destination?.stats?.lon) {
                setLoadingWeather(true);
                const data = await fetchWeather(destination.stats.lat, destination.stats.lon);
                setWeather(data);
                setLoadingWeather(false);
            }
        }
        getWeather();
    }, [destination]);

    if (!destination) {
        return (
            <div className="min-h-screen bg-background-light flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-text-dark mb-4">Destination Not Found</h2>
                    <Link to="/destinations" className="text-primary hover:underline">Back to Destinations</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background-light">
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
                        <h2 className="text-2xl font-bold font-heading mb-4 text-text-dark flex items-center gap-3">
                            <span className="w-10 h-1 bg-primary"></span>
                            Overview
                        </h2>
                        <p className="text-lg text-text-dark/90 leading-relaxed">
                            {destination.description}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-heading mb-6 text-text-dark flex items-center gap-3">
                            <span className="w-10 h-1 bg-primary"></span>
                            Key Attractions
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {destination.attractions.map((attraction, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-text-dark/10 hover:border-primary/30 transition-colors">
                                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                                        <Compass className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-text-dark">{attraction.title}</h3>
                                    <p className="text-text-dark/80 text-sm">{attraction.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/20 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-text-dark mb-3">Ready to Explore {destination.title}?</h3>
                        <p className="text-text-dark/80 mb-6">Check out our curated packages that include {destination.title}.</p>
                        <Link
                            to="/packages"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary/90 transition-colors"
                        >
                            View Packages
                        </Link>
                    </section>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    <div className="bg-white border border-text-dark/10 p-8 rounded-2xl sticky top-24">
                        <h3 className="text-xl font-bold text-text-dark mb-6 border-b border-text-dark/10 pb-4">Quick Facts</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <Mountain className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-text-dark/70">Altitude</span>
                                    <span className="font-semibold text-text-dark">{destination.stats.altitude}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <Calendar className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-text-dark/70">Best Time to Visit</span>
                                    <span className="font-semibold text-text-dark">{destination.stats.bestTime}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <span className="block text-sm text-text-dark/70">Distance</span>
                                    <span className="font-semibold text-text-dark">{destination.stats.distance}</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                    {weather ? (
                                        <WeatherIcon icon={weather.icon} className="h-5 w-5" />
                                    ) : (
                                        <CloudSun className="h-5 w-5" />
                                    )}
                                </div>
                                <div>
                                    <span className="block text-sm text-text-dark/70">Current Weather</span>
                                    <span className="font-semibold text-text-dark">
                                        {loadingWeather ? (
                                            "Fetching..."
                                        ) : weather ? (
                                            `${weather.temp}°C, ${weather.condition}`
                                        ) : (
                                            "Check Forecast"
                                        )}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <button
                            className="w-full mt-8 py-4 rounded-xl bg-primary text-background-dark font-bold hover:bg-primary/90 transition-colors"
                            onClick={() => {
                                const modal = document.getElementById("planTripModal");
                                if (modal) modal.classList.add("open");
                                document.body.style.overflow = "hidden";
                            }}
                        >
                            Plan a Trip Here
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
