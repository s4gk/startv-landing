"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import styles from "./ButtonCTA.module.scss";

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
      className={styles.button}
    >

      {/* Capa oscura encima del gradiente */}
      <span className={styles.button__shadow} />

      {/* Texto visible */}
      <span className={styles.button__text}>{label}</span>
    </motion.button>
  );
};
