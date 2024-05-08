/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  safelist: [
    "bg-sky-500",
    "hover:bg-sky-600",
    "bg-orange-500",
    "hover:bg-orange-600",
    "bg-teal-500",
    "hover:bg-teal-600",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
