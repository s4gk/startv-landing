"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Badge.module.scss";

interface BadgeProps {
  label: string;
  icon?: React.JSX.Element;
}

export const Badge = ({ label, icon }: BadgeProps) => {
  return (
    <motion.div
      className={styles["badge"]}
      initial={{ opacity: 0, y: -8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {icon}
      <span className={styles["badge__text"]}>
        {label}
      </span>
    </motion.div>
  );
};
