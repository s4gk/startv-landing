"use client";

import React from "react";
import { motion } from "framer-motion";
import { features } from "@/data/FeaturesBar"; // Asumo que esta ruta es correcta
import { IconCircle } from "@/components";

export const FeaturesBar = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-black py-6 overflow-hidden"
    >
      {/* Contenedor de máscara */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap text-white uppercase text-sm font-semibold tracking-wide gap-8"
        >
          {/* Contenido 1 */}
          {features.map((item, index) => (
            <React.Fragment key={`${index}-1`}>
              <span className="flex items-center">{item.label}</span>
              <IconCircle />
            </React.Fragment>
          ))}

          {/* Contenido 2 (duplicado) */}
          {features.map((item, index) => (
            <React.Fragment key={`${index}-2`}>
              <span className="flex items-center">{item.label}</span>
              <IconCircle />
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </motion.section>

  );
};