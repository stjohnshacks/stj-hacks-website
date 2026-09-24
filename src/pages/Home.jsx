import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site, currentEvent, pastEvents, projects } from "@/data/site";
import Button from "@/components/ui/stj-button";
import Reveal, { SectionLabel, Cursor } from "@/components/Reveal";
import Mascot from "@/components/Mascot";
import CountUp from "@/components/CountUp";

const event2026 = pastEvents.find((e) => e.year === 2026);
const event2025 = pastEvents.find((e) => e.year === 2025);

const experiences = [
  { word: "BUILD.", desc: "Turn ideas into working technology." },
  { word: "LEARN.", desc: "Explore new tools and attend workshops." },
  { word: "CONNECT.", desc: "Meet students, mentors, engineers, and industry professionals." },
  { word: "SHIP.", desc: "Walk away with something real that you can show people." },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <NextEvent />
      <Experience />
      <PastEventsPreview />
      <ProjectsPreview />
      <SponsorPreview />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-sju-void text-white overflow-hidden flex items-center">
      <div className="absolute inset-0 grid-bg-dark opacity-40" />
      {/* atmospheric image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://media.base44.com/images/public/6ab416dccb1b0eada1dceb29/5f0d83d50_generated_493bca06.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sju-void via-sju-void/80 to-sju-void/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-sju-void via-transparent to-sju-void/60" />
      </div>

      {/* Johnny between braces */}
      <div className="absolute right-4 sm:right-10 lg:right-20 top-1/2 -translate-y-1/2 hidden md:block opacity-70">
        <Mascot className="w-40 lg:w-64 h-auto" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-sju-red mb-6"
        >
          St. John's University Presents
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="display-text text-[18vw] sm:text-[15vw] lg:text-[12vw] leading-[0.85]"
        >
          ST. JOHN'S<br />
          <span className="text-sju-red">HACKS</span>
          <span className="text-white/30 text-[0.4em] align-top ml-2 font-mono">'27</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm"
        >
          <span className="text-sju-red">&#123; build something real &#125;</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80">{currentEvent.season}</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80">{currentEvent.location}</span>
          <Cursor />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button to="/2027" variant="primary">Apply</Button>
          <Button to="/2027" variant="outlineLight">Explore 2027</Button>
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="block w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionLabel index="01" className="mb-6">Welcome</SectionLabel>
            <Reveal>
              <h2 className="display-text text-6xl sm:text-7xl lg:text-8xl">
                FOR THE<br /><span className="text-sju-red">BUILDERS.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
            <Reveal delay={0.1}>
              <p className="text-lg sm:text-xl leading-relaxed text-sju-grey max-w-xl">
                St. John's Hacks is St. John's University's student-led hackathon where students come together to build, experiment, collaborate, learn new technologies, and turn ideas into working projects.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 font-mono text-sm uppercase tracking-[0.15em] text-sju-red">
                Beginner-friendly. Always.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <Button to="/about" variant="outline">Our Story</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function NextEvent() {
  return (
    <section className="relative py-24 lg:py-32 bg-sju-void text-white overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-sju-red" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="02" dark className="mb-10">Next Up</SectionLabel>
        <Reveal>
          <h2 className="display-text text-7xl sm:text-8xl lg:text-[10rem] leading-[0.85]">
            ST. JOHN'S<br /><span className="text-sju-red">HACKS '27</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
          {[
            { k: "SEASON", v: currentEvent.season },
            { k: "VENUE", v: currentEvent.venue },
            { k: "LOCATION", v: currentEvent.location },
          ].map((item, i) => (
            <Reveal key={item.k} delay={0.1 + i * 0.05}>
              <div className="border-l-2 border-sju-red pl-4">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">{item.k}</div>
                <div className="mt-1 font-mono text-sm font-bold text-white">{item.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-10">
            <Button to="/2027" variant="primary">Explore 2027</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="03" className="mb-12">The Experience</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sju-n3 border border-sju-n3">
          {experiences.map((item, i) => (
            <ExperienceCard key={item.word} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ item, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal delay={index * 0.08}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group relative bg-white h-full min-h-[260px] p-8 flex flex-col justify-between hover:bg-sju-void transition-colors duration-300 cursor-default"
      >
        <div className="font-mono text-xs text-sju-red">0{index + 1}</div>
        <div>
          <h3 className="display-text text-5xl sm:text-6xl text-sju-void group-hover:text-white transition-colors">
            {item.word}
          </h3>
          <div className="overflow-hidden">
            <motion.p
              initial={false}
              animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-sm text-white/70 leading-relaxed"
            >
              {item.desc}
            </motion.p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function PastEventsPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-sju-n1">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="04" className="mb-10">Archive</SectionLabel>
        <Reveal>
          <h2 className="display-text text-6xl sm:text-7xl lg:text-8xl mb-4">
            BEFORE<br /><span className="text-sju-red">WHAT'S NEXT.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-sju-grey max-w-xl mb-14">
            Explore the projects, people, partners, and moments that shaped St. John's Hacks.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <EventCard event={event2026} />
          <EventCard event={event2025} />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12">
            <Button to="/past-events" variant="outline">View All Past Events</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EventCard({ event }) {
  if (!event) return null;
  return (
    <Reveal>
      <Link to={`/past-events/${event.year}`} className="group block relative overflow-hidden bg-sju-void text-white h-[460px] sm:h-[540px]">
        <img
          src={event.heroImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sju-void via-sju-void/50 to-transparent" />
        <div className="relative h-full flex flex-col justify-between p-8 lg:p-10">
          <div className="flex items-start justify-between">
            <span className="display-text text-7xl lg:text-8xl text-white/90">{event.year}</span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sju-red">{event.techLine}</span>
          </div>
          <div>
            <h3 className="display-text text-4xl sm:text-5xl mb-4">{event.tagline}</h3>
            <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.15em] text-white/60 mb-6">
              <span>{event.dateLabel}</span>
              <span>·</span>
              <span>{event.duration}</span>
              {event.attendance && (<><span>·</span><span>{event.attendance} STUDENTS</span></>)}
            </div>
            <span className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] font-bold text-white group-hover:text-sju-red transition-colors">
              Explore {event.year} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

function ProjectsPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="05" className="mb-10">Showcase</SectionLabel>
        <Reveal>
          <h2 className="display-text text-6xl sm:text-7xl lg:text-8xl mb-14">
            BUILT AT<br /><span className="text-sju-red">ST. JOHN'S.</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group border border-sju-n3 hover:border-sju-red transition-colors">
                <div className="relative aspect-[4/3] overflow-hidden bg-sju-void">
                  <img src={p.screenshot} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 font-mono text-xs text-white bg-sju-red px-2 py-1">{p.year}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-2xl mb-1">{p.title}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-sju-red mb-3">{p.award}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 border border-sju-n3 text-sju-grey">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-12">
            <Button to="/past-events" variant="outline">Explore Past Events</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SponsorPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-sju-n1 border-y border-sju-n3">
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <SectionLabel index="06" className="mb-10">Partners</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="display-text text-5xl sm:text-6xl lg:text-7xl">
              WANT TO HELP<br /><span className="text-sju-red">BUILD THE NEXT ONE?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-sju-grey max-w-md mb-8">
              Partner with St. John's Hacks and support the next generation of builders, developers, designers, and innovators.
            </p>
            <Button to="/sponsors" variant="primary">Become a Sponsor</Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative py-28 lg:py-40 bg-sju-void text-white overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-40" />
      <div className="absolute -left-10 bottom-0 w-64 h-64 opacity-20">
        <Mascot className="w-full h-full" />
      </div>
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="display-text text-5xl sm:text-7xl lg:text-8xl">
            YOUR NEXT<br /><span className="text-sju-red">PROJECT STARTS</span><br />HERE.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Button to="/2027" variant="primary" className="text-base">Apply to St. John's Hacks</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}