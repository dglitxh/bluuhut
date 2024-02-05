"use client";
import MainNav from "./components/nav";
import { Providers } from "./providers";

export default function Home() {
  return (
    <Providers>
      <main className={` `}>
        <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
          <MainNav />
        </div>
      </main>
    </Providers>
  );
}
