"use client";

import { AnimatedParagraph } from "../atoms/Animation/AnimatedParagraph";
import { IFeaturesData } from "@/types";
import { FeatureCard } from "../molecules/CardFeatures";
import { IconFlashlight } from "@/components/atoms/icons/IconFlashlight";
import { IconSignal } from "@/components/atoms/icons/IconSignal";
import { IconSupport } from "@/components/atoms/icons/IconSupport";

interface FeaturesSectionProps {
  title: string;
  subtitle: string;
}

// 1. Datos para la sección "¿Por Qué Elegir Start TV?"
const featuresData: IFeaturesData[] = [
  {
    icon: IconSupport,
    title: 'Soporte 24/7',
    description: 'Asistencia técnica disponible las 24 horas, todos los días del año.',
  },
  {
    icon: IconFlashlight,
    title: 'Ultra Velocidad',
    description: 'Conéctate sin interrupciones y navega a máxima velocidad.',
  },
  {
    icon: IconSignal,
    title: 'Ultima Técnologia',
    description: 'Usamos la mejor tecnología para ofrecerte internet estable y rápido.',
  },
];

export function FeaturesSection({ title, subtitle }: FeaturesSectionProps) {
  const data = featuresData;
  return (
    <section className="h-100vh py-8 lg:py-18">
      <div className="container mx-auto px-4 text-center flex flex-col justify-between gap-6 items-center lg:gap-12">
        {/* Título de la sección (H2) */}
        <h2 className="text-2xl md:text-4xl font-bold">{title}</h2>

        <AnimatedParagraph
          label={subtitle}
          delay={0.5}
          duration={0.5}
          className="text-xs w-[90%] opacity-90 sm:text-lg md:w-[70%] md:text-xl"
        />

        {/* Usamos una lista (<ul>) para los beneficios: es mejor para el SEO y accesibilidad */}
        <ul className="flex flex-col gap-6 md:flex-row lg:gap-16 ">
          {data.map(({icon, title, description}, index) => (
            <FeatureCard key={index} icon={icon} title={title} description={description}/>
          ))}
        </ul>
      </div>
    </section>
  );
}
