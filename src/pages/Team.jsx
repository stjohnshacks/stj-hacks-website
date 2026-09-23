import React from "react";
import { Linkedin, Globe, Github } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal, { SectionLabel } from "@/components/Reveal";
import { team } from "@/data/site";

export default function Team() {
  return (
    <>
      <PageHero
        index="07"
        label="Team"
        title={<>THE PEOPLE<br /><span className="text-sju-red">BEHIND THE BUILD.</span></>}
        techLine="{ organizers · 2027 }"
      >
        <p className="text-lg text-sju-grey max-w-xl">
          The students who plan, build, and run St. John's Hacks.
        </p>
      </PageHero>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="01" className="mb-12">Organizing Team</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-sju-n3 border border-sju-n3">
            {team.map((member, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <div className="group bg-white p-8 h-full flex flex-col hover:bg-sju-n1 transition-colors">
                  <div className="relative aspect-square mb-6 bg-sju-void overflow-hidden flex items-center justify-center">
                    {member.image ? (
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="font-mono text-6xl font-bold text-sju-red/40">
                        {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                    )}
                    <div className="absolute top-3 left-3 font-mono text-xs text-sju-red">0{(i + 1).toString().padStart(2, "0")}</div>
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-1">{member.name}</h3>
                  <div className="font-mono text-xs uppercase tracking-[0.15em] text-sju-red mb-3">{member.role}</div>
                  {member.bio && <p className="text-sm text-sju-grey leading-relaxed mb-4 flex-1">{member.bio}</p>}
                  <div className="flex gap-2 mt-auto">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center border border-sju-n3 hover:bg-sju-red hover:border-sju-red hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.portfolio && (
                      <a href={member.portfolio} target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="w-9 h-9 flex items-center justify-center border border-sju-n3 hover:bg-sju-red hover:border-sju-red hover:text-white transition-colors">
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 flex items-center justify-center border border-sju-n3 hover:bg-sju-red hover:border-sju-red hover:text-white transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-10 font-mono text-xs uppercase tracking-[0.15em] text-sju-grey">
              Organizer details and photos update as the team is confirmed. Want to join? Reach out via the footer.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}