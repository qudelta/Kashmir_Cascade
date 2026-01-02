/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316", // Royal Saffron/Orange (Orange-500)
        "primary-dark": "#ea580c", // Darker Orange for hovers
        "background-light": "#ffffff", // Pure White
        "background-dark": "#fafaf9", // Very light warm grey (Stone-50)
        "card-dark": "#f5f5f4", // Light warm card (Stone-100)
        "accent": "#d97706", // Amber accent (Amber-600)
        "text-dark": "#1c1917", // Dark text (Stone-900)
        "text-muted": "#78716c", // Muted text (Stone-500)
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        accent: ["Satisfy", "cursive"],
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1280px",
        },
      },
    },
  },
  plugins: [],
}
