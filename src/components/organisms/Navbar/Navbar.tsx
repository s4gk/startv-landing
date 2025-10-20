"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { IconMenu, IconClose, SocialIcons, NavLinks } from "@/components";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
<<<<<<< HEAD:src/components/organisms/Navbar.tsx
    <nav className="bg-background px-6 py-4 border-b lg:border-none flex w-full gap-2 lg:px-16 lg:py-6 z-50 fixed w-full">
      {/* Logo + Menú Toggle */}
      <div className="w-full lg:w-2/7 flex justify-between items-center">
        <div>Logo</div>
        <button onClick={toggleMenu} className="lg:hidden relative w-8 h-8">
=======
    <nav className={styles.navbar}>
      {/* Logo + Toggle */}
      <div className={styles.navbar__start}>
        <div className={styles.navbar__logo}>Logo</div>
        <button onClick={toggleMenu} className={styles.navbar__toggle}>
>>>>>>> 38ababf (feat: 20/10/25 StarTV Landing Page):src/components/organisms/Navbar/Navbar.tsx
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`${styles}.navbar__toggle-icon`}
              >
                <IconClose />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className={`${styles}.navbar__toggle-icon`}
              >
                <IconMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Desktop menu */}
      <div className={styles.navbar__end}>
        <NavLinks />
        <SocialIcons />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={styles.navbar__backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              onClick={() => setIsOpen(false)}
            />

            <motion.aside
              className={styles.navbar__aside}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              <NavLinks setIsOpen={setIsOpen} />
              <SocialIcons />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
