import React, { useState } from "react";
import PageHero from "@/components/PageHero";
import Reveal, { SectionLabel } from "@/components/Reveal";
import Button from "@/components/ui/stj-button";
import { currentSponsors, pastSupporters, sponsorTiers, site } from "@/data/site";

export default function Sponsors() {
  return (
    <>
      <PageHero
        index="06"
        label="Sponsors"
        title={<>POWERING<br /><span className="text-sju-red">THE BUILDERS.</span></>}
        techLine="{ partner with stj hacks }"
      >
        <p className="text-lg text-sju-grey max-w-xl">
          Partner with St. John's Hacks to connect with students building the next generation of technology.
        </p>
      </PageHero>

      {/* CURRENT SPONSORS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="01" className="mb-12">Current Sponsors · 2027</SectionLabel>
          {currentSponsors.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-sju-n3 border border-sju-n3">
              {currentSponsors.map((s) => (
                <Reveal key={s.name}>
                  <div className="bg-white p-8 flex items-center justify-center text-center min-h-[140px]">
                    <span className="font-display font-bold text-xl">{s.name}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="border border-dashed border-sju-n3 p-12 text-center">
                <p className="display-text text-4xl sm:text-5xl text-sju-grey mb-3">2027 SPONSORS</p>
                <p className="font-mono text-sm uppercase tracking-[0.15em] text-sju-red">Coming soon — announcements as partners confirm.</p>
              </div>
            </Reveal>
          )}

          {/* Tiers (only show non-empty) */}
          {sponsorTiers.filter((t) => t.sponsors.length > 0).length > 0 && (
            <div className="mt-16">
              <SectionLabel index="02" className="mb-8">Tiers</SectionLabel>
              <div className="space-y-8">
                {sponsorTiers.filter((t) => t.sponsors.length > 0).map((tier) => (
                  <Reveal key={tier.name}>
                    <div>
                      <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-sju-red mb-4">{tier.name}</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-sju-n3 border border-sju-n3">
                        {tier.sponsors.map((s) => (
                          <div key={s.name} className="bg-white p-6 text-center font-display font-bold">{s.name}</div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PAST SUPPORTERS */}
      <section className="py-24 lg:py-32 bg-sju-n1 border-y border-sju-n3">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="03" className="mb-4">Past Supporters</SectionLabel>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-sju-grey max-w-2xl mb-12">
              Organizations that supported previous years. Past support does not imply commitment to future events.
            </p>
          </Reveal>
          <div className="space-y-px bg-sju-n3 border border-sju-n3">
            {pastSupporters.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.04}>
                <div className="bg-white px-6 py-5 flex flex-wrap items-center justify-between gap-3 group hover:bg-sju-void hover:text-white transition-colors">
                  <span className="font-display font-bold text-lg sm:text-xl">{s.name}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-sju-red">
                    {s.years.join(" / ")}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSOR CTA + FORM */}
      <SponsorCTA />
    </>
  );
}

function SponsorCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", email: "", interest: "Sponsorship", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border border-sju-n3 px-4 py-3 font-mono text-sm text-sju-void focus:outline-none focus:border-sju-red transition-colors";

  return (
    <section className="py-24 lg:py-32 bg-sju-void text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionLabel index="04" dark className="mb-8">Partner With Us</SectionLabel>
            <Reveal>
              <h2 className="display-text text-5xl sm:text-6xl lg:text-7xl">
                HELP BUILD<br /><span className="text-sju-red">THE NEXT ONE.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-white/60 max-w-md leading-relaxed">
                Connect with students building the next generation of technology. Sponsor challenges, workshops, mentorship, and prizes.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-2 font-mono text-sm">
                <a href={`mailto:${site.contactEmail}`} className="block text-white/80 hover:text-sju-red transition-colors">› {site.contactEmail}</a>
                <span className="block text-white/40">› Sponsorship packet available on request</span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              {submitted ? (
                <div className="border border-sju-red p-10 text-center">
                  <div className="display-text text-4xl text-sju-red mb-3">MESSAGE SENT.</div>
                  <p className="text-white/60">Thanks — our team will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-xs uppercase tracking-[0.15em] text-white/50 mb-2 block">Your Name</label>
                      <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass + " text-white placeholder-white/30"} placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="font-mono text-xs uppercase tracking-[0.15em] text-white/50 mb-2 block">Organization</label>
                      <input value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} className={inputClass + " text-white placeholder-white/30"} placeholder="Acme Corp" />
                    </div>
                  </div>
                  <div>
                    <label className="font-mono text-xs uppercase tracking-[0.15em] text-white/50 mb-2 block">Email</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass + " text-white placeholder-white/30"} placeholder="jane@acme.com" />
                  </div>
                  <div>
                    <label className="font-mono text-xs uppercase tracking-[0.15em] text-white/50 mb-2 block">Partnership Interest</label>
                    <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className={inputClass + " text-white bg-sju-void"}>
                      <option className="bg-sju-void">Sponsorship</option>
                      <option className="bg-sju-void">Sponsor Challenge</option>
                      <option className="bg-sju-void">Mentorship</option>
                      <option className="bg-sju-void">Workshop</option>
                      <option className="bg-sju-void">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-xs uppercase tracking-[0.15em] text-white/50 mb-2 block">Message</label>
                    <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass + " text-white placeholder-white/30 resize-none"} placeholder="Tell us how you'd like to partner..." />
                  </div>
                  <button type="submit" className="group inline-flex items-center gap-2 bg-sju-red text-white font-mono text-sm uppercase tracking-[0.15em] font-bold px-6 py-3.5 hover:bg-sju-red-bright transition-colors">
                    Sponsor St. John's Hacks <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}