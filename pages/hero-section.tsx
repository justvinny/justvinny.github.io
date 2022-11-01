import { useState } from "react";
import styles from "../styles/pages/hero-section.module.css";
import { Montserrat } from "@next/font/google";
import OutlinedButton from "../components/outlined-button";
import Image from "next/image";

const montserrat = Montserrat({ weight: "900" });

const HeroSection = () => {
  const [isAvatarLoaded, setAvatarLoaded] = useState(false);

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

  const addHeadersSkeleton = () =>
    Array(5).map((i) => (
      <span
        key={`${i}temp`}
        className={`${styles.slideRightSkeleton} ${styles.heroHeader} ${montserrat.className}`}
      />
    ));

  return (
    <>
      <div className={styles.backgroundImage} />
      <div className={styles.heroContainer}>
        <div className={styles.heroHeadersContainer}>
          {isAvatarLoaded ? (
            <>
              {addHeadersIncrementally()}
              <a href="#projects" className={styles.fadeIn}>
                <OutlinedButton label="See My Work" />
              </a>
            </>
          ) : (
            addHeadersSkeleton()
          )}
        </div>
        <div className={styles.avatarContainer}>
          <Image
            src="/images/profile-pic.jpg"
            alt="Photo of me."
            className={styles.avatar}
            style={{ visibility: isAvatarLoaded ? "visible" : "hidden" }}
            width={450}
            height={450}
            onLoad={() => setAvatarLoaded(true)}
          />
        </div>
      </div>
      <span id="projects" className={styles.projectsAnchor} />
    </>
  );
};

export default HeroSection;
