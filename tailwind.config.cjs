/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        background: '#0e7490',
        myprimary: {
          DEFAULT: '#edb637',
          700: '#D99C31',
          800: '#E08831'
        },
        mysecondary: {
          DEFAULT: '#041F21'
        }
      },
      fontFamily: {
        fbase: ['Port Lligat Sans', 'sans-serif'],
        fheading: ['Libre Baskerville', 'serif']
      }
    }
  }
}
// eslint-disable-next-line capitalized-comments
/*
 * tailwind.config.cjs;
 */
