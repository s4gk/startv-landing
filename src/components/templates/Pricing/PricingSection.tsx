import { pricingPlans } from '@/lib';
import { AnimatedParagraph } from '@/components';
import styles from './PricingSection.module.scss';

interface PricingProps {
  title: string;
  description: string;
  plans: typeof pricingPlans;
}
console.log(AnimatedParagraph)

export function PricingSection({ title, description, plans }: PricingProps) {
  return (
    <section className={styles["pricing"]}>
      <div className={styles["pricing__container"]}>
        <h2 className={styles["pricing__container-title"]}>{title}</h2>
        <AnimatedParagraph
          label={description}
          delay={0.5}
          duration={0.5}
          className={styles["pricing__container-subtitle"]}
        />

        <div className={styles["pricing__grid"]}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles["pricing__grid-card"]} ${
                plan.isPopular ? styles["pricing__grid-card-popular"] : ''
              }`}
            >
              {plan.isPopular && (
                <p className={styles["pricing__grid-badge"]}>Más Popular</p>
              )}

              <h3 className={styles["pricing__name"]}>{plan.name}</h3>

              <p className={styles["pricing__price"]}>
                ${plan.price}
                <span className={styles["pricing__price_unit"]}>/mes</span>
              </p>

              <ul className={styles["pricing__features"]}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles["pricing__feature"]}>
                    <span className={styles["pricing__icon"]}>✅</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={styles["pricing__cta"]}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
