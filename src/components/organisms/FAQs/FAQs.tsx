"use client";

import { useState } from "react";
import styles from "./FAQs.module.scss";
import { faqs } from "@/lib";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrow } from "@/components/atoms/icons/IconArrow";

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles["faq"]}>
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            layout
            className={styles["faq__item"]}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <button
              className={`${styles["faq__question"]} ${
                isOpen ? styles["faq__question--active"] : ""
              }`}
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <motion.span
                className={styles["faq__icon"]}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <IconArrow />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  className={styles["faq__answer"]}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
                    opacity: { duration: 0.3 },
                  }}
                >
                  <motion.p
                    layout
                    initial={{ y: -5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -5, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
