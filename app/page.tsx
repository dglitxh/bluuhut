"use client";
import { Providers } from "./providers";

export default function Home() {
  return (
    <Providers>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          Bluehut
        </div>
      </main>
    </Providers>
  );
}
