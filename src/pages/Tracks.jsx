import React from "react";
import PageHero from "@/components/PageHero";
import Reveal, { SectionLabel } from "@/components/Reveal";
import Button from "@/components/ui/stj-button";
import { tracks } from "@/data/site";

export default function Tracks() {
  return (
    <>
      <PageHero
        theme="dark"
        index="04"
        label="Tracks"
        title={<>PICK YOUR<br /><span className="text-sju-red">LANE.</span></>}
        techLine="{ challenges · prizes · sponsors }"
      >
        <p className="text-lg text-white/60 max-w-xl">
          Tracks and sponsor challenges for St. John's Hacks '27 will be announced as they're confirmed.
        </p>
      </PageHero>

      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="01" className="mb-12">Tracks</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06}>
                <div className="group border border-sju-n3 p-8 h-full hover:border-sju-red transition-colors relative overflow-hidden">
                  <div className="absolute top-0 right-0 font-mono text-xs text-sju-n3 p-3">0{i + 1}</div>
                  <div className="font-mono text-xs uppercase tracking-[0.2em] text-sju-red mb-4">
                    {t.announced ? "ANNOUNCED" : "COMING SOON"}
                  </div>
                  <h3 className="display-text text-3xl sm:text-4xl mb-4">{t.name}</h3>
                  <p className="text-sju-grey leading-relaxed mb-6">{t.description}</p>
                  <div className="space-y-2 font-mono text-sm">
                    {t.sponsor && <div className="text-sju-void"><span className="text-sju-grey">SPONSOR:</span> {t.sponsor}</div>}
                    <div className="text-sju-void"><span className="text-sju-grey">CHALLENGE:</span> {t.challenge}</div>
                    {t.prize && <div className="text-sju-void"><span className="text-sju-grey">PRIZE:</span> {t.prize}</div>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 p-10 bg-sju-void text-white relative overflow-hidden">
              <div className="absolute inset-0 grid-bg-dark opacity-30" />
              <div className="relative">
                <h3 className="display-text text-4xl sm:text-5xl mb-4">WANT TO SPONSOR A TRACK?</h3>
                <p className="text-white/60 max-w-lg mb-6">
                  Sponsor-backed challenges come with dedicated prizes, mentorship, and direct access to student builders.
                </p>
                <Button to="/sponsors" variant="primary">Become a Sponsor</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}