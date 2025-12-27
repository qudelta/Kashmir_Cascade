// Mobile-optimized motion configurations
// Use these instead of hardcoding values for better mobile performance

export const mobileMotionConfig = {
    // Reduced durations for snappier feel on mobile
    duration: {
        fast: 0.2,
        normal: 0.3,
        slow: 0.4,
    },
    // Desktop durations
    desktopDuration: {
        fast: 0.3,
        normal: 0.5,
        slow: 0.7,
    },
    // GPU-friendly transforms only
    // Avoid: width, height, top, left, margin, padding
    // Use: transform (translate, scale, rotate), opacity
    safeTransforms: ["x", "y", "scale", "rotate", "opacity"],
};

// Simplified variants for mobile - shorter distances, faster timing
export const getMobileOptimizedVariants = (isMobile: boolean) => ({
    fadeInUp: {
        hidden: { opacity: 0, y: isMobile ? 15 : 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: isMobile ? 0.3 : 0.5,
                ease: "easeOut" as const,
            },
        },
    },
    fadeInLeft: {
        hidden: { opacity: 0, x: isMobile ? -15 : -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: isMobile ? 0.3 : 0.5,
                ease: "easeOut" as const,
            },
        },
    },
    fadeInRight: {
        hidden: { opacity: 0, x: isMobile ? 15 : 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: isMobile ? 0.3 : 0.5,
                ease: "easeOut" as const,
            },
        },
    },
    scaleIn: {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: isMobile ? 0.25 : 0.4,
                ease: "easeOut" as const,
            },
        },
    },
    stagger: {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: isMobile ? 0.05 : 0.1,
            },
        },
    },
});

// Hover effects should be disabled on touch devices
export const getHoverEffects = (isMobile: boolean) => {
    if (isMobile) {
        return {
            whileHover: undefined,
            whileTap: { scale: 0.98 },
        };
    }
    return {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
    };
};

// For infinite animations - disable on mobile
export const getInfiniteAnimation = (isMobile: boolean, animation: object) => {
    return isMobile ? {} : animation;
};
