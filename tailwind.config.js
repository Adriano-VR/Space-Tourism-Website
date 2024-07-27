/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        headerColor: "rgba(255, 255, 255, 0.05)"
      }
    },fontFamily:{
      bellefair: "Bellefair",
      Barlow:"barlow",
      Barlow_Condensed:"Barlow Condensed",
    }
  },
  plugins: [],
}