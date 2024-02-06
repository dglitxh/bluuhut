"use client";
import Hero from "./components/hero";
import MainNav from "./components/nav";
import { Providers } from "./providers";

export default function Home() {
  return (
    <Providers>
      <main className={``}>
        <div className="">
          <MainNav />
          <Hero />
        </div>
      </main>
    </Providers>
  );
}
