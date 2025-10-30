import { IFeaturesData } from "../../../types";
import { AnimatedParagraph } from "../../atoms/Animation/AnimatedParagraph";
import { FeatureCard } from "../../molecules/CardFeatures/CardFeatures";
import styles from "./FeaturesSection.module.scss";

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
  dataFeatures: IFeaturesData[]
}

export function FeaturesSection({ title, subtitle, dataFeatures }: FeaturesSectionProps) {
  return (
    <section className={styles["section"]} id="features">
      <div className={styles["section__container"]}>
        <h2 className={styles["section__container-title"]}>{title}</h2>

        <AnimatedParagraph
          label={subtitle}
          delay={0.5}
          duration={0.5}
          className={styles["section__container-subtitle"]}
        />

        <ul className={styles["section__container-featuresList"]}>
          {dataFeatures.map(({ icon, title, description }, index) => (
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
