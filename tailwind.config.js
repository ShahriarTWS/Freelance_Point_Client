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
                    "primary": "#FDCB6E",
                    "secondary": "#55efc4",
                    "accent": "#ffeaa7",
                    "neutral": "#dfe6e9",
                    "base-100": "#2d3436",
                    "base-200": "#636e72",
                    "info": "#74b9ff",
                    "success": "#00cec9",
                    "warning": "#fab1a0",
                    "error": "#ff7675",
                },
            },
        ],
        darkTheme: "customdark",      // Used in your <html data-theme="customdark">
        defaultTheme: "customlight",  // Default light theme
    },
}
