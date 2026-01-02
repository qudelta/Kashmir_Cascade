import { useState, useEffect } from "react";

export function useMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        // Check on mount
        checkMobile();

        // Debounced resize handler
        let timeoutId;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkMobile, 100);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timeoutId);
        };
    }, [breakpoint]);

    return isMobile;
}

export function useReducedMotion() {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);

        const handler = (e) => {
            setPrefersReducedMotion(e.matches);
        };

        mediaQuery.addEventListener("change", handler);
        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    return prefersReducedMotion;
}

// Combine both for animation decisions
export function useShouldReduceMotion() {
    const isMobile = useMobile();
    const prefersReducedMotion = useReducedMotion();

    // On mobile, we don't disable animations but simplify them
    // Only fully disable if user explicitly prefers reduced motion
    return {
        isMobile,
        prefersReducedMotion,
        shouldSimplify: isMobile,
        shouldDisable: prefersReducedMotion,
    };
}
