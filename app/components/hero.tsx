"use client";
import { Link } from "@nextui-org/react";
import { motion, useReducedMotion } from "framer-motion";
import React from "react";

const stats = [
  { idx: "01", value: "12+", label: "Years of field experience" },
  { idx: "02", value: "850+", label: "Projects delivered" },
  { idx: "03", value: "24/7", label: "Emergency response" },
  { idx: "04", value: "100%", label: "Licensed & insured" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="relative mx-auto max-w-screen-xl px-6 pt-36 pb-16 sm:pt-44 sm:pb-20">
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Eyebrow row */}
          <motion.div
            variants={item}
            className="flex items-center gap-4 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-muted"
          >
            <span className="text-accent">Electrical · Telecom · Integrated Engineering</span>
            <span className="hidden h-px flex-1 bg-hairline sm:block" />
            <span className="hidden sm:block">Est. 2012 — Canada</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-10 max-w-5xl font-serif text-[2.75rem] font-semibold leading-[1.04] tracking-tightest text-ink sm:text-6xl lg:text-[5rem]"
          >
            Power, telecom, and infrastructure that{" "}
            <span className="italic text-accent">performs for decades.</span>
          </motion.h1>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12">
            <motion.div variants={item} className="lg:col-span-7">
              <div className="rule-accent" />
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-soft text-pretty">
                BlueHut Solutions designs, builds, and maintains the critical
                systems behind homes, businesses, and enterprises — engineered to
                code, delivered on schedule, and built to last.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2.5 bg-ink px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-paper transition-colors hover:bg-accent"
                >
                  Start a project <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/#services"
                  className="link-underline text-sm font-semibold uppercase tracking-[0.14em] text-ink"
                >
                  View capabilities
                </Link>
              </div>
            </motion.div>

            {/* Stats column */}
            <motion.dl
              variants={item}
              className="grid grid-cols-2 self-end border-t border-line lg:col-span-5 lg:border-t-0 lg:border-l lg:pl-10"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border-b border-line px-1 py-6 sm:px-2 sm:py-7"
                >
                  <div className="index-num text-[0.625rem] font-semibold uppercase tracking-[0.2em] text-muted">
                    {s.idx}
                  </div>
                  <dt className="mt-2 font-serif text-4xl font-semibold text-ink sm:text-5xl">
                    {s.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-snug text-muted">{s.label}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
