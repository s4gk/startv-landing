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
  const { id, img, title, text } = data;

  return (
    <motion.div
      key={id}
      className={styles["card"]}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.03, y: -5 }}
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
        <motion.h3
          className={styles["card__content-title"]}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {id}. {title}
        </motion.h3>

        {Array.isArray(text) ? (
          <motion.ul
            className={styles["card__content-list"]}
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {text.map((text, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                {text}
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <motion.p
            className={styles["card__content-text"]}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};
