"use client";

import { easeOut, motion } from "framer-motion";
import { ReactNode } from "react";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  custom?: number;
}

export default function RevealSection({
  children,
  className = "",
  custom = 0,
}: RevealSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: easeOut, delay: custom }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
