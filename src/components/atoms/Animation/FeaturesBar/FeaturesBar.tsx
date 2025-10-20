"use client";

import React from "react";
import { motion } from "framer-motion";
import { features } from "@/data/FeaturesBar";
import { IconCircle } from "@/components";
import styles from "./FeaturesBar.module.scss";

export const FeaturesBar = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
<<<<<<<< HEAD:src/components/organisms/AnimateFeaturesBar.tsx
      className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-black py-6 overflow-hidden"
    >
      {/* Contenedor de máscara */}
      <div className="relative w-full overflow-hidden">
========
      className={styles.features}
    >
      <div className={styles.features__wrapper}>
>>>>>>>> 38ababf (feat: 20/10/25 StarTV Landing Page):src/components/atoms/Animation/FeaturesBar/FeaturesBar.tsx
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
<<<<<<<< HEAD:src/components/organisms/AnimateFeaturesBar.tsx
          className="flex whitespace-nowrap text-white uppercase text-sm font-semibold tracking-wide gap-8"
        >
          {/* Contenido 1 */}
          {features.map((item, index) => (
            <React.Fragment key={`${index}-1`}>
              <span className="flex items-center">{item.label}</span>
              <IconCircle />
            </React.Fragment>
          ))}

          {/* Contenido 2 (duplicado) */}
          {features.map((item, index) => (
            <React.Fragment key={`${index}-2`}>
              <span className="flex items-center">{item.label}</span>
========
          className={styles.features__scroller}
        >
          {features.map((item, index) => (
            <React.Fragment key={`${index}-1`}>
              <span className={styles.features__item}>{item.label}</span>
              <IconCircle />
            </React.Fragment>
          ))}
          {features.map((item, index) => (
            <React.Fragment key={`${index}-2`}>
              <span className={styles.features__item}>{item.label}</span>
>>>>>>>> 38ababf (feat: 20/10/25 StarTV Landing Page):src/components/atoms/Animation/FeaturesBar/FeaturesBar.tsx
              <IconCircle />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </motion.section>

  );
};
