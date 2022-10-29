import React from "react";
import Layout from "../components/layout";
import styles from "../styles/home.module.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ weight: "900" });

const Home = () => {
  const addHeadersIncrementally = () =>
    ["SOFTWARE ENGINEER", "ANDROID FANBOY", "BOOK LOVER", "NBA BUFF"].map(
      (header, index) => {
        return (
          <span
            key={header}
            className={`${styles.slideRight} ${styles.heroHeader} ${montserrat.className}`}
            style={{ animationDelay: `${index * 500 + 350}ms` }}
          >
            {header}
          </span>
        );
      }
    );

  return (
    <Layout>
      <div className={styles.backgroundImage} />
      <div className={styles.heroContainer}>
        <div className={styles.heroHeadersContainer}>
          {addHeadersIncrementally()}
        </div>

        <div className={styles.avatarContainer}>
          <img
            src="/images/profile-pic.jpg"
            className={styles.avatar}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
