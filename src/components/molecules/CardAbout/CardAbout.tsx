"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./CardAbout.module.scss";
import { IAbout } from "../../../types";
import Image from "next/image";

interface AboutProps {
  data: IAbout;
}

export const CardAbout = ({ data }: AboutProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const { id, img, title, text } = data;

  return (
    <motion.div
      key={id}
      className={styles["card"]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <Image
        src={img}
        alt={title}
        className={styles["card__image"]}
        width={200}
        height={200}
        unoptimized
      />
      <div className={styles["card__content"]}>
        <h3 className={styles["card__content-title"]}>
          {id}. {title}
        </h3>
        {Array.isArray(text) ? (
          <ul className={styles["card__content-list"]}>
            {text.map((t, index) => (
              <li key={index}>{t}</li>
            ))}
          </ul>
        ) : (
          <p className={styles["card__content-text"]}>{text}</p>
        )}
      </div>
    </motion.div>
  );
};
