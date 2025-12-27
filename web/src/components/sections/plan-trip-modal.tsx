"use client";

import { useEffect } from "react";

export function PlanTripModal() {
    useEffect(() => {
        const modal = document.getElementById("planTripModal");
        const closeBtn = document.getElementById("closePlanTripModal");

        const closeModal = () => {
            modal?.classList.remove("open");
            document.body.style.overflow = "";
        };

        closeBtn?.addEventListener("click", closeModal);
        modal?.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });

        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        document.addEventListener("keydown", handleEsc);

        return () => {
            closeBtn?.removeEventListener("click", closeModal);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center modal-overlay" id="planTripModal">
            <div className="bg-card-dark rounded-xl p-6 md:p-8 max-w-xl w-full mx-4 shadow-2xl relative modal-content">
                <button className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors" id="closePlanTripModal">
                    <span className="material-symbols-outlined">close</span>
                </button>
                <h3 className="text-2xl font-bold text-white mb-6 text-center font-display">Plan Your Trip</h3>

                <div className="flex flex-col md:flex-row gap-4">
                    {/* Destination */}
                    <div className="flex-1 relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                            <span className="material-symbols-outlined">location_on</span>
                        </div>
                        <select className="w-full h-14 pl-12 pr-4 bg-background-dark/80 border border-transparent rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer hover:bg-background-dark">
                            <option disabled selected value="">Where to?</option>
                            <option value="srinagar">Srinagar</option>
                            <option value="pahalgam">Pahalgam</option>
                            <option value="gulmarg">Gulmarg</option>
                            <option value="sonamarg">Sonamarg</option>
                            <option value="leh">Leh Ladakh</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                            <span className="material-symbols-outlined text-sm">expand_more</span>
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="flex-1 relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                            <span className="material-symbols-outlined">schedule</span>
                        </div>
                        <select className="w-full h-14 pl-12 pr-4 bg-background-dark/80 border border-transparent rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer hover:bg-background-dark">
                            <option disabled selected value="">Duration</option>
                            <option value="3-5">3-5 Days</option>
                            <option value="5-7">5-7 Days</option>
                            <option value="7-10">7-10 Days</option>
                            <option value="10+">10+ Days</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                            <span className="material-symbols-outlined text-sm">expand_more</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    {/* Month */}
                    <div className="flex-1 relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                            <span className="material-symbols-outlined">calendar_month</span>
                        </div>
                        <select className="w-full h-14 pl-12 pr-4 bg-background-dark/80 border border-transparent rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer hover:bg-background-dark">
                            <option disabled selected value="">Month</option>
                            <option value="spring">Spring (Mar-May)</option>
                            <option value="summer">Summer (Jun-Aug)</option>
                            <option value="autumn">Autumn (Sep-Nov)</option>
                            <option value="winter">Winter (Dec-Feb)</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                            <span className="material-symbols-outlined text-sm">expand_more</span>
                        </div>
                    </div>

                    <button className="h-14 px-8 bg-primary hover:bg-green-500 text-background-dark font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20 flex-1 mt-4 md:mt-0">
                        <span className="material-symbols-outlined">search</span>
                        <span>Search</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
