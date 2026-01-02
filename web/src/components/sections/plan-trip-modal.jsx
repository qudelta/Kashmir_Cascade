import { useEffect, useState } from "react";
import { X, User, Phone, MapPin, Calendar, Users, MessageSquare, Send, CheckCircle, Mountain } from "lucide-react";

export function PlanTripModal() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        tripType: "Kashmir Trip",
        destination: "Kashmir (Classic)",
        selectedPackage: "Not Decided",
        travelMonth: "Any Month",
        budgetRange: "Mid-range (₹40k-80k)",
        travelers: 2,
        message: ""
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        let tempErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            tempErrors.name = "Full name is required";
        } else if (formData.name.trim().length < 3) {
            tempErrors.name = "Name must be at least 3 characters";
        }

        // Phone validation (Required, 10 digits)
        const phoneDigits = formData.phone.replace(/\D/g, "");
        if (!formData.phone.trim()) {
            tempErrors.phone = "Phone number is required";
        } else if (phoneDigits.length < 10) {
            tempErrors.phone = "Please enter a valid 10-digit phone number";
        }

        // Travelers validation
        if (formData.travelers < 1 || formData.travelers > 50) {
            tempErrors.travelers = "Please enter between 1 and 50 travelers";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const closeModal = () => {
        const modal = document.getElementById("planTripModal");
        modal?.classList.remove("open");
        document.body.style.overflow = "";
        // Reset form after closing
        setTimeout(() => {
            setIsSubmitted(false);
            setErrors({});
            setFormData({
                name: "",
                email: "",
                phone: "",
                tripType: "Kashmir Trip",
                destination: "Kashmir (Classic)",
                selectedPackage: "Not Decided",
                travelMonth: "Any Month",
                budgetRange: "Mid-range (₹40k-80k)",
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

        const handleEsc = (e) => {
            if (e.key === "Escape") closeModal();
        };
        document.addEventListener("keydown", handleEsc);

        return () => {
            closeBtn?.removeEventListener("click", closeModal);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Build WhatsApp message
        const message = `*KASHMIR CASCADE - NEW INQUIRY*
- Experience the Art of Travel -

*Customer Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || "Not provided"}

*Trip Preferences:*
• Trip Type: ${formData.tripType}
• Destination: ${formData.destination}
• Package: ${formData.selectedPackage}
• Travel Month: ${formData.travelMonth}
• Budget: ${formData.budgetRange}
• Group Size: ${formData.travelers} Persons

*Special Requirements:*
${formData.message || "I'm looking for the best experience!"}

---
_Sent via kashmircascade.com_`;

        // Encode for URL
        const encodedMessage = encodeURIComponent(message);

        // Open WhatsApp with the message
        const whatsappUrl = `https://wa.me/916006853203?text=${encodedMessage}`;
        window.open(whatsappUrl, "_blank");

        // Show success state
        setIsSubmitted(true);
    };

    const handleInputChange = (field, value) => {
        let finalValue = value;

        // Strictly allow only digits for phone number
        if (field === "phone") {
            finalValue = value.replace(/\D/g, "").slice(0, 10);
        }

        setFormData(prev => ({ ...prev, [field]: finalValue }));

        // Real-time error clearing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: null }));
        }
    };

    // Success state
    if (isSubmitted) {
        return (
            <div className="fixed inset-0 bg-black/80 z-[100] flex items-start md:items-center justify-center modal-overlay p-4 pt-20 md:pt-4 overflow-y-auto" id="planTripModal">
                <div className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl relative modal-content border border-white/10 my-auto text-center">
                    <button className="absolute top-4 right-4 text-text-dark/80 hover:text-text-dark transition-colors p-2" id="closePlanTripModal">
                        <X className="w-6 h-6" />
                    </button>

                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-primary" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-4 font-display">
                        Inquiry Sent!
                    </h3>
                    <p className="text-text-dark/80 mb-6">
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
            <div className="bg-white rounded-2xl p-5 md:p-8 max-w-2xl w-full shadow-2xl relative modal-content border border-white/10 my-auto">
                <button className="absolute top-4 right-4 text-text-dark/80 hover:text-text-dark transition-colors p-2" id="closePlanTripModal">
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-2 font-display">Plan Your Dream Trip</h3>
                    <p className="text-text-dark/80 text-sm">Tell us your preferences and we'll craft a perfect itinerary for you.</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">
                                Full Name <span className="text-red-400">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <User className="w-4 h-4" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange("name", e.target.value)}
                                    className={`w-full h-11 pl-10 pr-4 bg-white/5 border rounded-xl text-text-dark text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-text-dark/20 ${errors.name
                                        ? "border-red-500/50 focus:ring-red-500/20"
                                        : "border-white/10 focus:ring-primary/50 focus:border-primary"
                                        }`}
                                />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">
                                Phone Number <span className="text-red-400">*</span>
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <input
                                    type="tel"
                                    required
                                    placeholder="10-digit number"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange("phone", e.target.value)}
                                    className={`w-full h-11 pl-10 pr-4 bg-white/5 border rounded-xl text-text-dark text-sm focus:outline-none focus:ring-2 transition-all placeholder:text-text-dark/20 ${errors.phone
                                        ? "border-red-500/50 focus:ring-red-500/20"
                                        : "border-white/10 focus:ring-primary/50 focus:border-primary"
                                        }`}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">Trip Type</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <Mountain className="w-4 h-4" />
                                </div>
                                <select
                                    className="w-full h-11 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer transition-all"
                                    value={formData.tripType}
                                    onChange={(e) => handleInputChange("tripType", e.target.value)}
                                >
                                    <option value="Kashmir Trip">Kashmir Trip</option>
                                    <option value="Ladakh Trip">Ladakh Trip</option>
                                    <option value="Destination Wedding">Destination Wedding</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">Preferred Package</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <CheckCircle className="w-4 h-4" />
                                </div>
                                <select
                                    className="w-full h-11 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer transition-all"
                                    value={formData.selectedPackage}
                                    onChange={(e) => handleInputChange("selectedPackage", e.target.value)}
                                >
                                    <option value="Not Decided">Not Decided / Help Me Choose</option>
                                    {formData.tripType === "Kashmir Trip" && (
                                        <>
                                            <option value="Romantic Honeymoon">Romantic Honeymoon</option>
                                            <option value="Family Adventure">Family Adventure</option>
                                            <option value="Great Lakes Trek">Great Lakes Trek</option>
                                            <option value="Spiritual Pilgrimage">Spiritual Pilgrimage</option>
                                            <option value="Winter Special">Winter Special</option>
                                        </>
                                    )}
                                    {formData.tripType === "Ladakh Trip" && (
                                        <>
                                            <option value="Monastery Trail">Monastery Trail</option>
                                            <option value="Lakes Explorer">Lakes Explorer</option>
                                            <option value="Bike Expedition">Bike Expedition</option>
                                            <option value="Adventure Expedition">Adventure Expedition</option>
                                            <option value="Budget Explorer">Budget Explorer</option>
                                        </>
                                    )}
                                    {formData.tripType === "Destination Wedding" && (
                                        <>
                                            <option value="Intimate Wedding">Intimate Wedding</option>
                                            <option value="Royal Celebration">Royal Celebration</option>
                                            <option value="Grand Destination">Grand Destination</option>
                                        </>
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">Destination Focus</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <select
                                    className="w-full h-11 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer transition-all"
                                    value={formData.destination}
                                    onChange={(e) => handleInputChange("destination", e.target.value)}
                                >
                                    <option value="Kashmir (Classic)">Kashmir (Classic)</option>
                                    <option value="Kashmir (Off-beat)">Kashmir (Off-beat)</option>
                                    <option value="Ladakh (Classic)">Ladakh (Classic)</option>
                                    <option value="Ladakh (Off-beat)">Ladakh (Off-beat)</option>
                                    <option value="Kashmir & Ladakh (Combo)">Kashmir & Ladakh (Combo)</option>
                                    <option value="Destination Wedding Venue">Destination Wedding Venue</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">Approx. Budget</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <Users className="w-4 h-4" />
                                </div>
                                <select
                                    className="w-full h-11 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer transition-all"
                                    value={formData.budgetRange}
                                    onChange={(e) => handleInputChange("budgetRange", e.target.value)}
                                >
                                    <option value="Economy (₹20k-40k)">Economy (₹20k-40k / person)</option>
                                    <option value="Mid-range (₹40k-80k)">Mid-range (₹40k-80k / person)</option>
                                    <option value="Luxury (₹80k-1.5L)">Luxury (₹80k-1.5L / person)</option>
                                    <option value="Elite (₹1.5L+)">Elite (₹1.5L+ / person)</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">Travel Month</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <Calendar className="w-4 h-4" />
                                </div>
                                <select
                                    className="w-full h-11 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none cursor-pointer transition-all"
                                    value={formData.travelMonth}
                                    onChange={(e) => handleInputChange("travelMonth", e.target.value)}
                                >
                                    <option value="Any Month">Any Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">Travelers</label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <Users className="w-4 h-4" />
                                </div>
                                <input
                                    type="number"
                                    min="1"
                                    max="50"
                                    value={formData.travelers}
                                    onChange={(e) => handleInputChange("travelers", parseInt(e.target.value) || 1)}
                                    className="w-full h-11 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">Custom Requirements</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-3 text-primary/60 group-focus-within:text-primary transition-colors">
                                <MessageSquare className="w-4 h-4" />
                            </div>
                            <textarea
                                placeholder="E.g. Luxury houseboat, special anniversary surprise..."
                                value={formData.message}
                                onChange={(e) => handleInputChange("message", e.target.value)}
                                className="w-full h-24 pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-text-dark/20 resize-none"
                            ></textarea>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full h-12 bg-primary text-background-dark font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                    >
                        <Send className="w-4 h-4" />
                        <span>Confirm & Send via WhatsApp</span>
                    </button>

                    <p className="text-[10px] text-text-dark/40 text-center mt-4">
                        Your inquiry will be sent via WhatsApp. We typically respond within 2 hours during business hours.
                    </p>
                </form>
            </div>
        </div>
    );
}
