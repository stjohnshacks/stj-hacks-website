import React from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

// Johnny Thunderbird placeholder.
// Organizers: set site.mascotImage to an official PNG/SVG URL to display it.
// Until then we render a tasteful branded placeholder (no inaccurate mascot).
export default function Mascot({ className, watermark = false }) {
  if (site.mascotImage) {
    return (
      <img
        src={site.mascotImage}
        alt="Johnny Thunderbird — St. John's University mascot"
        className={cn("object-contain", className)}
      />
    );
  }

  // Branded placeholder — curly braces + STJ mark. Upload-ready.
  return (
    <div
      className={cn(
        "relative flex items-center justify-center select-none",
        watermark ? "opacity-20" : "opacity-100",
        className
      )}
      aria-label="Johnny Thunderbird mascot placeholder — upload official artwork"
    >
      <div className="flex items-center gap-2 font-mono font-bold leading-none" style={{ color: "var(--sju-red)" }}>
        <span className="text-[0.8em]">&#123;</span>
        <span className="text-[0.55em] tracking-tight" style={{ color: watermark ? "#fff" : "var(--sju-void)" }}>JOHNNY</span>
        <span className="text-[0.8em]">&#125;</span>
      </div>
    </div>
  );
}