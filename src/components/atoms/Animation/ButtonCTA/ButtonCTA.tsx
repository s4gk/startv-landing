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

export const ButtonCTA = ({
  label,
  delay = 0,
  duration = 0.6,
  onClick,
}: ButtonCTAProps) => {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        delay,
        duration,
        ease: [0.25, 1, 0.5, 1],
      }}
      whileHover={{
        y: -3,
        scale: 1.08,
        transition: { type: "tween", duration: 0.5, ease: "easeOut" }, // 🔥 hover instantáneo
      }}
      whileTap={{ scale: 0.95, transition: { type: "tween", duration: 0.08 } }}
      className={styles["button"]}
      onClick={onClick}
    >
      <span className={styles["button__shadow"]} />
      <span className={styles["button__text"]}>{label}</span>
    </motion.button>
  );
};
