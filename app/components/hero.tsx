import { Button, Link } from "@nextui-org/react";
import React from "react";

export default function Hero() {
  return (
    <div className="h-dvh flex items-center justify-center flex-col p-6">
      <h1 className="text-7xl">Hassle free solutions</h1>
      <br></br>
      <h1 className="text-primary text-bold text-7xl"> at your doorstep </h1>
      <br></br>
      <h3 className="text-xl text-bold">
        We deliver the most innovative and efficient technical solutions at a
        fast pace.
      </h3>
      <br></br>
      <div className="flex gap-4 flex-start">
        <Button as={Link} href="/#pricing" color="secondary" variant="solid">
          <h2 className="font-bold text-white">Get started </h2>
        </Button>
        <Button as={Link} href="/#about" color="secondary" variant="bordered">
          <h2 className="font-bold text-inherit"> Learn more</h2>
        </Button>
      </div>
    </div>
  );
}
