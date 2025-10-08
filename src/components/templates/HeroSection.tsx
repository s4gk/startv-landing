// components/sections/HeroSection.tsx
import Image from 'next/image';

interface HeroProps {
  title: string; // Este debe contener la keyword principal
  subtitle: string;
  ctaText: string;
}

export function HeroSection({ title, subtitle, ctaText }: HeroProps) {
  return (
    // Usa una clase para el fondo que se ve en tu imagen
    <section className="relative h-screen flex items-center justify-center text-white">
      
      {/* 1. Fondo de Imagen Optimizado (next/image) */}
      <Image
        src="/images/hero-bg.jpg" // Asegúrate de tener esta imagen en public/images/
        alt="Fondo con paisaje moderno y símbolos de internet y televisión"
        fill // Ocupa todo el contenedor
        style={{ objectFit: 'cover' }}
        priority // Carga esta imagen de primero (Prioridad para LCP/Core Web Vitals)
        quality={75} // Optimiza la calidad para mejor velocidad
        className="brightness-[.25]" // Oscurece el fondo para que el texto resalte
      />

      {/* 2. Contenido Principal */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        
        {/* H1 ÚNICO EN LA PÁGINA: Crucial para el SEO */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {title} 
        </h1>

        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {subtitle}
        </p>

        <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg">
          {ctaText}
        </button>
      </div>
    </section>
  );
}