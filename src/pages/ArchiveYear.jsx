import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal, { SectionLabel } from "@/components/Reveal";
import Button from "@/components/ui/stj-button";
import CountUp from "@/components/CountUp";
import { getEventByYear } from "@/data/site";

// Literal span classes so Tailwind generates them.
const communitySpans = ["lg:col-span-6", "lg:col-span-6", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4"];
const organizerSpans = ["lg:col-span-6", "lg:col-span-6", "lg:col-span-4", "lg:col-span-4", "lg:col-span-4", "lg:col-span-6", "lg:col-span-6"];

function Photo({ src, alt, className, imgClassName }) {
  return (
    <div className={cn("relative overflow-hidden bg-sju-void", className)}>
      <img src={src} alt={alt} loading="lazy" className={cn("w-full h-full object-cover", imgClassName)} />
    </div>
  );
}

export default function ArchiveYear() {
  const { year } = useParams();
  const event = getEventByYear(year);

  if (!event) return <Navigate to="/past-events" replace />;

  const winnerTracks = event.winners.reduce((acc, w) => {
    (acc[w.track] = acc[w.track] || []).push(w);
    return acc;
  }, {});
  const photos = event.photos || {};

  return (
    <>
      {/* PHOTO HERO */}
      <section className="relative min-h-[80svh] flex items-end bg-sju-void text-white overflow-hidden">
        <img src={event.heroImage} alt={`St. John's Hacks ${event.year}`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-sju-void via-sju-void/65 to-sju-void/25" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 w-full pt-28 pb-14 lg:pb-20">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-sju-red mb-5">Archive · {event.year}</div>
          <h1 className="display-text text-[19vw] sm:text-[15vw] lg:text-[11vw] leading-[0.85]">
            ST.<br />JOHN'S<br /><span className="text-sju-red">HACKS '{String(event.year).slice(2)}</span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            <span className="text-white/85">{event.dateLabel}</span>
            <span className="text-white/40">|</span>
            <span className="text-white/85">{event.venue}</span>
            <span className="text-white/40">|</span>
            <span className="text-white/85">{event.location}</span>
          </div>
          {event.techLine && <div className="mt-4 font-mono text-sm text-sju-red">{event.techLine}</div>}
        </div>
      </section>

      {/* RECAP */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="01" className="mb-10">Recap</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <Reveal className="lg:col-span-5">
              <h2 className="display-text text-5xl sm:text-6xl">{event.tagline}</h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg text-sju-grey leading-relaxed">{event.recap}</p>
              {event.recapUrl && (
                <a href={event.recapUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-[0.15em] font-bold text-sju-red hover:text-sju-red-bright transition-colors">
                  Read the St. John's University Recap <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="py-24 lg:py-32 bg-sju-void text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="02" dark className="mb-12">By the Numbers</SectionLabel>
          <div className="flex flex-wrap gap-px bg-white/10">
            {event.stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08} className="flex-1 min-w-[150px]">
                <div className="bg-sju-void p-8 lg:p-12 text-center h-full">
                  <div className="display-text text-7xl sm:text-8xl lg:text-9xl text-sju-red">
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-white/60">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT ATMOSPHERE */}
      {photos.atmosphere?.length > 0 && (
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <SectionLabel index="03" className="mb-10">Event Atmosphere</SectionLabel>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4">
              <Reveal className="lg:col-span-7">
                <Photo src={photos.atmosphere[0].src} alt={photos.atmosphere[0].alt} className="aspect-[4/3] lg:aspect-auto lg:h-full" imgClassName="hover:scale-105 transition-transform duration-700" />
              </Reveal>
              <div className="lg:col-span-5 grid gap-3 lg:gap-4">
                {photos.atmosphere.slice(1).map((p, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.08}>
                    <Photo src={p.src} alt={p.alt} className="aspect-[4/3]" imgClassName="hover:scale-105 transition-transform duration-700" />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TEAMS & COMMUNITY */}
      {photos.community?.length > 0 && (
        <section className="py-24 lg:py-32 bg-sju-n1 border-y border-sju-n3">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <SectionLabel index="04" className="mb-10">Teams & Community</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-4">
              {photos.community.map((p, i) => (
                <Reveal key={i} delay={i * 0.06} className={cn("aspect-[4/3]", communitySpans[i % communitySpans.length])}>
                  <Photo src={p.src} alt={p.alt} className="w-full h-full" imgClassName="hover:scale-105 transition-transform duration-700" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WINNING PROJECTS */}
      {event.winners.length > 0 && (
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <SectionLabel index="05" className="mb-12">Winning Projects</SectionLabel>
            <div className="space-y-12">
              {Object.entries(winnerTracks).map(([track, winners], i) => (
                <Reveal key={track} delay={i * 0.05}>
                  <div>
                    <h3 className="display-text text-3xl sm:text-4xl text-sju-red mb-6 border-l-4 border-sju-red pl-4">{track}</h3>
                    {event.trackPhotos?.[track] && (
                      <div className="mb-6 aspect-[16/9] overflow-hidden bg-sju-void">
                        <img src={event.trackPhotos[track]} alt={`${track} winners at St. John's Hacks ${event.year}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-sju-n3 border border-sju-n3">
                      {winners.map((w) => (
                        <div key={w.project + w.place} className="bg-white p-6 group hover:bg-sju-n1 transition-colors">
                          <div className="font-mono text-xs text-sju-red mb-2">{w.place || "★"}</div>
                          <h4 className="font-display font-bold text-2xl mb-2">{w.project}</h4>
                          {w.image && (
                            <div className="mb-3 aspect-[4/3] overflow-hidden bg-sju-void">
                              <img src={w.image} alt={w.project} className="w-full h-full object-cover" loading="lazy" />
                            </div>
                          )}
                          {w.team && <p className="font-mono text-xs text-sju-grey mb-2">{w.team}</p>}
                          {w.tech && <p className="text-sm text-sju-grey">{w.tech}</p>}
                          {w.devpost && (
                            <a href={w.devpost} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-sju-red hover:underline">
                              Devpost <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ORGANIZERS & COMMUNITY */}
      {photos.organizers?.length > 0 && (
        <section className="py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <SectionLabel index="06" className="mb-10">Organizers & Community</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-4">
              {photos.organizers.map((p, i) => (
                <Reveal key={i} delay={i * 0.05} className={cn("aspect-[4/3]", organizerSpans[i % organizerSpans.length])}>
                  <Photo src={p.src} alt={p.alt} className="w-full h-full" imgClassName="hover:scale-105 transition-transform duration-700" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SPONSORS */}
      {event.sponsors.length > 0 && (
        <section className="py-24 lg:py-32 bg-sju-n1 border-y border-sju-n3">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <SectionLabel index="07" className="mb-10">{event.year} Sponsors & Supporters</SectionLabel>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-sju-red mb-8">
                Historical {event.year} sponsors / supporters
              </p>
            </Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-sju-n3 border border-sju-n3">
              {event.sponsors.map((s) => (
                <Reveal key={s.name}>
                  <div className="bg-white p-8 flex items-center justify-center text-center min-h-[120px]">
                    <span className="font-display font-bold text-lg">{s.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GALLERY */}
      {photos.gallery?.length > 0 && (
        <section className="py-24 lg:py-32 bg-sju-void text-white">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <SectionLabel index="08" dark className="mb-12">Gallery</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
              {photos.gallery.map((p, i) => (
                <Reveal key={i} delay={(i % 3) * 0.06} className={cn(p.wide ? "sm:col-span-2 lg:col-span-4" : "lg:col-span-2")}>
                  <Photo src={p.src} alt={p.alt} className={cn("w-full", p.wide ? "aspect-[16/10]" : "aspect-[4/3]")} imgClassName="hover:scale-105 transition-transform duration-700" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-28 lg:py-36 bg-sju-red text-white relative overflow-hidden">
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="display-text text-5xl sm:text-7xl lg:text-8xl">
              SEE WHAT WE'RE<br />BUILDING NEXT.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12 flex justify-center">
              <Button to="/2027" variant="dark" className="text-base">Explore St. John's Hacks 2027</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}