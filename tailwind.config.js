/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3a608f",
        foreground: "#ffffff",
        secondary: "#266489",
        danger: "#ba1a1a",
        background: "#f6fafe",
        backgroundForeground: "#171c1f",
        outline: "#73777f",
      },
      fontFamily: {
        poppins: [
          "PoppinsRegular",
          "PoppinsBold",
          "PoppinsItalic",
          "PoppinsMedium",
          "PoppinsLight",
          "PoppinsSemiBold",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
