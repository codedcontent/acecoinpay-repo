import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#025EFE",
        secondary: "#1F2954",
        "verify-blue": "#13A3E8",
        "gray-blue": "#E9EDF1",
        "input-gray": "#FAFAFC",
        "dark-gray": "#B2B6C1",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
