"use client";

import { motion } from "framer-motion";

interface ItineraryItem {
    day: number;
    title: string;
    desc: string;
}

export function Timeline({ items }: { items: ItineraryItem[] }) {
    return (
        <div className="relative border-l-2 border-muted ml-4 md:ml-6 space-y-12 py-4">
            {items.map((item, index) => (
                <motion.div
                    key={item.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative pl-8 md:pl-12"
                >
                    {/* Dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-sm ring-1 ring-secondary" />

                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                        <span className="text-sm font-bold text-secondary uppercase tracking-widest">Day {item.day}</span>
                        <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                    </div>

                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl bg-muted/20 p-4 rounded-lg">
                        {item.desc}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}
