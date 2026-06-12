import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { valueProps } from "../utils/data";

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="relative border-b border-line py-20 sm:py-28">
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Copy */}
          <div className="lg:col-span-7">
            <SectionHeading
              index="01 / 06"
              eyebrow="About BlueHut"
              title={
                <>
                  An engineering partner built for{" "}
                  <span className="italic text-accent">complex, critical work.</span>
                </>
              }
              description="We are a multidisciplinary engineering firm delivering reliable solutions from conceptual design through implementation. Our teams pair deep technical expertise with an uncompromising commitment to safety, quality, and on-time delivery."
            />

            <Reveal delay={0.1}>
              <dl className="mt-12 grid grid-cols-1 border-t border-line sm:grid-cols-2">
                {valueProps.map((v, i) => (
                  <div
                    key={v.title}
                    className="border-b border-line py-6 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="index-num text-xs font-semibold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <dt className="font-serif text-lg font-semibold text-ink">
                        {v.title}
                      </dt>
                    </div>
                    <dd className="mt-2 pl-8 text-sm leading-relaxed text-muted">
                      {v.desc}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Editorial pull-quote + metrics */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <figure className="flex h-full flex-col justify-between bg-ink p-9 text-paper sm:p-10">
              <blockquote>
                <span className="font-serif text-5xl leading-none text-accent" aria-hidden>
                  “
                </span>
                <p className="mt-3 font-serif text-2xl font-medium leading-snug">
                  We don’t just complete projects — we engineer outcomes our
                  clients rely on for years.
                </p>
              </blockquote>

              <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden border-t border-white/15 pt-8">
                {[
                  { k: "12+", v: "Years experience" },
                  { k: "850+", v: "Projects delivered" },
                  { k: "98%", v: "Client retention" },
                  { k: "24/7", v: "Emergency support" },
                ].map((m) => (
                  <div key={m.v} className="py-1">
                    <dt className="font-serif text-3xl font-semibold text-paper">
                      {m.k}
                    </dt>
                    <dd className="mt-1 text-xs uppercase tracking-[0.12em] text-white/55">
                      {m.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
