export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "false",

  theme: {
    extend: {
      colors: {
        primary: "#0E2C75",
        secondary: "#e17509",
        danger: "#e30707",
        gray: "#352d2d",
        success: "#0bab02",
        pink: "#ee26d3",
        "c-blue": "#F0F5FF",
        "c-pink": "#ee26d3",
        "c-blue-b": "#0064C3",
        "c-green": "#F0FFE6",
        "c-green-b": "#39B04A",
        "c-orange": "#FFF0D7",
        "c-orange-b": "#F59B14",
        orange: "#FF9B00",
        "c-slate": "#57B3E1",
      },
    },
    fontSize: {
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "8xl": "6rem",
      "9xl": "7rem",
    },
  },

  plugins: [],
};
module.exports = {
  mode: 'jit', // 👈 Bunu ekle
  // Diğer ayarlar...
}