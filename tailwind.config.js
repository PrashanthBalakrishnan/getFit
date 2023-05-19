// prettier.config.js

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                accent100: '#37d72f',
            },
        },
    },
    plugins: [],
}
