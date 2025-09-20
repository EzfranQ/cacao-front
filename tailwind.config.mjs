/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: "#1e40af", // azul personalizado
                    light: "#3b82f6",
                },
            },
        },
    },
    plugins: [],
};