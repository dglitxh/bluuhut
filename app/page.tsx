
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
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"; 
config.autoAddCss = false;

export default function Home() {
  return (
    <Providers>
      <main className={``}>
        <div className="">
          <MainNav />
          <Hero />
          <AboutUs />
           <Services />
        <Team />

        <Pricing />
        <Contact />
        <Footer />
        </div>
      </main>
    </Providers>

  );
}
