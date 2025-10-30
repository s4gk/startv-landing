"use client";

import { IFeaturesData } from "../../../types";
import { motion } from "framer-motion";
import styles  from "./CardFeatures.module.scss";

export const FeatureCard = ({icon, title, description}: IFeaturesData) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={styles["card"]}
    >
      <div className={styles["card__wrapper"]}>
        <div className={styles["card__wrapper-icon"]}>
          {icon}
        </div>
      </div>

      <h3 className={styles["card__wrapper-title"]}>{title}</h3>
      <p className={styles["card__wrapper-subtitule"]}>
        {description}
      </p>
    </motion.div>
  );
}
