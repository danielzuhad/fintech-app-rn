/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E2022",
        foreground: "#ffffff",
        secondary: "#C9D6DF",
        danger: "#ba1a1a",
        background: "#F5F5F7",
        backgroundForeground: "#171c1f",
        outline: "#52616B",
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
