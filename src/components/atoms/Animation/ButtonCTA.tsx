"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type ButtonCTAProps = {
  label: ReactNode;
  delay?: number;
  duration?: number;
  onClick?: () => void;
};

export const ButtonCTA = ({ label, delay, duration, onClick }: ButtonCTAProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: 'easeOut' }}
      className="relative px-10 py-2 rounded-full text-white font-semibold overflow-hidden shadow-lg border border-white text-sm sm:text-base lg:text-xl lg:px-14 lg:py-3"
    >
      {/* Fondo con gradiente */}
      <span className="absolute inset-0 bg-gradient-to-r from-green to-blue rounded-xl" />

      {/* Capa oscura encima del gradiente */}
      <span className="absolute inset-0 bg-black/50 rounded-xl" />

      {/* Texto visible */}
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
};
