"use client";

import React from "react";
import { motion } from "framer-motion";
import { features } from "@/data/FeaturesBar";
import { IconCircle } from "@/components";
import styles from "./FeaturesBar.module.scss";

export const FeaturesBar = () => {
  return (
    <motion.div
      className={styles["features"]}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles["features__wrapper"]}>
        <motion.div
          className={styles["features__scroller"]}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
        >
          {/* Contenido 1 */}
          {features.map((item, index) => (
            <React.Fragment key={`${index}-1`}>
              <span className={styles["features__item"]}>{item.label}</span>
              <IconCircle />
            </React.Fragment>
          ))}

          {/* Contenido duplicado para loop */}
          {features.map((item, index) => (
            <React.Fragment key={`${index}-2`}>
              <span className={styles["features__item"]}>{item.label}</span>
              <IconCircle />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
