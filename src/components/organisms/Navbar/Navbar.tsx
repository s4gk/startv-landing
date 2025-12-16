"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IconMenu, IconClose, SocialIcons, NavLinks } from "@/components";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const pathname = usePathname();

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-30% 0% -70% 0%" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      // 👇 Si estamos en home, hace scroll suave
      e.preventDefault();
      const homeSection = document.querySelector("#home");
      if (homeSection) homeSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={styles["navbar"]}>
      {/* 🔥 Logo animado con navegación + scroll si ya está en home */}
      <Link href="#home" onClick={handleLogoClick}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className={styles["navbar__logo"]}
        >
          <Image
            src="/images/logo.webp"
            alt="Logo Star TV"
            width={70}
            height={70}
            unoptimized
          />
          <motion.span
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Star TV
          </motion.span>
        </motion.div>
      </Link>

      <div className={styles["navbar__menu"]}>
        <NavLinks
          activeSection={activeSection}
          onLinkClick={handleScrollTo}
          setIsOpen={setIsOpen}
        />
      </div>

      <div className={styles["navbar__icons"]}>
        <SocialIcons />
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

      {/* 🔥 Menú móvil */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={styles["navbar__backdrop"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              className={styles["navbar__aside"]}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
            >
              <NavLinks
                activeSection={activeSection}
                onLinkClick={handleScrollTo}
                setIsOpen={setIsOpen}
              />
              <SocialIcons />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
