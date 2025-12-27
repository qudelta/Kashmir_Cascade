"use client";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    Plane,
    Camera,
    Hotel,
    Mountain,
    Utensils,
    Home,
    MapPin,
    Sunrise,
    Car,
    Sparkles,
    TreePine,
    Waves,
    ShoppingBag,
    Heart
} from 'lucide-react';
import type { ItineraryItem } from '@/lib/data';

interface PackageTimelineProps {
    items: ItineraryItem[];
}

export function PackageTimeline({ items }: PackageTimelineProps) {
    // Smart icon selection based on day content
    const getIconAndColor = (item: ItineraryItem, index: number, total: number) => {
        const title = item.title.toLowerCase();
        const desc = item.desc.toLowerCase();

        // First day - Arrival
        if (index === 0 || title.includes('arrival') || title.includes('welcome')) {
            return {
                icon: <Plane className="w-5 h-5" />,
                bg: '#10b981', // Emerald green
                border: '#34d399'
            };
        }

        // Last day - Departure
        if (index === total - 1 || title.includes('departure') || title.includes('farewell') || title.includes('goodbye')) {
            return {
                icon: <Plane className="w-5 h-5 rotate-45" />,
                bg: '#f59e0b', // Amber
                border: '#fbbf24'
            };
        }

        // Adventure/Trek related
        if (title.includes('trek') || title.includes('adventure') || title.includes('expedition') || title.includes('hike')) {
            return {
                icon: <Mountain className="w-5 h-5" />,
                bg: '#8b5cf6', // Purple
                border: '#a78bfa'
            };
        }

        // Lake/Water related
        if (title.includes('lake') || title.includes('shikara') || title.includes('river') || desc.includes('lake') || desc.includes('shikara')) {
            return {
                icon: <Waves className="w-5 h-5" />,
                bg: '#0ea5e9', // Sky blue
                border: '#38bdf8'
            };
        }

        // Gardens/Nature
        if (title.includes('garden') || title.includes('valley') || title.includes('meadow') || desc.includes('garden')) {
            return {
                icon: <TreePine className="w-5 h-5" />,
                bg: '#22c55e', // Green
                border: '#4ade80'
            };
        }

        // Sightseeing
        if (title.includes('sightseeing') || title.includes('exploration') || title.includes('tour') || title.includes('visit')) {
            return {
                icon: <Camera className="w-5 h-5" />,
                bg: '#ec4899', // Pink
                border: '#f472b6'
            };
        }

        // Shopping/Leisure
        if (title.includes('shopping') || title.includes('leisure') || title.includes('rest')) {
            return {
                icon: <ShoppingBag className="w-5 h-5" />,
                bg: '#f97316', // Orange
                border: '#fb923c'
            };
        }

        // Romantic/Honeymoon
        if (title.includes('romantic') || title.includes('honeymoon') || title.includes('candlelight')) {
            return {
                icon: <Heart className="w-5 h-5" />,
                bg: '#ef4444', // Red
                border: '#f87171'
            };
        }

        // Spiritual/Temple
        if (title.includes('temple') || title.includes('shrine') || title.includes('spiritual') || title.includes('monastery')) {
            return {
                icon: <Sunrise className="w-5 h-5" />,
                bg: '#eab308', // Yellow
                border: '#facc15'
            };
        }

        // Transfer/Drive
        if (title.includes('drive') || title.includes('transfer') || desc.includes('drive to')) {
            return {
                icon: <Car className="w-5 h-5" />,
                bg: '#6366f1', // Indigo
                border: '#818cf8'
            };
        }

        // Default - based on position for variety
        const defaultOptions = [
            { icon: <Sunrise className="w-5 h-5" />, bg: '#c9a227', border: '#e2b33f' },
            { icon: <Camera className="w-5 h-5" />, bg: '#14b8a6', border: '#2dd4bf' },
            { icon: <Mountain className="w-5 h-5" />, bg: '#8b5cf6', border: '#a78bfa' },
            { icon: <TreePine className="w-5 h-5" />, bg: '#22c55e', border: '#4ade80' },
        ];

        return defaultOptions[index % defaultOptions.length];
    };

    return (
        <div className="timeline-wrapper">
            <VerticalTimeline
                lineColor="rgba(201, 162, 39, 0.4)"
                animate={true}
            >
                {items.map((item, index) => {
                    const { icon, bg, border } = getIconAndColor(item, index, items.length);

                    return (
                        <VerticalTimelineElement
                            key={item.day}
                            className="vertical-timeline-element--work"
                            contentStyle={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                color: '#fff',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                padding: '24px',
                            }}
                            contentArrowStyle={{ borderRight: '8px solid rgba(255, 255, 255, 0.05)' }}
                            date={`Day ${item.day}`}
                            dateClassName="timeline-date"
                            iconStyle={{
                                background: bg,
                                color: '#fff',
                                boxShadow: `0 0 0 4px ${border}, inset 0 2px 0 rgba(255,255,255,0.2), 0 3px 15px rgba(0,0,0,0.4)`,
                            }}
                            icon={icon}
                        >
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white font-heading">
                                    {item.title}
                                </h3>

                                <p className="text-white/60 leading-relaxed text-sm">
                                    {item.desc}
                                </p>

                                {/* Highlights */}
                                {item.highlights && item.highlights.length > 0 && (
                                    <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-4">
                                        <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider flex items-center gap-2">
                                            <Sparkles className="w-3.5 h-3.5" />
                                            Highlights
                                        </h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {item.highlights.map((highlight, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Info Grid */}
                                {(item.meals || item.accommodation || item.distance) && (
                                    <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/10">
                                        {item.meals && (
                                            <div className="flex items-center gap-2 text-xs bg-orange-500/10 text-orange-300 px-3 py-1.5 rounded-full">
                                                <Utensils className="w-3.5 h-3.5" />
                                                <span>{item.meals}</span>
                                            </div>
                                        )}
                                        {item.accommodation && (
                                            <div className="flex items-center gap-2 text-xs bg-blue-500/10 text-blue-300 px-3 py-1.5 rounded-full">
                                                <Hotel className="w-3.5 h-3.5" />
                                                <span className="truncate max-w-[150px]" title={item.accommodation}>
                                                    {item.accommodation}
                                                </span>
                                            </div>
                                        )}
                                        {item.distance && (
                                            <div className="flex items-center gap-2 text-xs bg-green-500/10 text-green-300 px-3 py-1.5 rounded-full">
                                                <MapPin className="w-3.5 h-3.5" />
                                                <span>{item.distance}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </VerticalTimelineElement>
                    );
                })}

                {/* Final Element - Trip Complete */}
                <VerticalTimelineElement
                    iconStyle={{
                        background: 'linear-gradient(135deg, #c9a227, #e2b33f)',
                        color: '#1a1a2e',
                        boxShadow: '0 0 0 4px #c9a227, 0 0 20px rgba(201, 162, 39, 0.4), 0 3px 15px rgba(0,0,0,0.4)',
                    }}
                    icon={<Sparkles className="w-5 h-5" />}
                />
            </VerticalTimeline>

            <style jsx global>{`
                .timeline-wrapper .vertical-timeline::before {
                    background: linear-gradient(to bottom, rgba(201, 162, 39, 0.6), rgba(201, 162, 39, 0.1));
                    width: 3px;
                }

                .timeline-wrapper .timeline-date {
                    font-weight: 700 !important;
                    font-size: 0.8rem !important;
                    color: #1a1a2e !important;
                    background: linear-gradient(135deg, #c9a227 0%, #e2b33f 100%) !important;
                    padding: 6px 14px !important;
                    border-radius: 50px !important;
                    display: inline-block !important;
                    box-shadow: 0 2px 10px rgba(201, 162, 39, 0.3) !important;
                }

                @media (max-width: 1169px) {
                    .timeline-wrapper .timeline-date {
                        display: block !important;
                        margin-bottom: 12px !important;
                        width: fit-content !important;
                    }
                }

                .timeline-wrapper .vertical-timeline-element-content {
                    transition: all 0.3s ease !important;
                }

                .timeline-wrapper .vertical-timeline-element-content:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4) !important;
                    border-color: rgba(201, 162, 39, 0.3) !important;
                }

                .timeline-wrapper .vertical-timeline-element-icon {
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }

                .timeline-wrapper .vertical-timeline-element-icon svg {
                    width: 20px !important;
                    height: 20px !important;
                }
            `}</style>
        </div>
    );
}
