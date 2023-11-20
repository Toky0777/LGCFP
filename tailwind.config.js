const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'Best': 'Barlow Condensed',
      'Raleway': 'Raleway, sans-serif'
    },
    extend: {},
  },
  plugins: [],
});