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
        "banner-hero-home-quemSomos": "url(src/assets/imgs/banner-hero-home-quemSomos.png)",
        'banner-hero-quemSomos': "url(src/assets/imgs/banner-hero-quemSomos.png)",
        "banner-hero-washes2024": "url(src/assets/imgs/banner-hero-home-washes2024.png)",
        // Altere o caminho da nova foto do local do próximo evento abaixo
        "banner-hero-imagembannerWASHES202*":"url(src/assets/imgs/banner-hero-imagembannerWASHES2024.png)",
        "feed-insta-1": "url(src/assets/feedInstaImages/img001.png)",
        "feed-insta-2": "url(src/assets/feedInstaImages/img002.png)",
        "feed-insta-3": "url(src/assets/feedInstaImages/img003.png)",
        "feed-insta-4": "url(src/assets/feedInstaImages/img004.png)",
        "feed-insta-5": "url(src/assets/feedInstaImages/img005.png)",
      }
    },
  },
  plugins: [],
}