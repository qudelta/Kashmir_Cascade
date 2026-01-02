import { motion } from "framer-motion";
import {
    Plane,
    Camera,
    Hotel,
    Mountain,
    Utensils,
    MapPin,
    Sunrise,
    Car,
    Sparkles,
    TreePine,
    Waves,
    ShoppingBag,
    Heart,
    Snowflake
} from 'lucide-react';

export function PackageTimeline({ items }) {
    // Smart icon selection based on day content
    const getIconAndColor = (item, index, total) => {
        // 0. Image from Data (Highest Priority) - handled separately in render
        if (item.timelineImage) return { isImage: true };

        const title = item.title.toLowerCase();
        const desc = item.desc.toLowerCase();

        // 1. Explicit Icon from Data
        if (item.icon) {
            switch (item.icon) {
                case 'plane': return { icon: <Plane className="w-5 h-5" />, bg: 'bg-emerald-500', border: 'border-emerald-400' };
                case 'car': return { icon: <Car className="w-5 h-5" />, bg: 'bg-indigo-500', border: 'border-indigo-400' };
                case 'mountain': return { icon: <Mountain className="w-5 h-5" />, bg: 'bg-violet-500', border: 'border-violet-400' };
                case 'lake': return { icon: <Waves className="w-5 h-5" />, bg: 'bg-sky-500', border: 'border-sky-400' };
                case 'camera': return { icon: <Camera className="w-5 h-5" />, bg: 'bg-pink-500', border: 'border-pink-400' };
                case 'shopping': return { icon: <ShoppingBag className="w-5 h-5" />, bg: 'bg-orange-500', border: 'border-orange-400' };
                case 'temple': return { icon: <Sunrise className="w-5 h-5" />, bg: 'bg-yellow-500', border: 'border-yellow-400' };
                case 'ski': return { icon: <Snowflake className="w-5 h-5" />, bg: 'bg-blue-500', border: 'border-blue-400' };
                case 'food': return { icon: <Utensils className="w-5 h-5" />, bg: 'bg-rose-500', border: 'border-rose-400' };
            }
        }

        // First day - Arrival
        if (index === 0 || title.includes('arrival') || title.includes('welcome')) {
            return { icon: <Plane className="w-5 h-5" />, bg: 'bg-emerald-500', border: 'border-emerald-400' };
        }

        // Last day - Departure
        if (index === total - 1 || title.includes('departure') || title.includes('farewell')) {
            return { icon: <Plane className="w-5 h-5 rotate-45" />, bg: 'bg-amber-500', border: 'border-amber-400' };
        }

        // Keywords
        if (title.includes('trek') || title.includes('adventure')) return { icon: <Mountain className="w-5 h-5" />, bg: 'bg-violet-500', border: 'border-violet-400' };
        if (title.includes('lake') || title.includes('shikara')) return { icon: <Waves className="w-5 h-5" />, bg: 'bg-sky-500', border: 'border-sky-400' };
        if (title.includes('garden') || title.includes('valley')) return { icon: <TreePine className="w-5 h-5" />, bg: 'bg-green-500', border: 'border-green-400' };
        if (title.includes('sightseeing') || title.includes('tour')) return { icon: <Camera className="w-5 h-5" />, bg: 'bg-pink-500', border: 'border-pink-400' };
        if (title.includes('shopping') || title.includes('market')) return { icon: <ShoppingBag className="w-5 h-5" />, bg: 'bg-orange-500', border: 'border-orange-400' };
        if (title.includes('romantic') || title.includes('honeymoon')) return { icon: <Heart className="w-5 h-5" />, bg: 'bg-red-500', border: 'border-red-400' };
        if (title.includes('temple') || title.includes('shrine')) return { icon: <Sunrise className="w-5 h-5" />, bg: 'bg-yellow-500', border: 'border-yellow-400' };
        if (title.includes('drive') || title.includes('transfer')) return { icon: <Car className="w-5 h-5" />, bg: 'bg-indigo-500', border: 'border-indigo-400' };

        // Default
        return { icon: <Camera className="w-5 h-5" />, bg: 'bg-teal-500', border: 'border-teal-400' };
    };

    return (
        <div className="relative py-8 px-4 md:px-0">
            {/* Central Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 md:-ml-0.5 rounded-full" />

            <div className="space-y-12">
                {items.map((item, index) => {
                    const theme = getIconAndColor(item, index, items.length);
                    const isLeft = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex items-center md:justify-between ${isLeft ? 'flex-row' : 'flex-row-reverse md:flex-row-reverse'}`}
                        >
                            {/* Icon Marker */}
                            <div className={`absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 z-10 shadow-xl overflow-hidden bg-background-dark ${theme.isImage ? 'border-primary' : `${theme.bg} ${theme.border}`}`}>
                                {item.timelineImage ? (
                                    <img
                                        src={item.timelineImage}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="text-white">
                                        {theme.icon}
                                    </div>
                                )}
                            </div>

                            {/* Spacer for desktop layout */}
                            <div className="hidden md:block w-5/12" />

                            {/* Content Card */}
                            <div className="ml-20 md:ml-0 md:w-5/12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors shadow-lg">
                                <div className={`absolute top-6 w-4 h-4 rotate-45 bg-white/5 border-l border-b border-white/10 ${isLeft ? '-right-2 md:right-auto md:-left-2' : '-left-2 md:left-auto md:-right-2'}`} />

                                <div className="flex items-center gap-3 mb-3">
                                    <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        Day {item.day}
                                    </span>
                                    {(item.distance || item.duration) && (
                                        <span className="text-xs text-white/40 font-medium flex items-center gap-1">
                                            {item.distance && <><MapPin className="w-3 h-3" /> {item.distance}</>}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                                    {item.title}
                                </h3>

                                <p className="text-white/70 text-sm leading-relaxed mb-4">
                                    {item.desc}
                                </p>

                                {/* Highlights */}
                                {item.highlights && item.highlights.length > 0 && (
                                    <div className="border-t border-white/10 pt-4 mt-4">
                                        <h4 className="flex items-center gap-2 text-xs font-bold text-white/50 uppercase tracking-widest mb-3">
                                            <Sparkles className="w-3 h-3 text-yellow-400" /> Highlights
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {item.highlights.map((h, i) => (
                                                <span key={i} className="text-xs bg-white/5 text-white/80 px-2 py-1 rounded-md border border-white/5">
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Meta Info */}
                                <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-white/10">
                                    {item.meals && (
                                        <div className="flex items-center gap-1.5 text-xs text-orange-200 bg-orange-500/10 px-2 py-1 rounded">
                                            <Utensils className="w-3 h-3" /> {item.meals}
                                        </div>
                                    )}
                                    {item.accommodation && (
                                        <div className="flex items-center gap-1.5 text-xs text-blue-200 bg-blue-500/10 px-2 py-1 rounded">
                                            <Hotel className="w-3 h-3" /> {item.accommodation}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}

                {/* End Marker */}
                <div className="relative flex justify-center pt-8">
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 w-1 h-8 bg-white/10" />
                    <div className="relative z-10 bg-primary text-background-dark font-bold px-6 py-2 rounded-full shadow-lg shadow-primary/20 flex items-center gap-2">
                        <Heart className="w-4 h-4 fill-background-dark" /> Trip Complete
                    </div>
                </div>
            </div>
        </div>
    );
}
