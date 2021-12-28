const colors = require("tailwindcss/colors");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx,js,jsx,css,}"],
  darkMode: "class", // media or class
  content: [],
  theme: {
    colors: {
      primary: colors.purple,
      secondary: colors.indigo,
      textPrimary: colors.white,
      textSecondary: colors.gray,
      background: colors.gray,
      ...colors,
    },
    fontFamily: {
      sans: ["Poppins", ...fontFamily.sans],
    },
    extend: {
      // spacing: {
      //   '128': '32rem',
      //   '144': '36rem',
      // },
      borderRadius: {
        my: "2rem",
      },
    },
  },
  plugins: [],
};
