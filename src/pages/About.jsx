import React from "react";
import PageHero from "@/components/PageHero";
import Reveal, { SectionLabel } from "@/components/Reveal";
import Button from "@/components/ui/stj-button";
import { site, pastEvents } from "@/data/site";

const timeline = [
  {
    year: "2025",
    title: "THE BEGINNING",
    body: "The inaugural St. John's Hacks launched as a 12-hour hackathon focused on technology, AI/ML, cybersecurity, software development, collaboration, and student innovation.",
  },
  {
    year: "2026",
    title: "BIGGER",
    body: "The event expanded into a two-day, roughly 30-hour hackathon with sponsor-backed challenges, workshops, mentorship, projects, judging, and 60+ students involved.",
  },
  {
    year: "2027",
    title: "WHAT'S NEXT",
    body: "St. John's Hacks continues growing into a larger multi-day student technology experience.",
  },
];

const beginners = [
  "YOU DON'T NEED A STARTUP.",
  "YOU DON'T NEED A PERFECT IDEA.",
  "YOU DON'T NEED YEARS OF EXPERIENCE.",
];

export default function About() {
  return (
    <>
      <PageHero
        index="01"
        label="About"
        title={<>BUILT BY<br /><span className="text-sju-red">STUDENTS.</span><br />FOR STUDENTS.</>}
        techLine="{ student-led · st. john's university }"
      >
        <p className="text-lg sm:text-xl text-sju-grey max-w-2xl leading-relaxed">
          St. John's Hacks is St. John's University's student-led hackathon built to give students a place to experiment, create, learn, collaborate, and turn ideas into real technology.
        </p>
      </PageHero>

      {/* WHY WE EXIST */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="02" className="mb-10">Mission</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-5">
              <h2 className="display-text text-5xl sm:text-6xl lg:text-7xl">WHY WE<br /><span className="text-sju-red">EXIST.</span></h2>
            </Reveal>
            <div className="lg:col-span-6 lg:col-start-7 space-y-6">
              <Reveal delay={0.1}>
                <p className="text-lg text-sju-grey leading-relaxed">
                  St. John's Hacks exists to make technical building accessible to students regardless of prior experience.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <ul className="space-y-3 font-mono text-sm text-sju-void">
                  {[
                    "Beginners belong here.",
                    "Students learn by building.",
                    "Collaboration matters.",
                    "Projects don't need to be perfect.",
                    "Hackathons open doors — to internships, research, startups, and new skills.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3 border-l-2 border-sju-red pl-4 py-1">
                      <span className="text-sju-red">›</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* BEGINNERS BELONG HERE */}
      <section className="py-24 lg:py-32 bg-sju-void text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="03" dark className="mb-12">Beginners Belong Here</SectionLabel>
          <div className="space-y-2">
            {beginners.map((line, i) => (
              <Reveal key={line} delay={i * 0.08}>
                <h3 className="display-text text-4xl sm:text-6xl lg:text-7xl text-white/80">{line}</h3>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <h3 className="display-text text-5xl sm:text-7xl lg:text-8xl text-sju-red mt-4">JUST START.</h3>
            </Reveal>
          </div>
          <Reveal delay={0.35}>
            <p className="mt-10 text-lg text-white/60 max-w-xl">
              Students from every major and experience level are welcome. You don't need to be an expert — you just need to start.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OFFICIAL BRAND / JOHNNY */}
      <section className="py-20 lg:py-28 bg-sju-n1 border-y border-sju-n3">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <Reveal className="lg:w-2/5 flex justify-center">
              <div className="bg-white p-6 sm:p-8 border border-sju-n3">
                <img src={site.logo} alt="St. John's Hacks official logo — Johnny Thunderbird framed in curly braces above the St. John's Hacks wordmark" className="w-full max-w-[320px] h-auto object-contain" />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="lg:w-3/5">
              <SectionLabel index="—" className="mb-4">The Mark</SectionLabel>
              <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl mb-4">JOHNNY<br /><span className="text-sju-red">THUNDERBIRD.</span></h2>
              <p className="text-lg text-sju-grey leading-relaxed max-w-lg">
                Johnny Thunderbird is the spirit of St. John's Hacks — framed in code, built for builders. The official mark carries the St. John's Hacks identity across every edition.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OUR STORY timeline */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="04" className="mb-12">Our Story</SectionLabel>
          <div className="relative">
            {/* red thread */}
            <div className="absolute left-0 sm:left-1/3 top-0 bottom-0 w-px bg-sju-red/30" />
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.1}>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 relative">
                    <div className="sm:text-right">
                      <div className="display-text text-6xl sm:text-7xl text-sju-red">{item.year}</div>
                    </div>
                    <div className="sm:col-span-2 sm:pl-12 relative">
                      <span className="absolute -left-[5px] sm:-left-[9px] top-3 w-2.5 h-2.5 bg-sju-red rounded-full" />
                      <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3">{item.title}</h3>
                      <p className="text-sju-grey leading-relaxed max-w-lg">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="mt-16">
              <Button to="/past-events" variant="outline">Explore Past Events</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}