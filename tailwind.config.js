/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6C5CE7',       // Purple (primary background/header)
                secondary: '#74b9ff',     // Light blue (buttons/text)
                accent: '#fd79a8',        // Pink (highlight)
                muted: '#636e72',         // Gray (text/muted content)
                'base-bg': '#f5f6fa',     // Light background
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                customlight: {
                    "primary": "#6C5CE7",
                    "secondary": "#74b9ff",
                    "accent": "#fd79a8",
                    "neutral": "#2d3436",
                    "base-100": "#ffffff",
                    "base-200": "#f1f2f6",
                    "info": "#0984e3",
                    "success": "#00b894",
                    "warning": "#fdcb6e",
                    "error": "#d63031",
                },
            },
            {
                customdark: {
                    "primary": "#8e44ad",      // Deep purple
                    "secondary": "#3498db",    // Calming blue
                    "accent": "#e84393",       // Brighter pink
                    "neutral": "#1e272e",       // Dark neutral background
                    "base-100": "#121212",      // Main dark background
                    "base-200": "#1e1e1e",      // Slightly lighter dark
                    "info": "#00cec9",          // Soft teal
                    "success": "#2ecc71",       // Clean green
                    "warning": "#f39c12",       // Sharp amber
                    "error": "#e74c3c",         // Vivid red
                },
            },
        ],
        darkTheme: "customdark",
        defaultTheme: "customlight",
    },
};
