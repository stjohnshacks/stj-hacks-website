import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal, { SectionLabel } from "@/components/Reveal";
import { pastEvents } from "@/data/site";

export default function PastEvents() {
  return (
    <>
      <PageHero
        index="05"
        label="Archive"
        title={<>WE'VE BEEN<br /><span className="text-sju-red">BUILDING.</span></>}
        techLine="{ proof of build }"
      >
        <p className="text-lg text-sju-grey max-w-xl">
          Explore the projects, people, partners, and moments that shaped St. John's Hacks.
        </p>
      </PageHero>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="01" className="mb-12">Editions</SectionLabel>
          <div className="space-y-8">
            {pastEvents.map((event, i) => (
              <Reveal key={event.year} delay={i * 0.1}>
                <Link
                  to={`/past-events/${event.year}`}
                  className="group block relative overflow-hidden bg-sju-void text-white h-[420px] sm:h-[520px]"
                >
                  <img
                    src={event.cardImage || event.heroImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-35 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sju-void via-sju-void/40 to-transparent" />
                  <div className="relative h-full flex flex-col justify-between p-8 lg:p-12">
                    <div className="flex items-start justify-between">
                      <span className="display-text text-8xl lg:text-9xl text-white/90">{event.year}</span>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-sju-red">{event.techLine}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
                      <div>
                        <h2 className="display-text text-5xl sm:text-6xl mb-3">{event.tagline}</h2>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.15em] text-white/60">
                          <span>{event.dateLabel}</span>
                          <span>·</span>
                          <span>{event.duration}</span>
                          {event.attendance && (<><span>·</span><span>{event.attendance} STUDENTS</span></>)}
                        </div>
                      </div>
                      <div className="sm:text-right">
                        <span className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] font-bold text-white group-hover:text-sju-red transition-colors">
                          Explore {event.year} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}