"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./CardTestimonial.module.scss";
import { ITestimonialData } from "../../../types";
import { IconQuote } from "@/components/atoms/icons/IconQuote";

export const CardTestimonial = ({
  image,
  name,
  occupation,
  comment,
  rating,
}: ITestimonialData) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className={styles["card"]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className={styles["card__quote"]}>
        <IconQuote />
      </div>

      <div className={styles["card__user"]}>
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className={styles["card__user-avatar"]}
          unoptimized
        />
        <div>
          <h4 className={styles["card__user-name"]}>{name}</h4>
          <p className={styles["card__user-role"]}>{occupation}</p>
        </div>
      </div>

      <p className={styles["card__text"]}>{comment}</p>

      <hr className={styles["card__divider"]} />

      <div className={styles["card__stars"]}>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
    </motion.div>
  );
};
