"use client";
import Hero from "./components/hero";
import MainNav from "./components/nav";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Services from "./components/Services";
import { Providers } from "./providers";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Industries from "./components/Industries";
import Process from "./components/Process";

export default function Home() {
  return (
    <Providers>
      <MainNav />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Industries />
        <Process />
        <Team />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </Providers>
  );
}
