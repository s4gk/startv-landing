import React from "react";
import { IStep } from "@/types";
import { AnimatedParagraph, TimelineC } from "@/components";
import styles from "./TimeLine.module.scss";

interface Props {
  title: string;
  subtitle: string;
  data: IStep[];
}

export const TimeLine = ({title, subtitle, data}: Props) => {
  return (
    <section className={styles["timeline"]} id="timeline">
      <h2 className={styles["timeline__title"]}>{title}</h2>
      <AnimatedParagraph
          label={subtitle}
          delay={0.5}
          duration={0.5}
          className={styles["timeline__subtitle"]}
        />
      <TimelineC data={data}/>
    </section>
  )
}
