import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export function PageTransition({ children }) {
    const location = useLocation();

    return (
        <div className="grid grid-cols-1">
            <AnimatePresence>
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="w-full col-start-1 row-start-1"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
