"use client";

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface AnimatedParagraphProps {
  label: ReactNode;
  delay?: number;
  duration?: number;
  className: string;
}

export const AnimatedParagraph = ({label, delay, duration, className}: AnimatedParagraphProps) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration, ease: 'easeOut' }}
      className={className}
    >
      {label}
    </motion.p>
  )
}
