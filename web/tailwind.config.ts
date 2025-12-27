import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#75c201",
                "background-light": "#f7f8f5",
                "background-dark": "#1b230f",
                "card-dark": "#1a2e22",
            },
            fontFamily: {
                display: ["var(--font-space-grotesk)", ...defaultTheme.fontFamily.sans],
                body: ["var(--font-noto-sans)", ...defaultTheme.fontFamily.sans],
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
};
export default config;
