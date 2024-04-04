// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      mobile: "360px",
      tablet: "768px",
      desktop: "1170px",
    },
    // spacing: {
    //   80: "80px",
    //   100: "100px",
    // },
    extend: {},
  },
  plugins: [],
};
