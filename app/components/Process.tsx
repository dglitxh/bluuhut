import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { processSteps } from "../utils/data";

export default function Process() {
  return (
    <section id="process" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-screen-xl px-6">
        <SectionHeading
          index="04 / 06"
          eyebrow="How We Work"
          title={
            <>
              A disciplined process from{" "}
              <span className="italic text-accent">first call to handover.</span>
            </>
          }
          description="Every engagement follows the same four stages, so you always know what happens next and what it costs."
        />

        <div className="mt-14 grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              key={step.step}
              delay={index * 0.08}
              className="relative border-b border-line py-9 sm:[&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(even)]:pl-8 lg:border-r lg:px-8 lg:last:border-r-0 lg:first:pl-0"
            >
              <span className="font-serif text-5xl font-semibold text-sand [text-shadow:none] lg:text-6xl">
                <span className="text-ink/15">{step.step}</span>
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
