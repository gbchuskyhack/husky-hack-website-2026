/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ["var(--font-vt323)", "serif"],
                mono: ["var(--font-chivo-mono)", "monospace"],
                rethink: ["var(--font-rethink-sans)", "sans-serif"],
                instrument: ["var(--font-instrument-sans)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
