import React from "react";
import { IconFacebook, IconWhatsapp, IconEmail } from "@/components";
import { motion } from "framer-motion";
import styles from "./SocilalIcons.module.scss";

const icons = [
  { id: 1, element: <IconFacebook /> },
  { id: 2, element: <IconWhatsapp /> },
  { id: 3, element: <IconEmail /> },
];

export const SocialIcons = () => {
  return (
    <motion.div
      className={styles["social"]}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {icons.map(({ id, element }) => (
        <motion.div
          key={id}
          className={styles["social__icon"]}
          variants={{
            hidden: { opacity: 0, y: 10, scale: 0.8 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
          }}
          whileHover={{ scale: 1.2, y: -3, transition: { type: "spring", stiffness: 400, damping: 15 } }}
          whileTap={{ scale: 0.95 }}
        >
          {element}
        </motion.div>
      ))}
    </motion.div>
  );
};
