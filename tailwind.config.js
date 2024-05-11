// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1177px',
        },
      },
      colors: {
        'my-pink': '#FB2E86',
        'my-purple': '#7E33E0',
        'my-gray': '#E7E6EF',
        'my-lightpink': '#F2F0FF',
        'my-subText': '#8A8FB9',
        'sectionTitle': '#1A0B5B',
        'productColor': '#F6F7FB',
        'textBlue': '#151875',
        'productHover': '#2F1AC4',
        'my-orange': '#FF9100'
      },
    },
  },
  plugins: [],
};
