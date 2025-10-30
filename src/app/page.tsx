import {
  AboutSection,
  FAQSection,
  FeaturesSection,
  Footer,
  HeroSection,
  PricingSection,
  Testimonials,
  TimeLine,
} from "@/components";
import { PricingData, AboutData, TestimonialData, Steps } from "@/lib";
import { FeaturesData } from "@/lib/FeaturesData";
import styles from './page.module.scss';

export default function LandingPage() {
  return (
    <main className={styles["landing"]}>
      {/* 1. Banner Principal: El H1 es clave para el SEO */}
      <HeroSection
        title={
          <>
            Velocidad en <span className="text-green">Internet</span> y TV con
            el <span className="text-green">mejor</span> contenido
          </>
        }
        subtitle="Navega a máxima velocidad y accede a la mejor programación de TV en HD. Conéctate, trabaja, aprende y diviértete sin interrupciones."
        ctaText="Comenzar Ahora"
      />

      {/* 3. ¿Por Qué Elegir Start TV? (Usamos datos estáticos) */}
      <FeaturesSection
        title="¿Por Qué Elegir Start TV?"
        subtitle="Más que internet rápido, ofrecemos una experiencia completa con servicios de primera clase y tecnología de vanguardia."
        dataFeatures={FeaturesData}
      />

      <TimeLine
        title="¿Cómo Funciona?"
        subtitle="Conoce los pasos para activar tu servicio de forma rápida, sencilla y sin complicaciones."
        data={Steps}
      />

      {/* 3. Planes Flexibles (Usamos datos estáticos) */}
      <PricingSection
        title="Planes flexibles para todos"
        subtitle="Elige el plan que mejor se adapte a tu estilo de vida. Desde conexiones básicas para navegar y estudiar, hasta velocidades ultra rápidas para gaming, streaming en 4K y trabajo remoto. ¡Tenemos la opción ideal para cada necesidad!"
        plans={PricingData}
      />

      {/* 4. ¿Quiénes Somos? */}
      <AboutSection
        title="¿Quienes Somos?"
        subtitle="Somos una empresa 100% colombiana que conecta hogares y negocios con internet de alta velocidad y televisión de calidad. Nuestra misión es llevarte siempre el mejor servicio con tecnología de vanguardia y atención personalizada."
        data={AboutData}
      />

      {/* 6. Preguntas Frecuentes: Clave para el Rich Snippet de Google data={faqData} title="Preguntas Frecuentes"   */}
      <FAQSection
        title="Preguntas Frecuentes"
        subtitle="Elige el plan que mejor se adapte a tu estilo de vida. Desde conexiones básicas para
        navegar y estudiar, hasta velocidades ultra rápidas para gaming, streaming en 4K y trabajo remoto.
        ¡Tenemos la opción ideal para cada necesidad!"
      />

      {/* 7. Testimonios / Reviews */}
      <Testimonials
        title="Ellos ya disfrutan de la experiencia"
        subtitle="Conoce cómo nuestro servicio ha mejorado la vida de nuestros clientes."
        data={TestimonialData}
      />
      <Footer />
    </main>
  );
}
