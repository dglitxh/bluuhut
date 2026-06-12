import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface Member {
  name: string;
  role: string;
  description: string;
}

const teamMembers: Member[] = [
  {
    name: "Raphael Kwadwo Aninakwa",
    role: "Managing Director",
    description:
      "Raphael leads BlueHut’s strategic direction with over a decade of experience across electrical and telecom engineering. He sets the standard for technical rigour, safety, and the long-term reliability our clients depend on.",
  },
  {
    name: "Kaytee",
    role: "Chief Operations Officer",
    description:
      "Kaytee oversees day-to-day delivery, bringing nine years of operations experience to scheduling, quality assurance, and field execution. He keeps every project on scope, on budget, and on time.",
  },
];

function monogram(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function TeamMember({ member, index }: { member: Member; index: number }) {
  return (
    <Reveal
      delay={index * 0.08}
      className="group flex flex-col border-b border-line py-9 md:[&:nth-child(odd)]:border-r md:[&:nth-child(odd)]:pr-10 md:[&:nth-child(even)]:pl-10"
    >
      <div className="flex items-center gap-5">
        <span className="flex h-16 w-16 flex-none items-center justify-center bg-ink font-serif text-xl font-semibold text-paper">
          {monogram(member.name)}
        </span>
        <div>
          <h3 className="font-serif text-xl font-semibold text-ink">
            {member.name}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            {member.role}
          </p>
        </div>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-soft">
        {member.description}
      </p>
    </Reveal>
  );
}

export default function Team() {
  return (
    <section id="team" className="border-b border-line bg-sand py-20 sm:py-28">
      <div className="mx-auto max-w-screen-xl px-6">
        <SectionHeading
          index="05 / 06"
          eyebrow="Leadership"
          title={
            <>
              The people{" "}
              <span className="italic text-accent">accountable for the work.</span>
            </>
          }
          description="A hands-on leadership team that stays close to every engagement — from first scope to final commissioning."
        />

        <div className="mt-14 grid grid-cols-1 border-t border-line md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <TeamMember key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
