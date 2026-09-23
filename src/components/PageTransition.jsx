import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Page transition: a red wipe sweeps top-to-bottom, then content fades/rises in.
export default function PageTransition({ children }) {
  const location = useLocation();
  return (
    <>
      <motion.div
        key={location.pathname + "-wipe"}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.32, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
        className="fixed inset-0 z-[70] bg-sju-red pointer-events-none"
      />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}