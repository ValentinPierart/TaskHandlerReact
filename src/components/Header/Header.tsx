import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Header.module.css";
import Languages from "../Language/Language";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Header() {
  const { t } = useTranslation();

  return (
    <nav className={styles.navbar}>
      <Languages />
      <span className={styles.contact}>{t("contact")}</span>
    </nav>
  );
}

export default Header;
