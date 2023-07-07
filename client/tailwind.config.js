/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

   // specify parent colors in tailwind css
      colors:{
        'primary': "#1476ff",
        'secondary': "#f3f5ff",
        'light': "#f9faff",
      }
    },
  },
  plugins: [],
}

