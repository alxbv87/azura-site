/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#10B981",       // green
        "brand-dark": "#1E3A8A", // navy
        "brand-light": "#D1FAE5", // light mint
        "brand-muted": "#6EE7B7", // soft green
        "brand-accent": "#D4AF37", // gold
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
