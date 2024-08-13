/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      LatoFont: ["var(--LatoFont)"],
      JosefinFont: ["var(--JosefinFont)"],
    },
    extend: {},
  },
  plugins: [],
};
