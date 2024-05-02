/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Lato', 'sans-serif'],
        'unica': ['Promt', 'sans-serif'],
    },
      colors: {
        grå: {
          50: "#DBDADA",
          100: "#B7B5B5",
          200: "#94908F",
          300: "#706B6A",
          400: "#4C4645",
          500: "#3D3837",
          600: "#2E2A29",
          700: "#1E1C1C",
          800: "#0F0E0E",
        },

        hvid: {
          50: "#FEFEFD",
          100: "#FDFDFC",
          200: "#FCFBFA",
          300: "#FBFAF9",
          400: "#FAF9F7",
          500: "#C8C7C6",
          600: "#969594",
          700: "#646463",
          800: "#323231",
        },

        gul: {
          50: "#FFF9D6",
          100: "#FFF3AD",
          200: "#FFEC83",
          300: "#FFE65A",
          400: "#FFE031",
          500: "#CCB327",
          600: "#99861D",
          700: "#665A14",
          800: "#332D0A",
        },

        ctagrøn: {
          50: "#D7EDF1",
          100: "#AEDBE2",
          200: "#86C8D4",
          300: "#5DB6C5",
          400: "#35A4B7",
          500: "#2A8392",
          600: "#20626E",
          700: "#154249",
          800: "#0B2125",
        },
      },
    },
  },
};