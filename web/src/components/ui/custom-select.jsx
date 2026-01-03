import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming cn utility exists, if not I'll define it or use standard strings

export function CustomSelect({
    options,
    value,
    onChange,
    placeholder = "Select an option",
    label,
    icon: Icon,
    className,
    error,
    multi = false
}) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getDisplayValue = () => {
        if (!value || (Array.isArray(value) && value.length === 0)) return placeholder;

        if (multi && Array.isArray(value)) {
            if (value.includes("Any Month") || value.includes("Any")) return value.find(v => v.includes("Any"));
            if (value.length <= 2) {
                return value.map(val => {
                    const opt = options.find(o => (typeof o === 'object' ? o.value : o) === val);
                    return typeof opt === 'object' ? opt.label : opt;
                }).join(", ");
            }
            return `${value.length} selected`;
        }

        const selectedOption = options.find(opt => (typeof opt === 'object' ? opt.value : opt) === value);
        return typeof selectedOption === 'object' ? selectedOption.label : selectedOption;
    };

    const handleSelect = (optValue) => {
        if (multi) {
            let newValue;
            const currentValues = Array.isArray(value) ? value : (value ? [value] : []);

            // Special handling for "Any Month"
            if (optValue === "Any Month" || optValue === "Any") {
                newValue = [optValue];
            } else {
                // If "Any Month" was selected and now we pick a specific month, remove "Any Month"
                const filtered = currentValues.filter(v => v !== "Any Month" && v !== "Any");
                if (filtered.includes(optValue)) {
                    newValue = filtered.filter(v => v !== optValue);
                } else {
                    newValue = [...filtered, optValue];
                }
                if (newValue.length === 0) newValue = ["Any Month"]; // Default back if empty
            }
            onChange(newValue);
        } else {
            onChange(optValue);
            setIsOpen(false);
        }
    };

    return (
        <div className={cn("space-y-1.5 w-full", className)} ref={containerRef}>
            {label && (
                <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">
                    {label}
                </label>
            )}

            <div className="relative">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "w-full h-11 pl-10 pr-10 bg-white/5 border rounded-xl text-text-dark text-sm text-left focus:outline-none focus:ring-2 transition-all flex items-center justify-between group",
                        error
                            ? "border-red-500/50 focus:ring-red-500/20"
                            : "border-white/10 focus:ring-primary/50 focus:border-primary",
                        isOpen && "ring-2 ring-primary/50 border-primary"
                    )}
                >
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                        {Icon && <Icon className="w-4 h-4" />}
                    </div>

                    <span className={cn("truncate", (!value || (Array.isArray(value) && value.length === 0)) && "text-text-dark/20")}>
                        {getDisplayValue()}
                    </span>

                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-text-dark/40"
                    >
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 4, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute z-[110] w-full left-0 top-full bg-white rounded-xl shadow-2xl border border-white/10 overflow-hidden max-h-60 overflow-y-auto custom-scrollbar"
                        >
                            <div className="p-1">
                                {options.map((option, index) => {
                                    const optValue = typeof option === 'object' ? option.value : option;
                                    const optLabel = typeof option === 'object' ? option.label : option;
                                    const isSelected = multi && Array.isArray(value)
                                        ? value.includes(optValue)
                                        : optValue === value;

                                    return (
                                        <button
                                            key={index}
                                            type="button"
                                            onClick={() => handleSelect(optValue)}
                                            className={cn(
                                                "w-full flex items-center justify-between px-4 py-2.5 text-sm rounded-lg transition-colors text-left",
                                                isSelected
                                                    ? "bg-primary text-background-dark font-medium"
                                                    : "text-text-dark hover:bg-primary/10"
                                            )}
                                        >
                                            <span className="truncate">{optLabel}</span>
                                            {isSelected && <Check className="w-4 h-4" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {error && <p className="text-[10px] text-red-500 ml-1">{error}</p>}
        </div>
    );
}
