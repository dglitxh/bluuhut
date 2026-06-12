"use client";
import { useTheme } from "next-themes";

/**
 * Lightweight wrapper around next-themes. The site ships a single,
 * carefully tuned editorial light theme; the toggle is retained for
 * completeness but light is the canonical experience.
 */
export const useColorMode = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const current = theme === "system" ? resolvedTheme : theme;

  const colorMode = {
    toggleColorMode: () => setTheme(current === "dark" ? "light" : "dark"),
  };

  return { colorMode, getMode: () => current ?? "light", isDark: current === "dark" };
};

/* ------------------------------------------------------------------ */
/*  NextUI theme tokens — aligned to the editorial light palette       */
/*  Cobalt accent, ink text, paper surfaces. One restrained accent.    */
/* ------------------------------------------------------------------ */

const accentScale = {
  50: "#eef3fd",
  100: "#d7e3fa",
  200: "#aec6f4",
  300: "#7fa3eb",
  400: "#467ade",
  500: "#1452CC",
  600: "#103fa6",
  700: "#103A8C",
  800: "#0d2e6e",
  900: "#0b2452",
  DEFAULT: "#1452CC",
  foreground: "#ffffff",
};

export const nextTheme = {
  light: {
    colors: {
      background: "#F6F4EF",
      foreground: "#0E1C24",
      content1: "#FFFFFF",
      content2: "#EDE8DE",
      divider: "rgba(14,28,36,0.14)",
      focus: "#1452CC",
      default: {
        100: "#EDE8DE",
        200: "#e2dccf",
        foreground: "#0E1C24",
        DEFAULT: "#EDE8DE",
      },
      primary: accentScale,
      secondary: {
        DEFAULT: "#0E1C24",
        foreground: "#F6F4EF",
      },
      warning: "#B45309",
      danger: "#B91C1C",
      success: "#15803D",
    },
    layout: {
      disabledOpacity: "0.4",
      radius: { small: "2px", medium: "3px", large: "4px" },
      borderWidth: { small: "1px", medium: "1px", large: "2px" },
    },
  },
  dark: {
    colors: {
      background: "#0E1C24",
      foreground: "#F6F4EF",
      content1: "#15262F",
      content2: "#1B2F39",
      divider: "rgba(255,255,255,0.12)",
      focus: "#467ade",
      primary: { ...accentScale, DEFAULT: "#467ade", foreground: "#0E1C24" },
      secondary: {
        DEFAULT: "#F6F4EF",
        foreground: "#0E1C24",
      },
      warning: "#f59e0b",
      danger: "#ef4444",
    },
    layout: {
      radius: { small: "2px", medium: "3px", large: "4px" },
      borderWidth: { small: "1px", medium: "1px", large: "2px" },
    },
  },
};
