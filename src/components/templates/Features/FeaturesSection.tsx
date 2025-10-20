"use client";

import { AnimatedParagraph } from "../../atoms/Animation/AnimatedParagraph";
import { IFeaturesData } from "@/types";
import { FeatureCard } from "../../molecules/CardFeatures/CardFeatures";
import { IconFlashlight } from "@/components/atoms/icons/IconFlashlight";
import { IconSignal } from "@/components/atoms/icons/IconSignal";
import { IconSupport } from "@/components/atoms/icons/IconSupport";
import styles from "./FeaturesSection.module.scss";

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
}

const featuresData: IFeaturesData[] = [
  {
    icon: IconSupport,
    title: "Soporte 24/7",
    description: "Asistencia técnica disponible las 24 horas, todos los días del año.",
  },
  {
    icon: IconFlashlight,
    title: "Ultra Velocidad",
    description: "Conéctate sin interrupciones y navega a máxima velocidad.",
  },
  {
    icon: IconSignal,
    title: "Última Tecnología",
    description: "Usamos la mejor tecnología para ofrecerte internet estable y rápido.",
  },
];

export function FeaturesSection({ title, subtitle }: FeaturesSectionProps) {
  return (
    <section className={styles["section"]}>
      <div className={styles["section__container"]}>
        <h2 className={styles["section__container-title"]}>{title}</h2>

        <AnimatedParagraph
          label={subtitle}
          delay={0.5}
          duration={0.5}
          className={styles["section__container-subtitle"]}
        />

        <ul className={styles["section__container-featuresList"]}>
          {featuresData.map(({ icon, title, description }, index) => (
            <FeatureCard
              key={index}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
