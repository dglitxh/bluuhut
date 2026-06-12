import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
import { nextTheme } from "./app/utils/theme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      colors: {
        // Editorial light palette
        paper: "#F6F4EF",
        surface: "#FFFFFF",
        sand: "#EDE8DE",
        ink: {
          DEFAULT: "#0E1C24",
          soft: "#2F4049",
        },
        muted: "#63727A",
        accent: {
          DEFAULT: "#1452CC",
          ink: "#103A8C",
        },
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "3px",
        md: "4px",
        lg: "6px",
      },
      letterSpacing: {
        tightest: "-0.035em",
        tighter: "-0.02em",
      },
      maxWidth: {
        "screen-2xl": "1440px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: nextTheme,
    }),
  ],
};
export default config;
