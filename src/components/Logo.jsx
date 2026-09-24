import React from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

// Official St. John's Hacks logo (Johnny Thunderbird + braces + wordmark).
// Renders the logo on white with a light non-destructive crop (scale + clip)
// to visually trim excess whitespace baked into the source PNG. The artwork
// itself is never altered, recoloured, or distorted.
export default function Logo({ className, imgClassName, alt }) {
  return (
    <div className={cn("overflow-hidden bg-white flex items-center justify-center", className)}>
      <img
        src={site.logo}
        alt={alt || "St. John's Hacks official logo — Johnny Thunderbird framed in curly braces"}
        className={cn("object-contain scale-110 select-none", imgClassName)}
        draggable={false}
      />
    </div>
  );
}