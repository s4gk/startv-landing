"use client";

import React from "react";
import styles from "./CardPricing.module.scss";
import { IconCheck } from "@/components";
import { motion } from "framer-motion";

interface Data {
  name: string;
  price: string;
  features: string[];
  isPopular: boolean;
  cta: string;
}

interface CardPricingProps {
  key: number;
  data: Data;
}

export const CardPricing = ({ key, data }: CardPricingProps) => {
  return (
    <motion.div
      key={key}
      className={`${styles["card"]} ${
        data.isPopular ? styles["card__popular"] : ""
      }`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -10,
        scale: 1.03,
        boxShadow: data.isPopular
          ? "0 0 40px rgba(0, 255, 140, 0.25)"
          : "0 0 30px rgba(255, 255, 255, 0.05)",
      }}
    >
      {data.isPopular && (
        <motion.p
          className={styles["card__popular-badge"]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
        >
          Más Popular
        </motion.p>
      )}

      <div
        className={`${
          data.isPopular
            ? styles["card__description-popular"]
            : styles["card__description"]
        }`}
      >
        <motion.h3
          className={styles["card__description-name"]}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          {data.name}
        </motion.h3>

        <motion.p
          className={styles["card__description-price"]}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          ${data.price}
          <span className={styles["card__description-price-unit"]}>
            /mes
          </span>
        </motion.p>
      </div>

      <motion.ul
        className={styles["card__features"]}
        initial="hidden"
        whileInView="show"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {data.features.map((feature, i) => (
          <motion.li
            key={i}
            className={styles["card__features-ft"]}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <span className={styles["card__features-icon"]}>
              <IconCheck />
            </span>
            {feature}
          </motion.li>
        ))}
      </motion.ul>

      <motion.button
        className={`${
          data.isPopular ? styles["card__cta-popular"] : styles["card__cta"]
        }`}
        whileHover={{
          scale: 1.08,
          boxShadow: data.isPopular
            ? "0 0 25px rgba(0, 255, 150, 0.3)"
            : "0 0 15px rgba(255,255,255,0.1)",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {data.cta}
      </motion.button>
    </motion.div>
  );
};
