"use client";

import { motion } from "framer-motion";
import React from "react";

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
      className="px-2 py-1 text-xs font-medium bg-white/10 text-white rounded-full flex justify-center items-center gap-3 border border-white w-48"
    >
      {icon}
      {label}
    </motion.div>
  );
};
