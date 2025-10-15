import Image from "next/image";
import {
  Badge,
  IconWorld,
  ButtonCTA,
  FeaturesBar,
  AnimatedParagraph,
} from "@/components";
import { ReactNode } from "react";

interface HeroProps {
  title: ReactNode;
  subtitle: string;
  ctaText: string;
}

export function HeroSection({ title, subtitle, ctaText }: HeroProps) {
  return (
    <section className="h-[calc(100vh-4rem)] lg:h-[calc(100vh-4.9rem)] pt-4 flex flex-col justify-between gap-4 lg:pt-2">
      <div className="h-[90%] relative text-foreground rounded-xl flex flex-col justify-center items-center">
        {/* 1. Fondo de Imagen Optimizado (next/image) */}
        <Image
          src="/images/Home.webp"
          alt="Fondo con paisaje moderno y símbolos de internet y televisión"
          fill
          style={{ objectFit: "cover" }}
          priority
          quality={75}
          className="brightness-[.25] rounded-xl"
        />

        {/* 2. Contenido Principal */}
        <div className="relative z-10 text-center max-w-4xl px-4 flex flex-col items-center justify-center gap-8 h-[80%] lg:h-[98%] sm:gap-12">
          <Badge
            icon={<IconWorld color="#ffffff" />}
            label="Conectando el mundo"
          />

          <h1 className="text-3xl font-bold leading-tight w-full text-white sm:text-4xl sm:w-[80%] md:text-5xl">
            {title}
          </h1>

          <AnimatedParagraph
            label={subtitle}
            delay={0.5}
            duration={0.5}
            className="text-xs w-[90%] opacity-90 text-white sm:text-lg md:w-[70%] md:text-xl"
          />

          <ButtonCTA label={ctaText} delay={0.8} duration={0.8} />
        </div>
      </div>
      <FeaturesBar />
    </section>
  );
}
