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
      },
      padding: {
        xl: "300px",
      },
    },
  },
  plugins: [],
};
export default config;
