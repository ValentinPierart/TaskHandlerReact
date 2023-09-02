import React from "react";
import styles from "./Homepage.module.css";
import Header from "../../components/Header/Header";
import Skills from "../../components/Skills/Skills";
import ProfessionalHistory from "../../components/ProfessionalHistory/ProfessionalHistory";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Homepage() {
  return (
    <div>
      <nav className={styles.navbar}>
        <Header />
      </nav>
      <Skills />
      <ProfessionalHistory />
    </div>
  );
}

export default Homepage;
