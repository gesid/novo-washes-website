/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        "banner-hero": "url(src/assets/imgs/banner-hero-home.svg)",
        "banner-hero-quemSomos": "url(src/assets/imgs/banner-hero-home-quemSomos.png)",
        "banner-hero-washes2024": "url(src/assets/imgs/banner-hero-home-washes2024.png)", }
    },
  },
  plugins: [],
}