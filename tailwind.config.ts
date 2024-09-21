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

      colors: {

        'pacificblue': '#2A9FC5',
        'darkblue': '#076B91',
        'pacificred': '#C52A5F',
        'darkred' : '#910734',
        'pacificgreen' : '#7BC52A',
        'darkgreen' : '#3D9107',

      },

      keyframes: {
        wiggle: {
            '0%, 100%': {
                transform: 'rotate(-1deg)'
            },
            '50%': {
                transform: 'rotate(1deg)'
            },
        }
      },
      animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
          
      }
    },
  },
  plugins: [],

};

export default config;
