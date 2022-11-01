import React from "react";
import styles from "../styles/pages/hero-section.module.css";
import { Montserrat } from "@next/font/google";
import OutlinedButton from "../components/outlined-button";
import Image from "next/image";

const montserrat = Montserrat({ weight: "900" });

const HeroSection = () => {
  const addHeadersIncrementally = () =>
    ["Software Engineer", "Android Fanboy", "Book Lover", "NBA Buff"].map(
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
    <>
      <div className={styles.backgroundImage} />
      <div className={styles.heroContainer}>
        <div className={styles.heroHeadersContainer}>
          {addHeadersIncrementally()}
          <a href="#projects" className={styles.fadeIn}>
            <OutlinedButton label="See My Work" />
          </a>
        </div>
        <div className={styles.avatarContainer}>
          <Image src="/images/profile-pic.jpg" alt="Photo of me." className={styles.avatar}  width={450} height={450} />
        </div>
      </div>
      <span id="projects" className={styles.projectsAnchor} />
    </>
  );
};

export default HeroSection;