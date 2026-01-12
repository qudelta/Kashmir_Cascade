import { cn } from "@/lib/utils";

export function PageHeader({ title, subtitle, image, className, imageClassName = "object-center" }) {
    return (
        <div className={cn("relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden", className)}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={image}
                    alt={title}
                    className={cn("w-full h-full object-cover scale-105", imageClassName)}
                    fetchPriority="high"
                    loading="eager"
                />
            </div>

            {/* Gradient Overlay - matches homepage hero */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Content */}
            <div className="relative z-20 max-w-[1280px] mx-auto px-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 drop-shadow-xl text-white">
                    {title}
                </h1>
                {subtitle && (
                    <div className="text-lg md:text-xl font-medium tracking-wide text-white/90 uppercase drop-shadow-md">
                        {subtitle}
                    </div>
                )}
            </div>
        </div>
    );
}
