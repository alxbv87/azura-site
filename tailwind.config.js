/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0A2342',
        'brand-navy': '#031424',
        'brand-accent': '#C0A062', // A sophisticated gold
        'brand-light-bg': '#F7F9FB',
        'brand-text-dark': '#1D242B',
        'brand-text-light': '#5A6470',
      },
      fontFamily: {
        'sans': ['var(--font-inter)'],
        'serif': ['var(--font-lora)'],
      },
    },
  },
  plugins: [],
};

