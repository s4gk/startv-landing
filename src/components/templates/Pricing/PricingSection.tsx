import { PricingData } from "@/lib";
import { AnimatedParagraph, CardPricing } from "@/components";
import styles from "./PricingSection.module.scss";

interface PricingProps {
  title: string;
  subtitle: string;
  plans: typeof PricingData;
}

export function PricingSection({ title, subtitle, plans }: PricingProps) {
  return (
    <section className={styles["pricing"]} id="pricing">
      <div className={styles["pricing__container"]}>
        <h2 className={styles["pricing__container-title"]}>{title}</h2>
        <AnimatedParagraph
          label={subtitle}
          delay={0.5}
          duration={0.5}
          className={styles["pricing__container-subtitle"]}
        />

        <div className={styles["pricing__cards"]}>
          {plans.map((plan, index) => (
            <CardPricing key={index} data={plan}/>
          ))}
        </div>
      </div>
    </section>
  );
}
