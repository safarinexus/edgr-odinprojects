/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helv: ['Helvtica', 'sans-serif'], 
      }, 
    },
  }, 
  plugins: ["prettier-plugin-tailwindcss"]
}

