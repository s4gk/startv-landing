"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CardTestimonial } from "@/components";
import { ITestimonialData } from "../../../types";
import styles from "./Testimonial.module.scss";

interface Props {
  data: ITestimonialData[];
}

export const TestimonialsSection = ({ data }: Props) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;
      setWidth(scrollWidth - offsetWidth);
    }
  }, [data]);

  return (
    <motion.div
      className={styles["testimonials__carousel"]}
      whileTap={{ cursor: "grabbing" }}
      ref={carouselRef}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className={styles["testimonials__carousel-inner"]}
      >
        {data.map(({ id, image, comment, occupation, name, rating }) => (
          <motion.div
            key={id}
            className={styles["testimonials__carousel-item"]}
          >
            <CardTestimonial
              id={id}
              name={name}
              image={image}
              comment={comment}
              occupation={occupation}
              rating={rating}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
