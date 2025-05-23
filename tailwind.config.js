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
                light: {
                    primary: "#6C5CE7",
                    secondary: "#74b9ff",
                    accent: "#fd79a8",
                    neutral: "#2d3436",
                    "base-100": "#ffffff",
                    "base-200": "#f1f2f6",
                    info: "#0984e3",
                    success: "#00b894",
                    warning: "#fdcb6e",
                    error: "#d63031",
                },
            },
            {
                dark: {
                    primary: "#9b59b6",       // Lighter purple
                    secondary: "#5dade2",     // Sky blue
                    accent: "#f06292",        // Soft pink
                    neutral: "#1e272e",        // Navbar background
                    "base-100": "#0f0f0f",     // Main dark background
                    "base-200": "#1a1a1a",     // Slightly lighter dark
                    info: "#1abc9c",           // Teal
                    success: "#2ecc71",        // Clean green
                    warning: "#f39c12",        // Amber
                    error: "#e74c3c",          // Vivid red
                },
            },
        ],
        darkTheme: "dark",
        defaultTheme: "light",
    },
};

/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#6C5CE7',       // Purple (custom primary for Tailwind usage)
//         secondary: '#74b9ff',     // Light blue
//         accent: '#fd79a8',        // Pink
//         muted: '#636e72',         // Gray
//         'base-bg': '#f5f6fa',     // Background
//       },
//     },
//   },
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: [
//       {
//         light: {
//           "primary": "#6C5CE7",
//           "secondary": "#74b9ff",
//           "accent": "#fd79a8",
//           "neutral": "#2d3436",
//           "base-100": "#ffffff",
//           "base-200": "#f1f2f6",
//           "info": "#0984e3",
//           "success": "#00b894",
//           "warning": "#fdcb6e",
//           "error": "#d63031",
//         },
//       },
//       {
//         dark: {
//           "primary": "#9b59b6",       // Custom deep purple
//           "secondary": "#5dade2",     // Soft blue
//           "accent": "#f06292",        // Bright pink
//           "neutral": "#1e272e",       // Navbar/dark card base
//           "base-100": "#0f0f0f",      // Dark background
//           "base-200": "#1a1a1a",      // Slightly lighter
//           "info": "#1abc9c",
//           "success": "#2ecc71",
//           "warning": "#f39c12",
//           "error": "#e74c3c",
//         },
//       },
//     ],
//     darkTheme: "dark",
//     defaultTheme: "light",
//   },
// };
