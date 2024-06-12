"use client";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

export const useColorMode = () => {
  const isDark = false;
  const userPref = isDark || typeof isDark == undefined ? "dark" : "light";
  const [mode, setMode] = React.useState<"light" | "dark">(userPref);
  const { theme, setTheme } = useTheme();
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        const chMode = mode === "light" ? "dark" : "light";
        localStorage.setItem("mode", chMode);
        setMode(chMode);
      },
    }),
    [mode]
  );

  const getMode = () => mode;

  useEffect(() => {
    const lhmode = localStorage.getItem("mode");
    const w = window.matchMedia("(prefers-color-scheme: dark)");
    if (!lhmode && w.matches) setMode("dark");
    else if (lhmode) setMode(lhmode == "light" ? "light" : "dark");
    else setMode(w.matches ? "dark" : "light");
  }, []);
  setTheme(mode);
  return { colorMode, getMode };
};

export const nextTheme = {
  dark: {
    colors: {
      background: "#00171F",
      foreground: "#ffffff",
      primary: {
        50: "#cffafe",
        100: "#520F83",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#0e7490",
        900: "#164e63",
        DEFAULT: "#00A8E8",
        foreground: "#ffffff",
      },
      secondary: "#25a18e",
      warning: "#d00000",
      focus: "#F182F6",
    },
    layout: {
      disabledOpacity: "0.3",
      radius: {
        small: "4px",
        medium: "6px",
        large: "8px",
      },
      borderWidth: {
        small: "1px",
        medium: "2px",
        large: "3px",
      },
    },
  },
  light: {
    colors: {
      primary: {
        50: "#cffafe",
        100: "#520F83",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#0e7490",
        900: "#164e63",
        DEFAULT: "#0369a1",
        foreground: "#ffffff",
      },
      secondary: "#25a18e",
      warning: "#d00000",
      focus: "#F182F6",
    },
  },
};
