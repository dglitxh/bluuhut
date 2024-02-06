import Image from "next/image";
import Services from "./Services";
import Team from "./Team";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="">
      <div className="">
        Bluehut
        <Services />
        <Team />
        <Footer />
      </div>
    </main>
  );
}
