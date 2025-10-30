import {
  ButtonCTA,
  FeaturesBar,
  AnimatedParagraph,
  Badge,
  IconWorld,
} from "@/components";
import Image from "next/image";
import { ReactNode } from "react";
import styles from "./HeroSection.module.scss";

interface HeroProps {
  title: ReactNode;
  subtitle: string;
  ctaText: string;
}

export function HeroSection({ title, subtitle, ctaText }: HeroProps) {
  return (
    <section className={styles["hero"]} id="inicio">
      <div className={styles["hero__background"]}>
        <Image
          src="/images/Home.webp"
          alt="Fondo con paisaje moderno y símbolos de internet y televisión"
          fill
          style={{ objectFit: "cover" }}
          priority
          quality={75}
          className={styles["hero__image"]}
        />
        <div className={styles["hero__content"]}>
          <Badge
            icon={<IconWorld />}
            label="Conectando el mundo"
          />

          <h1 className={styles["hero__title"]}>{title}</h1>

          <AnimatedParagraph
            label={subtitle}
            delay={0.5}
            duration={0.5}
            className={styles["hero__subtitle"]}
          />

          <ButtonCTA label={ctaText} delay={0.8} duration={0.8} />
        </div>
      </div>
      <FeaturesBar />
    </section>
  );
}
