import { motion } from "framer-motion";
import React from "react";
import { navbarLinks } from "@/data";
import { ButtonNav } from "@/components";
import styles from "./NavLinks.module.scss";

interface NavLinksProps {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onLinkClick?: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
  activeSection?: string;
}

export const NavLinks = ({
  setIsOpen,
  onLinkClick,
  activeSection,
}: NavLinksProps) => {
  return (
    <motion.ul
      className={styles.navlinks}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {navbarLinks.map(({ id, name, href }) => (
        <motion.li
          key={id}
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 20, skewX: 10 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              skewX: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            },
          }}
          whileHover={{
            scale: 1.05,
            x: 3,
            transition: { type: "spring", stiffness: 300, damping: 15 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <ButtonNav
            id={id}
            link={href}
            label={name}
            isActive={activeSection === href.replace("#", "")}
            onClick={onLinkClick}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};
