/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        primary: "#C92F27",
        secondary: "#FDB713",
        tertiary: "#FAED10",

        hoverPrimary: "#B42821",
        hoverSecondary: "#F79A09",
        hoverTertiary: "#ead408",

        backgroundblur: "#3D3D3D",
      },

      fontSize: {
        heading: "3.812rem",
        headingsec: "3.062rem",
        subheading: "2.438rem",
        subheadingsec: "1.938rem",
        title: "1.562rem",
        titlesec: "1.25rem",
        body: "1rem",
        captions: "0.812rem",
        footnote: "0.625rem",
      },
    },
    fontFamily: {
      source: ["Source Sans Pro", "sans-serif"],
    },
  },
  plugins: [],
};
