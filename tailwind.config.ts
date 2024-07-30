import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D2DBEF",
          200: "#A5B6DF",
          300: "#7892CE",
          400: "#4B6EBE",
          500: "#E6F0FF",
          600: "#365396",
          700: "#263A69", // palette
          800: "#16213C",
          900: "#05080F"
        },
        secondary: {
          100: "#F2F3F7",
          200: "#CDD1E0",
          300: "#A7AEC8",
          400: "#838DB1",
          500: "#6875A1",
          600: "#4F597D",
          700: "#373E58", //palette
          800: "#1F2332",
          900: "#08090D",
        },
        white: {
          100: "#EDECEA", //white platinum
          200: "#E8E3DD", //beige platinum
          300: "#DCDCDA", //platinum
          400: "#D3D2CE",
          500: "#C4C4C4",
          600: "#B1B1B1",
          700: "#8D8D8D",
          800: "#4F4F4F",
          900: "#000000",
        }
      }
    },
  },
  plugins: [],
};
export default config;
