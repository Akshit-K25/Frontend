/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line to scan all components
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      opacity: ['group-hover'],
      scale: ['group-hover'],
    },
  },
};