const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx,js,jsx,css,}"],
  //darkMode: false,// media or class
  content: [],
  theme: {
    colors: {
      primary: colors.cyan,
      secondary: colors.emerald,
    },
    extend: {},
  },
  plugins: [],
};
