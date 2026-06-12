import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { industries } from "../utils/data";

export default function Industries() {
  return (
    <section
      id="industries"
      className="border-b border-line bg-sand py-20 sm:py-28"
    >
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              index="03 / 06"
              eyebrow="Industries Served"
              title={
                <>
                  Trusted across the sectors that{" "}
                  <span className="italic text-accent">can’t afford downtime.</span>
                </>
              }
              description="Our methods scale from a single residence to multi-site enterprise portfolios — held to the same engineering standard at every level."
            />
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <ul className="grid grid-cols-1 border-t border-line-strong sm:grid-cols-2">
                {industries.map((ind, i) => (
                  <li
                    key={ind.name}
                    className="group flex items-baseline gap-4 border-b border-line py-5 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6"
                  >
                    <span className="index-num text-xs font-semibold text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                        {ind.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted">{ind.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
