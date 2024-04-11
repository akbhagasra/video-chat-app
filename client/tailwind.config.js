/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                px: "1px",
                "2px": "2px",
                "350px": "350px",
            },
            width: {
                "500px": "500px",
            },
        },
    },
    plugins: [],
};
