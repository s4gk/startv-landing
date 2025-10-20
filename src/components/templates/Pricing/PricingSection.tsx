import { pricingPlans } from '@/lib';
import styles from './PricingSection.module.scss';

interface PricingProps {
  title: string;
  plans: typeof pricingPlans;
}

export function PricingSection({ title, plans }: PricingProps) {
  return (
    <section className={styles.pricing}>
      <div className={styles.pricing__container}>
        <h2 className={styles.pricing__title}>{title}</h2>

        <div className={styles.pricing__grid}>
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${styles.pricing__card} ${
                plan.isPopular ? styles.pricing__card_popular : ''
              }`}
            >
              {plan.isPopular && (
                <p className={styles.pricing__badge}>Más Popular</p>
              )}

              <h3 className={styles.pricing__name}>{plan.name}</h3>

              <p className={styles.pricing__price}>
                ${plan.price}
                <span className={styles.pricing__price_unit}>/mes</span>
              </p>

              <ul className={styles.pricing__features}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.pricing__feature}>
                    <span className={styles.pricing__icon}>✅</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={styles.pricing__cta}>{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
