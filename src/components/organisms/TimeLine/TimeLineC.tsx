"use client";

import React from "react";
import { IStep } from "@/types";
import { motion } from "framer-motion";
import styles from "./TimeLineC.module.scss";

interface Props {
  data: IStep[];
}

export const TimelineC = ({ data }: Props) => {
  return (
    <div className={styles["timeline__container"]}>
      {/* Línea central */}
      <motion.div
        className={styles["timeline__line"]}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className={styles["timeline__dot"]}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 200 }}
          />
        ))}
      </motion.div>

      {/* Contenido */}
      {data.map((step: IStep, index: number) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={index}
            className={
              isLeft
                ? styles["timeline__item--left"]
                : styles["timeline__item--right"]
            }
            initial={{ opacity: 0, y: 50, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className={styles["timeline__content"]}>
              {isLeft ? (
                <>
                  <div className={styles["timeline__subcontainer"]}>
                    <h3 className={styles["timeline__subcontainer-subtitle"]}>
                      {step.title}
                    </h3>
                    <p className={styles["timeline__subcontainer-description"]}>
                      {step.description}
                    </p>
                  </div>
                  <motion.div
                    className={styles["timeline__icon"]}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {step.icon}
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    className={styles["timeline__icon"]}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {step.icon}
                  </motion.div>
                  <div className={styles["timeline__subcontainer"]}>
                    <h3 className={styles["timeline__subcontainer-subtitle"]}>
                      {step.title}
                    </h3>
                    <p className={styles["timeline__subcontainer-description"]}>
                      {step.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
