import React from "react";
import { IconFacebook, IconWhatsapp, IconEmail } from "@/components";
import styles from "./SocilaIcons.module.scss";

export const SocialIcons = () => {
  return (
    <div className={styles["social"]}>
      <IconFacebook />
      <IconWhatsapp />
      <IconEmail />
    </div>
  );
};
