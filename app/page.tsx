
"use client";
import Hero from "./components/hero";
import MainNav from "./components/nav";
  import Footer from "./components/Footer";
import Team from "./components/Team";
import Services from "./components/Services";
import { Providers } from "./providers";

export default function Home() {
  return (
    <Providers>
      <main className={``}>
        <div className="">
          <MainNav />
          <Hero />
           <Services />
        <Team />
        <Footer />
        </div>
      </main>
    </Providers>

  );
}
