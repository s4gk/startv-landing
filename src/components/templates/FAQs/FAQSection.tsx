import { AnimatedParagraph, Faqs } from "@/components";
import styles from "./FAQSection.module.scss";

interface FaqsProps {
  title: string;
  subtitle: string;
}

export function FAQSection ({title, subtitle}: FaqsProps) {
  return (
    <section className={styles["faq"]} id="faq">
      <h2 className={styles["faq__title"]}>{title}</h2>
      <AnimatedParagraph label={subtitle} delay={0.5} duration={0.5} className={styles["faq__subtitle"]} />

      <Faqs />
    </section>
  );
}
