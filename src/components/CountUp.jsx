import React from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

// Animated number count-up when scrolled into view.
export default function CountUp({ value, className, duration = 1.6 }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Strip non-numeric prefix/suffix (e.g. "60+", "01")
  const numericMatch = String(value).match(/[\d.]+/);
  const numeric = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = numericMatch ? String(value).slice(0, numericMatch.index) : "";
  const suffix = numericMatch ? String(value).slice(numericMatch.index + numericMatch[0].length) : String(value);

  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  React.useEffect(() => {
    if (inView) motionValue.set(numeric);
  }, [inView, numeric, motionValue]);

  const [display, setDisplay] = React.useState("0");

  React.useEffect(() => {
    return spring.on("change", (latest) => {
      const rounded = Number.isInteger(numeric) ? Math.round(latest) : latest.toFixed(1);
      setDisplay(String(rounded));
    });
  }, [spring, numeric]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}{display}{suffix}
    </span>
  );
}