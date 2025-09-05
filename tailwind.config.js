/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#1a1a2e",
        darker: "#16213e",
        light: "#ecf0f1",
        accent: "#3498db",
        accentDark: "#f39c12",
        gray: "#7f8c8d",
        vangogh: {
          blue: "#2c5aa0",
          darkblue: "#1a237e",
          yellow: "#f4d03f",
          purple: "#8e44ad",
          orange: "#e67e22",
          green: "#27ae60",
          brown: "#8b4513",
        },
        artistic: {
          night: "#1a1a2e",
          starry: "#f39c12",
          swirl: "#3498db",
          dream: "#8e44ad",
          canvas: "#2c3e50",
          brush: "#e67e22",
        }
      },
      fontFamily:{
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"]
      },
      animation:{
        roll: "roll 24s linear infinite"
      },
      keyframes:{
        roll:{
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(-100%)"}
        }
      },
      screens:{
        sxl: "1180px",
        // @media (min-width: 1180px){...}
        xs: "480px"
        // @media (min-width: 480px){...}
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
