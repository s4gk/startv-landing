// lib/data.ts

// 1. Datos para la sección "¿Por Qué Elegir Start TV?"
export const featuresData = [
  {
    icon: 'lightning',
    title: 'Velocidad Ilimitada',
    description: 'Disfruta de la mejor velocidad para streaming y gaming sin interrupciones.',
  },
  {
    icon: 'tv',
    title: 'Contenido Premium',
    description: 'Acceso a los mejores canales y plataformas de contenido bajo demanda.',
  },
  {
    icon: 'contract',
    title: 'Sin Cláusulas',
    description: 'Planes 100% flexibles. Cancela cuando quieras sin penalidades.',
  },
];

// 2. Datos para la sección "Planes Flexibles"
export const pricingPlans = [
  {
    name: 'Plan Básico',
    price: '100.000',
    features: ['100 Mbps de Fibra', 'TV Esencial', '1 Dispositivo'],
    isPopular: false,
    cta: 'Lo Quiero',
  },
  {
    name: 'Plan Premium',
    price: '150.000',
    features: ['300 Mbps de Fibra', 'TV Total (Incluye canales HD)', '3 Dispositivos', 'Soporte 24/7'],
    isPopular: true,
    cta: '¡El Más Vendido!',
  },
];

// 3. Datos para la sección de Preguntas Frecuentes (FAQ)
export const faqData = [
  {
    question: '¿Qué tipo de velocidad de internet ofrecen?',
    answer: 'Ofrecemos planes de fibra óptica con velocidades desde 100 Mbps, garantizando una conexión estable y rápida para todos tus dispositivos.',
  },
  {
    question: '¿Existe cláusula de permanencia?',
    answer: 'No, nuestros planes son completamente flexibles. Puedes cancelar en cualquier momento sin cargos adicionales ni penalidades.',
  },
];