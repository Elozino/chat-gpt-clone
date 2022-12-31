/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appBg: "#282c34",
        appDarkBg: "#202123",
        inputBg: "#40414f",
        light: "rgba(255, 255, 255, 0.1)",
        gptBg: "#0da37f",
      },
    },
  },
  plugins: [],
};
