// components/sections/FAQSection.tsx
import { faqData } from '@/lib/data'; // Importa los datos de las FAQs
import Script from 'next/script'; // Importante para cargar el JSON-LD de forma asíncrona

interface FAQProps {
  title: string;
  data: typeof faqData;
}

export function FAQSection({ title, data }: FAQProps) {
  
  // 1. Generar el JSON-LD (Schema Markup)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 max-w-3xl">
        
        {/* Título de la sección (H2) */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {title}
        </h2>

        {/* Cargar el Schema Markup de forma segura con next/script */}
        <Script
          id="faq-schema-markup"
          type="application/ld+json"
          strategy="lazyOnload" // Carga después de que la página sea interactiva
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Contenedor de las preguntas (simulando un acordeón) */}
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="border-b pb-4">
              {/* H3 para cada pregunta */}
              <h3 className="text-xl font-semibold mb-2 cursor-pointer hover:text-green-600">
                {item.question}
              </h3>
              <p className="text-gray-600 ml-4">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}