import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": {
            transform: "rotate(-1deg)",
          },
          "50%": {
            transform: "rotate(1deg)",
          },
        },
        cardflip: {
          "0%": {
            content: "?",
            transform: "rotateY(-180deg)",
          },
          "100%": {
            transform: "rotateY(0deg)",
          },
        },
        showThenHide: {
          "0%": {
            opacity: "1",
          },
          "99%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
            position: "absolute",
          },
        },
        hideThenShow: {
          "0%": {
            opacity: "0",
            position: "absolute",
          },
          "99%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
            position: "block",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        cardflip: "cardflip .5s ease-in-out",
        showThenHide: "showThenHide .25s forwards",
        hideThenShow: "hideThenShow .25s forwards",
      },
    },
  },

  plugins: [],
};

export default config;
