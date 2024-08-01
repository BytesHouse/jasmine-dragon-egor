import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/ui-kit/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      _1920: { max: "1920px" },
      _1240: { max: "1240px" },
      _1600: { max: "1600px" },
      _1024: { max: "1024px" },
      _768: { max: "768px" },
      _491: { max: "491px" },
      _375: { max: "375px" },
    },
    fontSize: {
      h1: "136px", //"7.594rem",
      h2: "91px", //"5.063rem",
      h3: "60px", //"3.375rem",
      h4: "40px", //"2.25rem",
      h5: "27px", //"1.5rem",
      p1: "18px", //"1rem",
      p2: "14px", //"0.778rem",
      p3: "12px", //"0.6677rem",
      p4: "8px", //"0.444rem",
    },
    fontFamily: {
      // "Nunito-Sans": ["Nunito Sans", "serif"],
      // "Playfair-Display": ["Playfair Display", "serif"],
      "Nunito-Sans": ["var(--font-nunito-sans)"],
      "Playfair-Display": ["var(--font-playfair-display)"],
    },
    colors: {
      "green-bg": "#273E40",
      "green-light": "#2F4A4C",
      blue: "#5E9599",
      "blue-light": "#B5EAEE",
      black: "#2C261F",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        lables: "lables 10s linear infinite alternate",
      },
      keyframes: {
        lables: {
          "0%": { transform: "translateX(120dvw)" },
          "100%": { transform: "translateX(-110%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
