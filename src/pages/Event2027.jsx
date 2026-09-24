import React from "react";
import PageHero from "@/components/PageHero";
import Reveal, { SectionLabel } from "@/components/Reveal";
import Button from "@/components/ui/stj-button";
import CountUp from "@/components/CountUp";
import { currentEvent, schedule, application } from "@/data/site";
import ApplyButton, { APPLICATION_LABELS } from "@/components/ApplyButton";

export default function Event2027() {
  const statusLabel = APPLICATION_LABELS[application.status] || APPLICATION_LABELS.coming_soon;
  const previewItems = schedule.items.slice(0, 5);

  return (
    <>
      <PageHero
        theme="dark"
        index="02"
        label="Current Event"
        title={<>ST. JOHN'S<br /><span className="text-sju-red">HACKS '27</span></>}
        techLine={currentEvent.techLine}
      >
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
          <span className="text-white/80">{currentEvent.dateLabel}{currentEvent.datesComingSoon && " · DATES COMING SOON"}</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80">{currentEvent.venue}</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80">{currentEvent.location}</span>
        </div>
      </PageHero>

      {/* EVENT OVERVIEW */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="01" className="mb-10">Overview</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-5">
              <h2 className="display-text text-5xl sm:text-6xl">THE NEXT<br /><span className="text-sju-red">CHAPTER.</span></h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-sju-grey leading-relaxed">{currentEvent.overview}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EVENT FORMAT */}
      <section className="py-24 lg:py-32 bg-sju-n1 border-y border-sju-n3">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="02" className="mb-12">Event Format</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sju-n3 border border-sju-n3">
            {currentEvent.format.map((f, i) => (
              <Reveal key={f.day} delay={i * 0.08}>
                <div className="bg-white p-8 h-full">
                  <div className="font-mono text-xs text-sju-red mb-3">DAY 0{i + 1}</div>
                  <h3 className="display-text text-4xl mb-3">{f.day}</h3>
                  <p className="text-sju-grey leading-relaxed">{f.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.15em] text-sju-grey">
              Schedule is editable and subject to change as details are confirmed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EVENT EXPERIENCE */}
      <section className="py-24 lg:py-32 bg-sju-void text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="03" dark className="mb-12">The Experience</SectionLabel>
          <Reveal>
            <h2 className="display-text text-5xl sm:text-6xl lg:text-7xl mb-12">WHAT YOU'LL<br /><span className="text-sju-red">DO.</span></h2>
          </Reveal>
          <div className="flex flex-wrap gap-3">
            {currentEvent.experience.map((e, i) => (
              <Reveal key={e} delay={i * 0.04}>
                <span className="inline-block font-mono text-sm uppercase tracking-[0.15em] font-bold px-5 py-3 border border-white/20 hover:bg-sju-red hover:border-sju-red transition-colors cursor-default">
                  {e}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE PREVIEW */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="04" className="mb-10">Schedule Preview</SectionLabel>
          <Reveal>
            <h2 className="display-text text-4xl sm:text-5xl mb-10">KEY MOMENTS.</h2>
          </Reveal>
          <div className="border-t border-sju-n3">
            {previewItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="grid grid-cols-12 gap-4 items-center py-5 border-b border-sju-n3 group hover:bg-sju-n1 transition-colors px-2 -mx-2">
                  <div className="col-span-3 sm:col-span-2 font-mono text-sm font-bold text-sju-red">{item.start}</div>
                  <div className="col-span-6 sm:col-span-7 font-display font-bold text-lg">{item.title}</div>
                  <div className="col-span-3 font-mono text-xs uppercase tracking-wider text-sju-grey text-right">{item.category}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10">
              <Button to="/schedule" variant="outline">View Full Schedule</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRACKS PREVIEW */}
      <section className="py-24 lg:py-32 bg-sju-n1 border-y border-sju-n3">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="05" className="mb-10">Tracks</SectionLabel>
          <Reveal>
            <h2 className="display-text text-5xl sm:text-6xl lg:text-7xl mb-6">
              TRACKS<br /><span className="text-sju-red">COMING SOON.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-sju-grey max-w-lg mb-10">
              Tracks and sponsor challenges will be announced as they're confirmed.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Button to="/tracks" variant="outline">Explore Tracks</Button>
          </Reveal>
        </div>
      </section>

      {/* REGISTRATION */}
      <section className="py-28 lg:py-36 bg-sju-void text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 text-center">
          <SectionLabel index="06" dark className="mb-8 justify-center">Registration</SectionLabel>
          <Reveal>
            <div className="inline-block font-mono text-sm uppercase tracking-[0.2em] text-sju-red border border-sju-red px-4 py-2 mb-8">
              {statusLabel}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-text text-5xl sm:text-7xl lg:text-8xl">
              READY TO<br /><span className="text-sju-red">BUILD?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex justify-center">
              <ApplyButton variant="primary" className="text-base" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}