import Image from "next/image";
import {
  Badge,
  IconWorld,
  ButtonCTA,
  FeaturesBar,
  AnimatedParagraph,
} from "@/components";
import { ReactNode } from "react";
import styles from "./HeroSection.module.scss";

interface HeroProps {
  title: ReactNode;
  subtitle: string;
  ctaText: string;
}

export function HeroSection({ title, subtitle, ctaText }: HeroProps) {
  return (
<<<<<<< HEAD:src/components/templates/HeroSection.tsx
    <section className="h-[calc(100vh-4rem)] lg:h-[calc(100vh-4.9rem)] pt-4 flex flex-col justify-between gap-4 lg:pt-2 overflow-hidden px-6 lg:px-16">
      <div className="h-[90%] relative text-foreground rounded-xl flex flex-col justify-center items-center">
        {/* 1. Fondo de Imagen Optimizado (next/image) */}
=======
    <section className={styles.hero}>
      <div className={styles.hero__background}>
>>>>>>> 38ababf (feat: 20/10/25 StarTV Landing Page):src/components/templates/Hero/HeroSection.tsx
        <Image
          src="/images/Home.webp"
          alt="Fondo con paisaje moderno y símbolos de internet y televisión"
          fill
          style={{ objectFit: "cover" }}
          priority
          quality={75}
          className={styles.hero__image}
        />
        <div className={styles.hero__content}>
          <Badge
            icon={<IconWorld color="#ffffff" />}
            label="Conectando el mundo"
          />

          <h1 className={styles.hero__title}>{title}</h1>

          <AnimatedParagraph
            label={subtitle}
            delay={0.5}
            duration={0.5}
            className={styles.hero__subtitle}
          />

          <ButtonCTA label={ctaText} delay={0.8} duration={0.8} />
        </div>
      </div>
<<<<<<< HEAD:src/components/templates/HeroSection.tsx
      <div className="relative left-1/2 -translate-x-1/2 w-screen overflow-hidden">
        <FeaturesBar />
      </div>
=======

      <FeaturesBar />
>>>>>>> 38ababf (feat: 20/10/25 StarTV Landing Page):src/components/templates/Hero/HeroSection.tsx
    </section>
  );
}
