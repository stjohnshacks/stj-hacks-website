import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { nav, navMore, site } from "@/data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const linkClass = ({ isActive }) =>
    cn(
      "font-mono text-xs uppercase tracking-[0.15em] font-bold transition-colors duration-200 px-1 py-1",
      isActive ? "text-sju-red" : "text-sju-void hover:text-sju-red"
    );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/90 backdrop-blur-md border-b border-sju-n3" : "bg-transparent"
        )}
      >
        <nav className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
          {/* Wordmark */}
          <Link to="/" className="flex items-center gap-2 group shrink-0" aria-label="St. John's Hacks home">
            <span className="font-mono text-sm font-bold tracking-tight text-sju-void hidden sm:inline">
              STJ<span className="text-sju-red">_</span>HACKS
            </span>
            <span className="font-mono text-sm font-bold text-sju-void sm:hidden">
              <span className="text-sju-red">&#123;</span>STJ<span className="text-sju-red">&#125;</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {nav.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            {/* More menu */}
            <div className="relative">
              <button
                onClick={() => setMoreOpen((v) => !v)}
                onBlur={() => setTimeout(() => setMoreOpen(false), 150)}
                className="font-mono text-xs uppercase tracking-[0.15em] font-bold text-sju-void hover:text-sju-red transition-colors flex items-center gap-1 px-1"
                aria-haspopup="menu"
                aria-expanded={moreOpen}
              >
                More
                <ChevronDown className={cn("w-3 h-3 transition-transform", moreOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-44 bg-white border border-sju-n3 shadow-lg"
                  >
                    {navMore.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 font-mono text-xs uppercase tracking-[0.15em] font-bold text-sju-void hover:bg-sju-void hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Apply + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/2027"
              className="hidden sm:inline-flex bg-sju-red text-white font-mono text-xs uppercase tracking-[0.15em] font-bold px-5 py-2.5 hover:bg-sju-red-bright transition-colors"
            >
              Apply
            </Link>
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-sju-void" />
              <span className="block w-6 h-0.5 bg-sju-void" />
              <span className="block w-4 h-0.5 bg-sju-red" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile full-screen takeover */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-sju-red text-white lg:hidden flex flex-col"
          >
            <div className="h-16 flex items-center justify-between px-4 sm:px-6 border-b border-white/20">
              <span className="font-mono text-sm font-bold">
                <span className="text-sju-void">&#123;</span>STJ<span className="text-sju-void">&#125;</span>
              </span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
                <X className="w-7 h-7" strokeWidth={2.5} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-10 grid-bg-dark">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-white/60 mb-8">
                {"> "}system_override
              </div>
              <nav className="flex flex-col">
                {[...nav, ...navMore].map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className="block py-4 border-b border-white/20 display-text text-5xl sm:text-6xl text-white hover:text-sju-void transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <Link
                to="/2027"
                className="mt-10 inline-flex w-full justify-center items-center gap-2 bg-sju-void text-white font-mono text-sm uppercase tracking-[0.15em] font-bold px-6 py-4"
              >
                Apply →
              </Link>
              <div className="mt-10 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                {site.university} · {site.location}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}