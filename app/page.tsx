
"use client";
import Hero from "./components/hero";
import MainNav from "./components/nav";
  import Footer from "./Footer";
import Team from "./Team";
import Services from "./Services";
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
