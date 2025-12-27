"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// Fade in from bottom animation
export function FadeIn({
    children,
    delay = 0,
    duration = 0.5,
    className = ""
}: {
    children: ReactNode;
    delay?: number;
    duration?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Fade in from left
export function FadeInLeft({
    children,
    delay = 0,
    className = ""
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Fade in from right
export function FadeInRight({
    children,
    delay = 0,
    className = ""
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Scale up animation
export function ScaleIn({
    children,
    delay = 0,
    className = ""
}: {
    children: ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered children animation container
export function StaggerContainer({
    children,
    className = "",
    staggerDelay = 0.1
}: {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay
                    }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Staggered child item
export function StaggerItem({
    children,
    className = ""
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: "easeOut" }
                }
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Hover scale effect
export function HoverScale({
    children,
    scale = 1.05,
    className = ""
}: {
    children: ReactNode;
    scale?: number;
    className?: string;
}) {
    return (
        <motion.div
            whileHover={{ scale }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Floating animation (for decorative elements)
export function Float({
    children,
    className = ""
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Pulse animation
export function Pulse({
    children,
    className = ""
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            animate={{
                scale: [1, 1.05, 1],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Text reveal animation (character by character)
export function TextReveal({
    text,
    className = "",
    delay = 0
}: {
    text: string;
    className?: string;
    delay?: number;
}) {
    const words = text.split(" ");

    return (
        <motion.span className={className}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-2">
                    {word.split("").map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.3,
                                delay: delay + (wordIndex * 0.1) + (charIndex * 0.03),
                                ease: "easeOut"
                            }}
                            className="inline-block"
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.span>
    );
}

// Counter animation
export function AnimatedCounter({
    value,
    duration = 2,
    className = ""
}: {
    value: number;
    duration?: number;
    className?: string;
}) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={className}
        >
            <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                {value}
            </motion.span>
        </motion.span>
    );
}

// Parallax scroll effect
export function Parallax({
    children,
    speed = 0.5,
    className = ""
}: {
    children: ReactNode;
    speed?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ y: 0 }}
            whileInView={{ y: -50 * speed }}
            viewport={{ once: false }}
            transition={{ duration: 0 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
