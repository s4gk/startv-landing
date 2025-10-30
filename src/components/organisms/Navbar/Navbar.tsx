"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { IconMenu, IconClose, SocialIcons, NavLinks } from "@/components";
import styles from "./Navbar.module.scss";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar__start"]}>
        <div className={styles["navbar__logo"]}>
          <Image src="/images/logo.png" alt="Logo Star TV" width={50} height={50}/>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles["navbar__toggle"]}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                className={styles["navbar__toggle-icon"]}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
              >
                <IconClose />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                className={styles["navbar__toggle-icon"]}
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
              >
                <IconMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      <div className={styles["navbar__end"]}>
        <NavLinks
          activeSection={activeSection}
          onLinkClick={handleScrollTo}
          setIsOpen={setIsOpen}
        />
        <SocialIcons />
      </div>
    </nav>
  );
};
