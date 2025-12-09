/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // nice deep blue
        secondary: "#f3f4f6", // light gray background
      },
    },
  },
  plugins: [],
};