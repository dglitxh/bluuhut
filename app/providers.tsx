"use client";
import { ColorModeContext, useColorMode } from "./utils/theme";
import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const { colorModeCtx, mode }: any = useColorMode();
  return (
    <ColorModeContext.Provider value={colorModeCtx}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </ColorModeContext.Provider>
  );
}
