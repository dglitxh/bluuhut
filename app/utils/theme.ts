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

  const getMode = () => mode

  useEffect(() => {
    const lhmode = localStorage.getItem("mode");
    const w = window.matchMedia("(prefers-color-scheme: dark)");
    if (!lhmode && w.matches) setMode("dark");
    else if (lhmode) setMode(lhmode == "light" ? "light" : "dark");
    else setMode(w.matches ? "dark" : "light");
  }, []);
  setTheme(mode);
  return {colorMode, getMode};
};

export const nextTheme = {
  dark: {
    colors: {
      background: "#0D001A",
      foreground: "#ffffff",
      primary: {
        50: "#3B096C",
        100: "#520F83",
        200: "#7318A2",
        300: "#9823C2",
        400: "#c031e2",
        500: "#DD62ED",
        600: "#F182F6",
        700: "#FCADF9",
        800: "#FDD5F9",
        900: "#FEECFE",
        DEFAULT: "#DD62ED",
        foreground: "#ffffff",
      },
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
        50: "#3B096C",
        100: "#520F83",
        200: "#7318A2",
        300: "#9823C2",
        400: "#c031e2",
        500: "#DD62ED",
        600: "#F182F6",
        700: "#FCADF9",
        800: "#FDD5F9",
        900: "#FEECFE",
        DEFAULT: "#DD62ED",
        foreground: "#ffffff",
      },
      focus: "#F182F6",
    },
  },
};
