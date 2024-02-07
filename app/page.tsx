import Image from "next/image";
import Footer from "./Footer";
import Team from "./Team";
import Services from "./Services";

export default function Home() {
  return (
    <main className={``}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Services />
        <Team />
        <Footer />
      </div>
    </main>
  );
}
