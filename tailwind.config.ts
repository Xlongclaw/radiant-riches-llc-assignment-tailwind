import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ASCENT: "#212731",
        WHITE: "#FFFFFF",
        GREY1: "#FFFFFF",
        GREYBG: "#FBFCFD",
        GREY2: "#4B5665",
        GREYLIGHT1: "#4B5665",
        DARKBLUE1: "#2C384A",
        DARKBLUE2: "#074786",
        BLUE: "#1B88F4",
        LIGHTBLUE: "#F3F9FF",
        LIGHTORANGE: "#FFF4ED",
        RED: "#EF4C5D",
      },
      padding: {
        xl: "300px",
      },
      screens: {
        // NAVIGATION_BAR BREAKPOINTS
        "nav-xxl": "1280px",
        "nav-xl": "960px",
        "nav-lg": "830px",
        "nav-md": "620px",
        "nav-sm": "480px",

        // RATING_CONTAINER BREAKPOINTS
        "rating-xxl": "1396px",
        "rating-xl": "1000px",
        "rating-lg": "830px",
        "rating-md": "640px",
        "rating-sm": "480px",

        // SEARCH CONTAINERS BREAKPOINTS
        "main-c-xxl": "1280px",
        "main-c-xl": "960px",
        "main-c-lg": "830px",
        "main-c-md": "640px",
        "main-c-sm": "480px",
      },
    },
  },
  plugins: [],
};
export default config;
