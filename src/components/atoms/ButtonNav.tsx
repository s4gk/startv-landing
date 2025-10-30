"use client";

import React from "react";
import Link from "next/link";
import styles from "./ButtonNav.module.scss";

interface ButtonNavProps {
  id: number;
  link: string;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  isActive?: boolean;
}

export const ButtonNav = ({
  id,
  link,
  label,
  onClick,
  isActive,
}: ButtonNavProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e, link);
  };

  return (
    <Link
      key={id}
      href={link}
      onClick={handleClick}
      className={`${styles["buttonnav"]} ${
        isActive ? styles["buttonnav--active"] : ""
      }`}
    >
      {label}
    </Link>
  );
};
