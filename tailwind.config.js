/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#667085",
        gray1: "#808080",
        gray2: "#475467",
        gray3: "#F6F6F7",
        gray4: "#74777F",
        white1: "#F2F4F7",
        white2: "#EAFAFE",
        white3: "#D0D5DD",
        white4: "#FAFAFA",
        carrot: "#FF5613",
        blue: "#4B69FD",
        black1: "#101828",
        black2: "#344054",
        red: "#E72A8B",
      },
      height: {
        18: "4.5rem",
      },
      screens: {
        smaller: "25rem",
        lg: "80em",
        larger: "88rem",
      },
      fontSize: {
        "7.5xl": "5rem",
        smaller: "0.75rem",
      },
    },
  },
  plugins: [],
};
