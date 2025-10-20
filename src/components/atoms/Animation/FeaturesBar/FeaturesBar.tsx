"use client";

import React from "react";
import { motion } from "framer-motion";
import { features } from "@/data/FeaturesBar";
import { IconCircle } from "@/components";
import styles from "./FeaturesBar.module.scss";

export const FeaturesBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={styles.features}
    >
      <div className={styles.features__wrapper}>
        <motion.div
          className={styles.features__scroller}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
        >
          {/* Contenido 2 (duplicado) */}
          {features.map((item, index) => (
            <React.Fragment key={`${index}-1`}>
              <span className={styles.features__item}>{item.label}</span>
              <IconCircle />
            </React.Fragment>
          ))}
          {features.map((item, index) => (
            <React.Fragment key={`${index}-2`}>
              <span className={styles.features__item}>{item.label}</span>
              <IconCircle />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </motion.div>

  );
};
