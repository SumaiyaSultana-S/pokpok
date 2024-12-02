/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dm:'DM Sans, sans-serif'
      },
      boxShadow:{
        shadow:"0 10px 55px rgba(0,0,0,0.25)"
      }
    },
  },
  plugins: [],
}