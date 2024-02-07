import Image from "next/image";
import Footer from "./Footer";
import Team from "./Team";
import Services from "./Services";

export default function Home() {
  return (
    <main className={``}>
      <div className="">
        <Services />
        <Team />
        <Footer />
      </div>
    </main>
  );
}
