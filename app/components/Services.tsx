import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { serviceData } from "../utils/data";

export default function Services() {
  return (
    <section id="services" className="border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-screen-xl px-6">
        <SectionHeading
          index="02 / 06"
          eyebrow="Capabilities"
          title={
            <>
              Three disciplines, one{" "}
              <span className="italic text-accent">accountable team.</span>
            </>
          }
          description="From power distribution to network deployment and ongoing facility care, we cover the full lifecycle of the systems that keep your property running."
        />

        <div className="mt-14 grid grid-cols-1 border-t border-line md:grid-cols-3">
          {serviceData.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.08}
              className="group flex flex-col border-b border-line py-9 md:border-b-0 md:px-8 md:py-2 md:[&:not(:first-child)]:border-l md:first:pl-0"
            >
              <div className="flex items-center justify-between">
                <span className="index-num text-sm font-semibold text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-ink transition-colors group-hover:text-accent">
                  {service.icon}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-2xl font-semibold text-ink">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-soft">
                {service.description}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                {service.capabilities.map((cap) => (
                  <li
                    key={cap}
                    className="flex items-start gap-3 text-sm text-ink-soft"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-none bg-accent" aria-hidden />
                    {cap}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
