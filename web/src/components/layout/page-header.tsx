import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image: string;
    className?: string;
    imageClassName?: string;
}

export function PageHeader({ title, subtitle, image, className, imageClassName = "object-center" }: PageHeaderProps) {
    return (
        <div className={cn("relative h-[50vh] min-h-[400px] flex items-center justify-center text-center text-white overflow-hidden", className)}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className={cn("object-cover scale-105", imageClassName)}
                    sizes="100vw"
                />
            </div>

            {/* Gradient Overlay - matches homepage hero */}
            <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/40 to-background-dark z-10" />
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Content */}
            <div className="relative z-20 max-w-[1280px] mx-auto px-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 drop-shadow-xl">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg md:text-xl font-medium tracking-wide text-primary uppercase drop-shadow-md">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
