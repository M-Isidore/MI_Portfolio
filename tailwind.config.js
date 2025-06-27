/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      brown: "#53423e",
      lightBrown: "#645550",
      darkBrown: "#2c2523",
      black: "#1e1917",
      white: "#f1e1d9",
      cyan: "#15dfe0",
      lightCyan: "#88e5fe",
      darkCyan: "#009fb3",
      orange: "#fb9710",
      lightOrange: "#fac27b",
      darkOrange: "#d28422",
      grey: "#626965",
      lightGrey: "#978580",
      darkGrey: "#3f4441",
    },
    extend: {
      boxShadow: {
        cyaShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206,220, 0.5)",
        orangeMediumShadow: "10px 10px 200px 150px rgba(240, 169, 79)",
      },
    },
    fontFamily: {
      body: ["Josefin sans"],
      special: ["Roboto"],
    },
  },
  plugins: [],
};
