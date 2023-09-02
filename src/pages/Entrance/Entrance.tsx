import React from "react";
import styles from "./Entrance.module.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Entrance() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className={styles.outer}>
        <div className={styles.inner}>
          <span className={styles.username}>Valentin Pierart</span>
          <div>
            <Link to="/home" className={styles.enter_link}>
              {t("enter")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Entrance;
