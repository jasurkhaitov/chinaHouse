/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lgx: '1100px',
        lgxx: '1000px',
        smallx: "450px",
        small: "400px",
      },

      colors: {
        purple: "#ff5f65",
        borderLine: "#ff5f65",
        bgCard: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
