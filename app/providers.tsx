"use client";
import { ColorModeContext, useColorMode } from "./utils/theme";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const colorModeCtx: any = useColorMode();
  return (
    <ColorModeContext.Provider value={colorModeCtx}>
      <NextUIProvider>
        <NextThemesProvider attribute="class">{children}</NextThemesProvider>
      </NextUIProvider>
    </ColorModeContext.Provider>
  );
}

