const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      spacing: {
        // 8xl => 1440px
        '8xl': '90rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['iconoir']),
    }),
  ],
}
