/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.tsx'],
    theme: {
        // Font tokens
        fontSize: {
            sm: 12,
            md: 14,
            lg: 16,
        },
        lineHeight: 1.4,
        // Color tokens
        colors: {
            transparent: "transparent",
            black: "#000",
            white: "#FFF",

            gray: {
                100: "#F2F2F2",
                200: "#D9D9D9",
                300: "#808080",
                400: "#333",
                500: "#262626",
                600: "#1A1A1A",
                700: "#0D0D0D",
            },

            purple: "#8284FA",
            "purple-dark": "#5E60CE",

            blue: "#4EA8DE",
            "blue-dark": "#1E6F9F",

            danger: "#E25858",
        },
        extend: {
            fontFamily: {
                sans: 'Inter, sans-serif',
            },
        },
    },
    plugins: [],
}