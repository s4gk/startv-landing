// app/(main)/page.tsx
import { FAQSection, FeaturesSection, HeroSection, PricingSection } from '@/components';
import { featuresData, pricingPlans, faqData } from '@/lib/data'; // Importamos los datos

// ¡Importante!: Por defecto, este es un Server Component (RSC), ideal para SEO.

export default function LandingPage() {
  return (
    <main>
      {/* 1. Banner Principal: El H1 es clave para el SEO */}
      <HeroSection 
        title="Velocidad en Internet y TV con el mejor contenido"
        subtitle="Planes flexibles, sin permanencia y con la fibra óptica más rápida del país."
        ctaText="Comenzar Ahora"
      />
      
      {/* 2. ¿Por Qué Elegir Start TV? (Usamos datos estáticos) */}
      <FeaturesSection 
        data={featuresData}
        title="¿Por Qué Elegir Start TV?" 
      />
      
      {/* 3. ¿Cómo Funciona? (Simplemente renderizamos la sección) */}
      {/* <HowItWorks /> */}

      {/* 4. Planes Flexibles (Usamos datos estáticos) */}
      <PricingSection 
        plans={pricingPlans} 
        title="Planes flexibles para todos"
      />
      
      {/* 5. ¿Quiénes Somos? */}
      {/* <AboutUs /> */}

      {/* 6. Preguntas Frecuentes: Clave para el Rich Snippet de Google */}
      <FAQSection 
        data={faqData} 
        title="Preguntas Frecuentes"
      />

      {/* 7. Testimonios / Reviews */}
      {/* <Testimonials /> */}
      
    </main>
  );
}