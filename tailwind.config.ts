import plugin from "tailwindcss/plugin";

const BASE_FONT_SIZE = {
  header: {
    lineHeight: "140%",
    fontWeight: 500,
  },
  body: {
    lineHeight: "150%",
    fontWeight: 400,
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{js,ts,jsx,mdx}",
  ],
  theme: {
    screens: {
      "4xl": { max: "1600px" },
      "3xl": { max: "1440px" },
      "2xl": { max: "1366px" },
      xl: { max: "1280px" },
      lg: { max: "1024px" },
      md: { max: "768px" },
      sm: { max: "640px" },
      xs: { max: "376px" },
      se: { max: "340px" },
    },

    extend: {
      fontFamily: {
        sans: ['"Inter", sans-serif'],
      },
      fontSize: {
        "header-1": ["64px", BASE_FONT_SIZE.header],
        "header-2": ["48px", BASE_FONT_SIZE.header],
        "header-3": ["32px", BASE_FONT_SIZE.header],
        "header-4": ["24px", BASE_FONT_SIZE.header],
        "header-5": ["20px", BASE_FONT_SIZE.header],
        "header-6": ["16px", BASE_FONT_SIZE.header],
        "header-7": ["14px", BASE_FONT_SIZE.header],
        "body-24": ["24px", BASE_FONT_SIZE.body],
        "body-20": ["20px", BASE_FONT_SIZE.body],
        "body-18": ["18px", BASE_FONT_SIZE.body],
        "body-16": ["16px", BASE_FONT_SIZE.body],
        "body-14": ["14px", BASE_FONT_SIZE.body],
        "body-12": ["12px", BASE_FONT_SIZE.body],
        "body-10": ["10px", BASE_FONT_SIZE.body],
        se: ["0.625rem", { lineHeight: "1.5" }],
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.5" }],
      },
      colors: {
        primary: {
          100: "#e7f1ef",
          200: "#d0e3de",
          300: "#b8d5ce",
          400: "#a1c7bd",
          500: "#89b9ad", //MAIN
          600: "#6e948a",
          700: "#526f68",
          800: "#374a45",
          900: "#1b2523",
        },
        secondary: {
          100: "#fffbf7",
          200: "#fff7ef",
          300: "#fff3e8",
          400: "#ffefe0",
          500: "#ffebd8", //MAIN
          600: "#ccbcad",
          700: "#998d82",
          800: "#665e56",
          900: "#332f2b",
        },
        milkPink: {
          500: "#ffc5c5",
        },
        danger: {
          500: "#ff0000",
        },
        warn: {
          500: "#d6d037",
        },
        success: {
          500: "#5bbb4c",
        },
        muted: {
          500: "#6e6e6e",
        },
        stroke: {
          500: "#a0aac3",
        },
      },
      spacing: {
        "header-height": "var(--header-height)",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        // ทำให้มี space ซ้ายขวา
        ".main-space-x": {
          padding: `0px ${theme(`spacing.16`)}`,
          "@media (max-width: 1280px)": {
            padding: `0px ${theme(`spacing.12`)}`,
          },
          "@media (max-width: 768px)": {
            padding: `0px ${theme(`spacing.8`)}`,
          },
          "@media (max-width: 640px)": {
            padding: `0px ${theme(`spacing.4`)}`,
          },
        },

        // Base Container
        ".container": {
          margin: "0 auto",
          maxWidth: "1280px",
          "@media (max-width: 1280px)": {
            maxWidth: "100%",
          },
        },
      });
    }),
  ],
};
