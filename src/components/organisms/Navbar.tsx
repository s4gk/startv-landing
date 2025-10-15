"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { IconMenu, IconClose, SocialIcons, NavLinks } from "@/components";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-background px-6 py-4 border-b lg:border-none flex w-full gap-2 lg:px-16 lg:py-6 z-50 fixed">
      {/* Logo + Menú Toggle */}
      <div className="w-full lg:w-2/7 flex justify-between items-center">
        <div>Logo</div>
        <button onClick={toggleMenu} className="lg:hidden relative w-8 h-8">
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
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
                className="absolute inset-0 flex items-center justify-center"
              >
                <IconMenu />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Desktop menu */}
      <div className="hidden lg:flex lg:w-5/7 justify-between">
        <NavLinks />
        <SocialIcons />
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              onClick={() => setIsOpen(false)}
            />

            {/* Aside animado */}
            <motion.aside
              className="fixed top-[4rem] right-0 w-2/4 sm:w-2/5 h-[calc(100vh-4rem)] bg-white shadow-xl flex flex-col justify-between p-10 lg:hidden"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              <NavLinks setIsOpen={setIsOpen}/>
              <SocialIcons />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
