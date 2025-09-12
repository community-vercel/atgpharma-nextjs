const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        iphone: "55rem",
      },
      fontSize: {
        xxs: "0.5rem",
      },
      lineHeight: {
        12: "2.7rem",
      },
      zIndex: {
        "-10": "-10",
      },
      fontFamily: {
        sans: ["Metropolis", ...defaultTheme.fontFamily.sans],
        copy: ["Graphik", ...defaultTheme.fontFamily.sans],
      },
      margin: {
        "-1rem": "-1rem"
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          light: "#41b6e6",
          normal: "#219ede",
          dark: "#0086d6",
          extraDark: "#0076bd",
        },
        footerBlue: "#2197f3",
        atgBlue: "#0086d6",
        buttonStart: "#35abea",
        atgLightBlue: "#41b6e6",
        cardGray: "#f5f5f5",
        bamboraPurple: "#664C8E",
      },
      backgroundImage: (theme) => ({
        navBar:
          "linear-gradient(175deg, #41b6e6 28%, #219ede 57%, #0086d6 72%)",
        card: "linear-gradient(133deg, #41b6e6 2%, #0d83da 100%)",
        button: "linear-gradient(102deg, #32aae2 5%, #0086d6 94%)",
      }),
      screens: {
        print: { raw: "print" },
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
      display: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
