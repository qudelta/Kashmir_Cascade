import { useEffect, useState } from "react";
import { X, User, Phone, MapPin, Calendar, Users, MessageSquare, Send, CheckCircle, Mountain } from "lucide-react";
import { CustomSelect } from "../ui/custom-select";

import { submitLead } from "@/lib/api";

export function PlanTripModal() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        tripType: "Kashmir Trip",
        destination: "Kashmir (Classic)",
        selectedPackage: "Not Decided",
        customDestination: "",
        travelMonth: ["Any Month"],
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
                customDestination: "",
                travelMonth: ["Any Month"],
                budgetRange: "Mid-range (₹40k-80k)",
                travelers: 2,
                message: ""
            });
        }, 300);
    };

    useEffect(() => {
        const modal = document.getElementById("planTripModal");
        const closeBtn = document.getElementById("closePlanTripModal");

        const handleOpenTrip = (e) => {
            const { tripType, selectedPackage, message: newMessage } = e.detail || {};
            setFormData(prev => {
                // Prevent duplicate message injection
                let updatedMessage = prev.message;
                if (newMessage && !updatedMessage.includes(newMessage)) {
                    updatedMessage = updatedMessage ? `${newMessage}\n\n${updatedMessage}` : newMessage;
                }

                return {
                    ...prev,
                    tripType: tripType || prev.tripType,
                    selectedPackage: selectedPackage || prev.selectedPackage,
                    message: updatedMessage,
                    destination: tripType === "Destination Wedding" ? "Destination Wedding Venue" : prev.destination
                };
            });
            if (modal) modal.classList.add("open");
            document.body.style.overflow = "hidden";
        };

        window.addEventListener("open-plan-trip", handleOpenTrip);
        closeBtn?.addEventListener("click", closeModal);
        modal?.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });

        const handleEsc = (e) => {
            if (e.key === "Escape") closeModal();
        };
        document.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("open-plan-trip", handleOpenTrip);
            closeBtn?.removeEventListener("click", closeModal);
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const isWedding = formData.tripType === "Destination Wedding";

        // Prepare data for API
        const apiData = {
            name: formData.name,
            email: formData.email,
            phone_number: formData.phone,
            trip_type: formData.tripType,
            preferred_package: formData.selectedPackage,
            destination_focus: formData.customDestination || formData.destination,
            approx_budget: formData.budgetRange,
            travel_months: Array.isArray(formData.travelMonth) ? formData.travelMonth.join(", ") : formData.travelMonth,
            traveller_count: formData.travelers,
            custom_requirements: formData.message
        };

        // Submit to API (concurrently, don't await)
        submitLead(apiData).catch(err => console.error("Background API submission failed:", err));

        // Build WhatsApp message
        const message = `*KASHMIR CASCADE - NEW INQUIRY*
- Experience the Art of Travel -

*Customer Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || "Not provided"}

*${isWedding ? "Wedding Details" : "Trip Preferences"}:*
• Trip Type: ${formData.tripType}
• Destination: ${formData.destination}
• Package: ${formData.selectedPackage}
• ${isWedding ? "Wedding Date" : "Travel Month"}: ${Array.isArray(formData.travelMonth) ? formData.travelMonth.join(", ") : formData.travelMonth}
• Budget: ${formData.budgetRange}
• ${isWedding ? "Guest Count" : "Group Size"}: ${formData.travelers} Persons

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

        setFormData(prev => {
            const newData = { ...prev, [field]: finalValue };

            // Auto-reset budget if switching trip types to/from Wedding
            if (field === "tripType") {
                if (finalValue === "Destination Wedding") {
                    newData.budgetRange = "Under ₹15 Lakhs";
                    newData.destination = "Destination Wedding Venue";
                } else if (prev.tripType === "Destination Wedding") {
                    newData.budgetRange = "Mid-range (₹40k-80k)";
                    newData.destination = "Kashmir (Classic)";
                }
            }
            return newData;
        });

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
                        <MessageSquare className="w-10 h-10 text-primary" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-4 font-display">
                        Opening WhatsApp...
                    </h3>
                    <p className="text-text-dark/80 mb-6">
                        We are redirecting you to WhatsApp to send your inquiry details. If it doesn't open automatically, click the button below.
                    </p>

                    <button
                        onClick={() => {
                            const isWedding = formData.tripType === "Destination Wedding";
                            const message = `*KASHMIR CASCADE - NEW INQUIRY*
