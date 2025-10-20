"use client";

import { IFeaturesData } from "@/types";
import { motion } from "framer-motion";
import styles  from "./CardFeatures.module.scss";

export const FeatureCard = ({icon: Icon, title, description}: IFeaturesData) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={styles.card}
    >
      <div className={styles.card__wrapper}>
        <div>
          <Icon />
        </div>
      </div>

      <h3>{title}</h3>
      <p>
        {description}
      </p>
    </motion.div>
  );
}
