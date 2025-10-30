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
      type="button"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.03, transition: { duration: 0.2, ease: "easeOut" }, }}
      whileTap={{ scale: 0.97 }}
      transition={{ delay, duration, ease: "easeOut" }}
      className={styles["button"]}
      onClick={onClick}
    >

      {/* Capa oscura encima del gradiente */}
      <span className={styles["button__shadow"]} />

      {/* Texto visible */}
      <span className={styles["button__text"]}>{label}</span>
    </motion.button>
  );
};
