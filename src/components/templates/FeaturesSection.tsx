// components/sections/FeaturesSection.tsx
import { featuresData } from '@/lib/data'; // Importamos la interfaz para la tipificación

// Define la estructura de datos que recibe
interface FeatureItem {
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  data: FeatureItem[];
}

export function FeaturesSection({ title, data }: FeaturesProps) {
  return (
    <section className="py-16 md:py-24 bg-white text-gray-800">
      <div className="container mx-auto px-4 text-center">
        
        {/* Título de la sección (H2) */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {title}
        </h2>
        
        {/* Usamos una lista (<ul>) para los beneficios: es mejor para el SEO y accesibilidad */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((feature, index) => (
            <li 
              key={index} 
              className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              {/* Icono (Aquí asumiríamos que usas un componente Icon) */}
              {/* <Icon name={feature.icon} className="text-4xl text-green-600 mb-4 mx-auto" /> */}
              
              {/* Espacio para el icono, usando un placeholder */}
              {/* 
              <div className="text-4xl text-green-600 mb-4 mx-auto w-12 h-12 flex items-center justify-center border-2 border-green-600 rounded-full">
                {feature.icon === 'lightning' && '⚡'}
                {feature.icon === 'tv' && '📺'}
                {feature.icon === 'contract' && '📜'}
              </div>*/}

              {/* Título del beneficio (H3) */}
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}