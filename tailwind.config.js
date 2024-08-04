/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'up-bg': "url('src/assets/MainPage/BG up .svg')",
        'big-bg': "url('src/assets/MainPage/Banner Big.svg')",
        'down-bg': "url('src/assets/MainPage/BG.svg')",

        'avocado-bg': "url('src/assets/BannerInfo/Avocado.svg')",
        'meat-bg': "url('src/assets/BannerInfo/Meat.svg')",
        'fruit-bg': "url('src/assets/BannerInfo/Fruit.svg')",

        'discount-bg': 'url(/src/assets/MainPage/Discount Banner.png)',

        'piece-orange-bg': "url('/src/assets/LatestNews/piece orange.svg')",
        'egg-bg': "url('/src/assets/LatestNews/egg.svg')",
        'salad-bg': "url('/src/assets/LatestNews/salad.svg')",

        'addToWishList-bg':
          "url('/src/assets/products/PopularProducts/Add To wishlist.svg')",
        'quickView-bg':
          "url('/src/assets/products/PopularProducts/Quick View.svg')",

        'insta-bg': "url('/src/assets/FollowBlock/Insta.svg')",
        'tomato-bg': "url('/src/assets/FollowBlock/tomat.svg')",

        'banner-categories-bg':
          "url('/src/assets/AllCategories/Breadcrumbs.png')",
      },
      colors: {
        'gray-opacity': 'rgba(102, 102, 102)',
        'green-lime': 'rgba(0,197,0)',
        'dark-green': 'rgba(44, 116, 47)',
      },
    },
  },
  plugins: [],
};
