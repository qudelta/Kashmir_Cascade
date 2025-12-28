"use client";

import { useEffect, useState } from "react";
import { X, User, Mail, Phone, MapPin, Calendar, Users, MessageSquare, Send, CheckCircle } from "lucide-react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    destination: string;
    travelMonth: string;
    travelers: number;
    message: string;
}

export function PlanTripModal() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        destination: "Kashmir Valley",
        travelMonth: "Any Month",
        travelers: 2,
        message: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const closeModal = () => {
        const modal = document.getElementById("planTripModal");
        modal?.classList.remove("open");
        document.body.style.overflow = "";
        // Reset form after closing
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                destination: "Kashmir Valley",
                travelMonth: "Any Month",
                travelers: 2,
                message: ""
            });
        }, 300);
    };

    useEffect(() => {
        const modal = document.getElementById("planTripModal");
        const closeBtn = document.getElementById("closePlanTripModal");

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.name.trim() || !formData.phone.trim()) {
            alert("Please fill in your name and phone number.");
            return;
        }

        // Build WhatsApp message
        const message = `🏔️ *New Trip Inquiry from Kashmir Travels Website*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email || "Not provided"}
📱 *Phone:* ${formData.phone}

🗺️ *Destination:* ${formData.destination}
📅 *Travel Month:* ${formData.travelMonth}
👥 *Travelers:* ${formData.travelers}

💬 *Message:*
${formData.message || "No special requests"}

---
_Sent via Kashmir Travels website_`;

        // Encode for URL
        const encodedMessage = encodeURIComponent(message);

        // Open WhatsApp with the message
        const whatsappUrl = `https://wa.me/917006476074?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");

        // Show success state
        setIsSubmitted(true);
    };

    const handleInputChange = (field: keyof FormData, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // Success state
    if (isSubmitted) {
        return (
            <div className="fixed inset-0 bg-black/80 z-[100] flex items-start md:items-center justify-center modal-overlay p-4 pt-20 md:pt-4 overflow-y-auto" id="planTripModal">
                <div className="bg-card-dark rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl relative modal-content border border-white/10 my-auto text-center">
                    <button className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2" id="closePlanTripModal">
                        <X className="w-6 h-6" />
                    </button>

                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-display">
                        Inquiry Sent!
                    </h3>
                    <p className="text-white/60 mb-6">
                        Your inquiry has been sent via WhatsApp. Our team will respond within 24 hours to help plan your dream Kashmir trip!
                    </p>

                    <button
                        onClick={closeModal}
                        className="w-full h-14 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary/90 transition-all"
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-start md:items-center justify-center modal-overlay p-4 pt-20 md:pt-4 overflow-y-auto" id="planTripModal">
            <div className="bg-card-dark rounded-2xl p-5 md:p-8 max-w-2xl w-full shadow-2xl relative modal-content border border-white/10 my-auto">
                <button className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-2" id="closePlanTripModal">
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display">Plan Your Dream Trip</h3>
                    <p className="text-white/60 text-sm">Tell us your preferences and we'll craft a perfect itinerary for you.</p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase tracking-wider ml-1">
                                Full Name <span className="text-red-400">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <User className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase tracking-wider ml-1">Email Address</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase tracking-wider ml-1">
                                Phone Number <span className="text-red-400">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+91 99999 99999"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                    className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase tracking-wider ml-1">Destination</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <select
                                    className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer transition-all"
                                    value={formData.destination}
                                    onChange={(e) => handleInputChange("destination", e.target.value)}
                                >
                                    <option className="bg-card-dark" value="Kashmir Valley">Kashmir Valley</option>
                                    <option className="bg-card-dark" value="Leh Ladakh">Leh Ladakh</option>
                                    <option className="bg-card-dark" value="Gurez Valley">Gurez Valley</option>
                                    <option className="bg-card-dark" value="Winter Special">Winter Special</option>
                                    <option className="bg-card-dark" value="Custom / Multiple">Custom / Multiple Destinations</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase tracking-wider ml-1">Travel Month</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <select
                                    className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer transition-all"
                                    value={formData.travelMonth}
                                    onChange={(e) => handleInputChange("travelMonth", e.target.value)}
                                >
                                    <option className="bg-card-dark" value="Any Month">Any Month</option>
                                    <option className="bg-card-dark" value="Spring/Summer (Apr-Jun)">Spring/Summer (Apr-Jun)</option>
                                    <option className="bg-card-dark" value="Autumn (Jul-Sep)">Monsoon/Autumn (Jul-Sep)</option>
                                    <option className="bg-card-dark" value="Winter Start (Oct-Dec)">Winter Start (Oct-Dec)</option>
                                    <option className="bg-card-dark" value="Peak Winter (Jan-Mar)">Peak Winter (Jan-Mar)</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/60 uppercase tracking-wider ml-1">No. of Travelers</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <Users className="w-5 h-5" />
                                </div>
                                <input
                                    type="number"
                                    min="1"
                                    max="50"
                                    value={formData.travelers}
                                    onChange={(e) => handleInputChange("travelers", parseInt(e.target.value) || 1)}
                                    className="w-full h-12 pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-white/60 uppercase tracking-wider ml-1">Message or Special Requests</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-4 text-primary/60 group-focus-within:text-primary transition-colors">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <textarea
                                placeholder="I want a luxury houseboat stay and a visit to Doodhpathri..."
                                value={formData.message}
                                onChange={(e) => handleInputChange("message", e.target.value)}
                                className="w-full h-32 pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-white/20 resize-none"
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full h-14 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                    >
                        <Send className="w-5 h-5" />
                        <span>Send via WhatsApp</span>
                    </button>

                    <p className="text-[10px] text-white/40 text-center">
                        Your inquiry will be sent via WhatsApp. We typically respond within 2 hours during business hours.
                    </p>
                </form>
            </div>
        </div>
    );
}