- Experience the Art of Travel -

*Customer Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || "Not provided"}

*${isWedding ? "Wedding Details" : "Trip Preferences"}:*
• Trip Type: ${formData.tripType}
• Destination: ${formData.destination}
• Package: ${formData.selectedPackage}
• ${isWedding ? "Wedding Date" : "Travel Month"}: ${Array.isArray(formData.travelMonth) ? formData.travelMonth.join(", ") : formData.travelMonth}
• Budget: ${formData.budgetRange}
• ${isWedding ? "Guest Count" : "Group Size"}: ${formData.travelers} Persons

*Special Requirements:*
${formData.message || "I'm looking for the best experience!"}

---
_Sent via kashmircascade.com_`;
                            const whatsappUrl = `https://wa.me/916006853203?text=${encodeURIComponent(message)}`;
                            window.open(whatsappUrl, "_blank");
                        }}
                        className="w-full h-14 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-2 mb-3"
                    >
                        <Send className="w-5 h-5" /> Open WhatsApp
                    </button>

                    <button
                        onClick={closeModal}
                        className="text-text-dark/60 hover:text-text-dark text-sm font-medium"
                    >
                        Close Window
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
                        <CustomSelect
                            label="Trip Type"
                            icon={Mountain}
                            value={formData.tripType}
                            onChange={(value) => handleInputChange("tripType", value)}
                            options={[
                                { value: "Kashmir Trip", label: "Kashmir Trip" },
                                { value: "Ladakh Trip", label: "Ladakh Trip" },
                                { value: "Destination Wedding", label: "Destination Wedding" }
                            ]}
                        />
                        <CustomSelect
                            label="Preferred Package"
                            icon={CheckCircle}
                            value={formData.selectedPackage}
                            onChange={(value) => handleInputChange("selectedPackage", value)}
                            options={[
                                { value: "Not Decided", label: "Not Decided / Help Me Choose" },
                                ...(formData.tripType === "Kashmir Trip" ? [
                                    { value: "Romantic Honeymoon", label: "Romantic Honeymoon" },
                                    { value: "Family Adventure", label: "Family Adventure" },
                                    { value: "Offbeat Expedition", label: "Offbeat Expedition" },
                                    { value: "Great Lakes Trek", label: "Great Lakes Trek" },
                                    { value: "Spiritual Pilgrimage", label: "Spiritual Pilgrimage" },
                                    { value: "Winter Special", label: "Winter Special" },
                                    { value: "Photography Special", label: "Photography Special" }
                                ] : []),
                                ...(formData.tripType === "Ladakh Trip" ? [
                                    { value: "Monastery Trail", label: "Monastery Trail" },
                                    { value: "Lakes Explorer", label: "Lakes Explorer" },
                                    { value: "Pangong & Tso Moriri", label: "Pangong & Tso Moriri" },
                                    { value: "Bike Expedition", label: "Bike Expedition" },
                                    { value: "Adventure Expedition", label: "Adventure Expedition" },
                                    { value: "Zanskar Expedition", label: "Zanskar Expedition" },
                                    { value: "Winter Chadar Trek", label: "Winter Chadar Trek" },
                                    { value: "Budget Explorer", label: "Budget Explorer" }
                                ] : []),
                                ...(formData.tripType === "Destination Wedding" ? [
                                    { value: "Intimate Wedding", label: "Intimate Wedding" },
                                    { value: "Royal Celebration", label: "Royal Celebration" },
                                    { value: "Grand Destination", label: "Grand Destination" }
                                ] : [])
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <CustomSelect
                            label="Destination Focus"
                            icon={MapPin}
                            value={formData.destination}
                            onChange={(value) => handleInputChange("destination", value)}
                            options={[
                                { value: "Kashmir (Classic)", label: "Kashmir (Classic)" },
                                { value: "Kashmir (Off-beat)", label: "Kashmir (Off-beat)" },
                                { value: "Ladakh (Classic)", label: "Ladakh (Classic)" },
                                { value: "Ladakh (Off-beat)", label: "Ladakh (Off-beat)" },
                                { value: "Kashmir & Ladakh (Combo)", label: "Kashmir & Ladakh (Combo)" },
                                { value: "Destination Wedding Venue", label: "Destination Wedding Venue" },
                                { value: "Custom / Other Destination", label: "Custom / Other Destination" }
                            ]}
                        />
                        {formData.destination === "Custom / Other Destination" && (
                            <div className="space-y-1.5 md:col-span-1">
                                <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">
                                    Specify Destination <span className="text-red-400">*</span>
                                </label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        placeholder="E.g. Gurez Valley, Zanskar..."
                                        value={formData.customDestination}
                                        onChange={(e) => handleInputChange("customDestination", e.target.value)}
                                        className="w-full h-11 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-text-dark/20"
                                    />
                                </div>
                            </div>
                        )}
                        <CustomSelect
                            label="Approx. Budget"
                            icon={Users}
                            value={formData.budgetRange}
                            onChange={(value) => handleInputChange("budgetRange", value)}
                            options={formData.tripType === "Destination Wedding" ? [
                                { value: "Under ₹15 Lakhs", label: "Under ₹15 Lakhs (Total)" },
                                { value: "₹15 Lakhs - ₹30 Lakhs", label: "₹15 Lakhs - ₹30 Lakhs (Total)" },
                                { value: "₹30 Lakhs - ₹50 Lakhs", label: "₹30 Lakhs - ₹50 Lakhs (Total)" },
                                { value: "₹50 Lakhs - ₹1 Crore", label: "₹50 Lakhs - ₹1 Crore (Total)" },
                                { value: "₹1 Crore+", label: "₹1 Crore+ (Total)" }
                            ] : [
                                { value: "Economy (₹20k-40k)", label: "Economy (₹20k-40k / person)" },
                                { value: "Mid-range (₹40k-80k)", label: "Mid-range (₹40k-80k / person)" },
                                { value: "Luxury (₹80k-1.5L)", label: "Luxury (₹80k-1.5L / person)" },
                                { value: "Elite (₹1.5L+)", label: "Elite (₹1.5L+ / person)" }
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {formData.tripType === "Destination Wedding" ? (
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">Tentative Wedding Date</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                        <Calendar className="w-4 h-4" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="E.g. Dec 2025"
                                        value={formData.travelMonth}
                                        onChange={(e) => handleInputChange("travelMonth", e.target.value)}
                                        className="w-full h-11 pl-10 pr-4 bg-white/5 border border-white/10 rounded-xl text-text-dark text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>
                        ) : (
                            <CustomSelect
                                label="Travel Month"
                                icon={Calendar}
                                value={formData.travelMonth}
                                onChange={(value) => handleInputChange("travelMonth", value)}
                                multi={true}
                                options={[
                                    "Any Month", "January", "February", "March", "April", "May", "June",
                                    "July", "August", "September", "October", "November", "December"
                                ]}
                            />
                        )}
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-text-dark/60 uppercase tracking-widest ml-1">
                                {formData.tripType === "Destination Wedding" ? "Estimated Guest Count" : "Travelers"}
                            </label>
                            <div className="relative group">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors">
                                    <Users className="w-4 h-4" />
                                </div>
                                <input
                                    type="number"
                                    min="1"
                                    max="500"
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
