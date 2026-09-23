import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, MessageCircle, ExternalLink } from "lucide-react";
import { site, footerNav } from "@/data/site";
import Mascot from "@/components/Mascot";

const socials = [
  { label: "Instagram", href: site.socials.instagram, Icon: Instagram },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: Linkedin },
  { label: "Discord", href: site.socials.discord, Icon: MessageCircle },
  { label: "Devpost", href: site.socials.devpost, Icon: ExternalLink },
  { label: "ACM", href: site.socials.acm, Icon: ExternalLink },
];

export default function Footer() {
  return (
    <footer className="relative bg-sju-void text-white overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-40" />
      {/* Johnny watermark — appears on hover of wordmark */}
      <div className="group absolute -right-10 -bottom-10 w-[420px] h-[420px] pointer-events-none opacity-10 group-hover:opacity-25 transition-opacity duration-700">
        <Mascot className="w-full h-full" watermark />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="group inline-block">
              <div className="bg-white p-3 sm:p-4 mb-4 inline-block">
                <img src={site.logo} alt="St. John's Hacks official logo — Johnny Thunderbird framed in curly braces" className="w-auto h-16 sm:h-20 object-contain" />
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-sju-red">
                {site.compactMark}
              </div>
            </Link>
            <p className="mt-6 text-white/60 max-w-sm leading-relaxed">
              {site.university}<br />{site.location}
            </p>
            <a href={`mailto:${site.contactEmail}`} className="mt-4 inline-block font-mono text-sm text-white/80 hover:text-sju-red transition-colors">
              {site.contactEmail}
            </a>
          </div>

          {/* Nav */}
          <div className="lg:col-span-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-5">Navigate</div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {footerNav.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-mono text-sm uppercase tracking-[0.1em] text-white/70 hover:text-sju-red transition-colors w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="lg:col-span-3">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 mb-5">Connect</div>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center border border-white/20 hover:bg-sju-red hover:border-sju-red transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/40">{site.footerNote}</p>
          <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.15em] text-white/40">
            <Link to="/about" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Accessibility</Link>
            <span>© {new Date().getFullYear()} STJ HACKS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}