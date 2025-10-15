"use client";

import { IFeaturesData } from "@/types";
import { motion } from "framer-motion";

export const FeatureCard = ({icon: Icon, title, description}: IFeaturesData) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative w-[260px] rounded-2xl bg-gradient-to-t from-green to-blue bg-white/30 bg-blend-lighten p-6 text-center shadow-md hover:shadow-lg border min-h-[13.75rem] lg:w-[420px] lg:p-12"
    >
      <div className="flex justify-center mb-4">
        <div className="flex p-4 items-center justify-center rounded-xl bg-white/30 backdrop-blur-sm border">
          <Icon />
        </div>
      </div>

      <h3 className="text-xl font-semibold text-black mb-2 lg:text-2xl">{title}</h3>
      <p className="text-sm text-black/80 lg:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
