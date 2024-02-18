/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sdv: "350px",
            },
            colors: {
                primary: "#061429",
                secondary: "#C8B16F",
            },
            fontFamily: {
                po: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
