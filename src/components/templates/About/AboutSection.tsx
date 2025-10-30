import React from "react";
import { AnimatedParagraph, CardAbout } from "@/components";
import styles from "./AboutSection.module.scss";
import { IAbout } from "../../../types";

interface AboutProps {
  title: string;
  subtitle: string;
  data: IAbout[]
}

export const AboutSection = ({ title, subtitle, data }: AboutProps) => {

  return (
    <section className={styles["about"]} id="about">
      <h2 className={styles["about__title"]}>{title}</h2>
      <AnimatedParagraph label={subtitle} delay={0.5} duration={0.5} className={styles["about__subtitle"]} />
      <div className={styles["about__content"]}>
        {data.map((item) => (
          <CardAbout key={item.id} data={item}/>
        ))}
      </div>
    </section>
  );
};
