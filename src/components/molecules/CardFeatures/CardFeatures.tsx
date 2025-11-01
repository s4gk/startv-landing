"use client";

import { IFeaturesData } from "../../../types";
import { motion } from "framer-motion";
import styles from "./CardFeatures.module.scss";

export const FeatureCard = ({ icon, title, description }: IFeaturesData) => {
  return (
    <motion.div
      className={styles["card"]}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -10,
        scale: 1.05,
        boxShadow: "0 0 30px rgba(0, 255, 150, 0.25)",
      }}
    >
      {/* efecto de glow animado en el borde */}
      <motion.div
        className={styles["card__glow"]}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />

      <motion.div
        className={styles["card__wrapper"]}
        whileHover={{ rotateX: 10, rotateY: -5 }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
      >
        <motion.div
          className={styles["card__wrapper-icon"]}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ rotate: 10, scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {icon}
        </motion.div>
      </motion.div>

      <motion.h3
        className={styles["card__wrapper-title"]}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {title}
      </motion.h3>

      <motion.p
        className={styles["card__wrapper-subtitule"]}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};
