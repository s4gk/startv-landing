"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./Badge.module.scss";

interface BadgeProps {
  label: string;
  icon?: React.JSX.Element;
}

export const Badge = ({label, icon}: BadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={styles.badge}
    >
      {icon}
      {label}
    </motion.div>
  );
};
