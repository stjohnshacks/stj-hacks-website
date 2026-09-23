import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// Arrow that nudges on hover
const Arrow = () => (
  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
);

const base =
  "group inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.15em] text-xs sm:text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sju-red focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary:
    "bg-sju-red text-white hover:bg-sju-red-bright px-6 py-3.5",
  dark:
    "bg-sju-void text-white hover:bg-sju-red px-6 py-3.5 border border-sju-void",
  light:
    "bg-white text-sju-void hover:bg-sju-void hover:text-white px-6 py-3.5 border border-sju-void",
  outline:
    "bg-transparent text-current border border-current px-6 py-3.5 hover:bg-sju-red hover:text-white hover:border-sju-red",
  outlineLight:
    "bg-transparent text-white border border-white/30 px-6 py-3.5 hover:bg-white hover:text-sju-void hover:border-white",
};

export default function Button({
  to,
  href,
  onClick,
  children,
  variant = "primary",
  className,
  arrow = true,
  type,
  ...rest
}) {
  const content = (
    <>
      <span>{children}</span>
      {arrow && <Arrow />}
    </>
  );

  const cls = cn(base, variants[variant] || variants.primary, className);

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type || "button"} onClick={onClick} className={cls} {...rest}>
      {content}
    </button>
  );
}