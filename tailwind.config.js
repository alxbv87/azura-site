/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors: {
  brand: "#10B981",       // vibrant green
  "brand-dark": "#1E3A8A", // navy blue
},
      fontFamily: {
        brand: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
