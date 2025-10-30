import React from "react";
import styles from "./CardPricing.module.scss";
import { IconCheck } from "@/components";

interface data {
    name: string;
    price: string;
    features: string[];
    isPopular: boolean;
    cta: string;
}

interface CardPricingProps {
   key: number;
   data: data
}

export const CardPricing = ({key, data}: CardPricingProps) => {
  return (
    <div
      key={key}
      className={`${styles["card"]} ${
        data.isPopular ? styles["card__popular"] : ""
      }`}
    >
      {data.isPopular && (
        <p className={styles["card__popular-badge"]}>Más Popular</p>
      )}
      <div
        className={`${
          data.isPopular
            ? styles["card__description-popular"]
            : styles["card__description"]
        }`}
      >
        <h3 className={styles["card__description-name"]}>{data.name}</h3>

        <p className={styles["card__description-price"]}>
          ${data.price}
          <span className={styles["card__description-price-unit"]}>
            por mes
          </span>
        </p>
      </div>

      <ul className={styles["card__features"]}>
        {data.features.map((feature, i) => (
          <li key={i} className={styles["card__features-ft"]}>
            <span className={styles["card__features-icon"]}>
              <IconCheck />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`${
          data.isPopular
            ? styles["card__cta-popular"]
            : styles["card__cta"]
        }`}
      >
        {data.cta}
      </button>
    </div>
  );
};
