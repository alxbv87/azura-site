/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'brand-dark': '#101D35', 
        'brand-accent': '#D4AF37', 
        'brand-light': '#F0F0F0', 
        'brand-muted': '#A9B4C7', 
        'brand-border': 'rgba(255, 255, 255, 0.15)', 
      },
      fontFamily: { 
        'sans': ['Lato', 'sans-serif'], 
        'display': ['Playfair Display', 'serif'], 
      },
    },
  },
  plugins: [],
};

