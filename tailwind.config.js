/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'outline': '0 0 6px 2px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}