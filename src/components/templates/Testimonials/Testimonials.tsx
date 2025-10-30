import React from "react";
import { ITestimonialData } from "../../../types";
import { AnimatedParagraph, TestimonialsSection } from "@/components";
import styles from "./Testimonials.module.scss";

interface Props {
  title: string;
  subtitle: string;
  data: ITestimonialData[];
}

export const Testimonials = ({ title, subtitle, data }: Props) => {
  return (
    <section className={styles["testimonials"]} id="testimonial">
      <h2 className={styles["testimonials__title"]}>{title}</h2>
      <AnimatedParagraph
          label={subtitle}
          delay={0.5}
          duration={0.5}
          className={styles["testimonials__subtitle"]}
        />
      <TestimonialsSection data={data} />
    </section>
  );
};
