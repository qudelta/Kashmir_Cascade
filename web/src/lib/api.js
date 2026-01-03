
/**
 * API Service for submitting leads
 * Endpoint: https://client-leads.qudeltasolutions.com/leads/kashmir_cascade
 */

const API_ENDPOINT = "https://client-leads.qudeltasolutions.com/leads/kashmir_cascade";

/**
 * Submits lead data to the backend.
 * Runs independently and does not block UI interactions.
 * 
 * @param {Object} data - The lead data
 * @returns {Promise<void>}
 */
export const submitLead = async (data) => {
    try {
        console.log("Submitting lead to API...", data);

        // Ensure data types match expected schema
        const payload = {
            name: data.name,
            email: data.email || null,
            phone_number: data.phone_number,
            trip_type: data.trip_type,
            preferred_package: data.preferred_package || null,
            destination_focus: data.destination_focus || null,
            approx_budget: data.approx_budget || null,
            travel_months: data.travel_months || null,
            traveller_count: data.traveller_count ? parseInt(data.traveller_count) : null,
            custom_requirements: data.custom_requirements || null
        };

        const response = await fetch(API_ENDPOINT, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${response.status} - ${errorText}`);
        }

        console.log("Lead submitted successfully");
    } catch (error) {
        // We log the error but don't re-throw so it doesn't interrupt the user flow
        // The WhatsApp redirection happens independently
        console.error("Failed to submit lead to API:", error);
    }
};
