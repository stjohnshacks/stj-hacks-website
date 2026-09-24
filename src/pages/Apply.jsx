import React from "react";
import { ExternalLink, Mail } from "lucide-react";
import Reveal, { SectionLabel } from "@/components/Reveal";
import ApplyButton, { APPLICATION_LABELS } from "@/components/ApplyButton";
import { application, site } from "@/data/site";

// /apply — embedded Google Form page.
// The form URL comes from `application.embedUrl` in src/data/site.js.
// Until that is set, this page shows the "Applications Coming Soon" state.

export default function Apply() {
  const { status, embedUrl, url } = application;
  const open = status === "open";
  const hasEmbed = Boolean(embedUrl);
  const statusLabel = APPLICATION_LABELS[status] || APPLICATION_LABELS.coming_soon;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-sju-void text-white overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-sju-red/50" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-32 pb-16 lg:pb-20">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-sju-red mb-6">Application</div>
          <h1 className="display-text text-[18vw] sm:text-[14vw] lg:text-[10vw] leading-[0.82]">
            ST.<br />JOHN'S<br /><span className="text-sju-red">HACKS '27</span><br />APPLICATION
          </h1>
          <div className="mt-8 font-mono text-sm text-white/70">{currentEventTechLine()}</div>
        </div>
      </section>

      {/* Status / Form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10">
          <SectionLabel index="01" className="mb-8">Apply</SectionLabel>

          {!open || !hasEmbed ? (
            <Reveal>
              <div className="border border-sju-n3 p-10 sm:p-14 text-center">
                <div className="inline-block font-mono text-sm uppercase tracking-[0.2em] text-sju-red border border-sju-red px-4 py-2 mb-6">
                  {statusLabel}
                </div>
                <h2 className="display-text text-4xl sm:text-5xl mb-4">APPLICATIONS COMING SOON.</h2>
                <p className="text-sju-grey max-w-xl mx-auto leading-relaxed">
                  Applications for St. John's Hacks '27 will open ahead of Spring 2027. Check back here or watch the 2027 page for the latest status.
                </p>
                <div className="mt-8 flex justify-center">
                  <ApplyButton variant="primary" />
                </div>
                <a href={`mailto:${site.contactEmail}`} className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-sju-grey hover:text-sju-red transition-colors">
                  <Mail className="w-4 h-4" /> {site.contactEmail}
                </a>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="border border-sju-n3 bg-sju-n1">
                <iframe
                  src={embedUrl}
                  title="St. John's Hacks '27 Application"
                  className="w-full"
                  style={{ height: "min(1400px, 90vh)", minHeight: "640px", border: 0, display: "block" }}
                  loading="lazy"
                >
                  Loading the application form…
                </iframe>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-sju-grey">
                  Having trouble with the embedded form?
                </p>
                <a
                  href={url || embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] font-bold text-sju-red hover:text-sju-red-bright transition-colors"
                >
                  Open the application in a new tab <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}

function currentEventTechLine() {
  return "{ the next chapter · spring 2027 }";
}