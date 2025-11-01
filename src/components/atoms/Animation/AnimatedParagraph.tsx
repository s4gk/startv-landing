"use client";

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface AnimatedParagraphProps {
  label: ReactNode;
  delay?: number;
  duration?: number;
  className: string;
}

export const AnimatedParagraph = ({ label, delay = 0, duration = 0.6, className }: AnimatedParagraphProps) => {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ delay, duration, ease: 'easeOut' }}
    >
      {label}
    </motion.p>
  );
}
