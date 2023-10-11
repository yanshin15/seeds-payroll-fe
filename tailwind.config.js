/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightcream: "#E9E5D6",
        lightgreen: "#ACB992",
        darkgreen: "#464E2E",
        darkbrown: "#362706",
      },
    },
  },
  plugins: [],
};
