import {
  FAQSection,
  FeaturesSection,
  HeroSection,
  PricingSection,
} from "@/components";
import { faqData, pricingPlans } from "@/lib";


export default function LandingPage() {
  return (
    <main>
      {/* 1. Banner Principal: El H1 es clave para el SEO */}
      <div className="-mx-6 lg:-mx-16">
        <HeroSection
          title={
            <>
              Velocidad en <span className="text-green">Internet</span> y TV
              con el <span className="text-green">mejor</span> contenido
            </>
          }
          subtitle="Navega a máxima velocidad y accede a la mejor programación de TV en HD. Conéctate, trabaja, aprende y diviértete sin interrupciones."
          ctaText="Comenzar Ahora"
        />
      </div>

      {/* 2. ¿Por Qué Elegir Start TV? (Usamos datos estáticos) */}
      <FeaturesSection title="¿Por Qué Elegir Start TV?" subtitle="Más que internet rápido, ofrecemos una experiencia completa con servicios de primera clase y tecnología de vanguardia." />

      {/* 4. Planes Flexibles (Usamos datos estáticos) */}
      <PricingSection
        plans={pricingPlans}
        title="Planes flexibles para todos"
      />

      {/* 5. ¿Quiénes Somos? */}
      {/* <AboutUs /> */}

      {/* 6. Preguntas Frecuentes: Clave para el Rich Snippet de Google */}
      <FAQSection data={faqData} title="Preguntas Frecuentes" />

      {/* 7. Testimonios / Reviews */}
      {/* <Testimonials /> */}
    </main>
  );
}
