/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    plugins: [],
    theme: {
        extend: {
            colors: {
                'my-background': '#0e7490',
                'my-primary': '#edb637',
                'my-primary-700': '#D99C31',
                'my-primary-800': '#E08831',
                'my-secondary-900': '#041F21',
            },
            fontFamily: {
                fbase: ['Port Lligat Sans', 'sans-serif'],
                fheading: ['Libre Baskerville', 'serif'],
            },
        },
    },
}
// eslint-disable-next-line capitalized-comments
/*
 * tailwind.config.cjs;
 */
