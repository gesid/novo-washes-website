/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'baner-hero': "url(src/assets/imgs/banner-hero-home.svg)" }
    },
  },
  plugins: [],
}