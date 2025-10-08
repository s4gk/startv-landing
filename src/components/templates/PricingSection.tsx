// components/sections/PricingSection.tsx
import { pricingPlans } from '@/lib/data'; // Importa los datos de planes
// import { PlanCard } from '@/components/ui/PlanCard'; // Componente PlanCard

interface PricingProps {
  title: string;
  plans: typeof pricingPlans;
}

export function PricingSection({ title, plans }: PricingProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        
        {/* Título de la sección (H2) */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {title}
        </h2>
        
        {/* Contenedor de las tarjetas de planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            // Aquí iría el componente PlanCard.tsx
            <div 
              key={index} 
              className={`p-6 rounded-xl shadow-2xl transition duration-500 ${
                plan.isPopular 
                  ? 'bg-black text-white transform scale-[1.05]' 
                  : 'bg-white'
              }`}
            >
              {plan.isPopular && (
                <p className="text-sm bg-green-500 text-black font-bold py-1 px-3 rounded-full inline-block mb-3">
                  Más Popular
                </p>
              )}
              
              {/* H3 para el nombre del plan */}
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              
              <p className="text-5xl font-extrabold mb-6">
                ${plan.price}
                <span className="text-lg font-normal">/mes</span>
              </p>
              
              <ul className="text-left space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-3">✅</span> {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 rounded-full font-bold transition duration-300 border-2 border-green-500 hover:bg-green-500 hover:text-black">
                {plan.cta}
              </button>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}