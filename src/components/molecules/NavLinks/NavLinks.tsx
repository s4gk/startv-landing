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
    <ul className={styles.navlinks}>
      {navbarLinks.map(({ id, name, href }) => (
        <ButtonNav
          key={id}
          id={id}
          link={href}
          label={name}
          isActive={activeSection === href.replace("#", "")}
          onClick={onLinkClick}
        />
      ))}
    </ul>
  );
};
