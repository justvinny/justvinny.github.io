import styles from "../styles/pages/get-in-touch.module.css";
import { Montserrat } from "@next/font/google";
import Icon from "@mdi/react";
import {
  mdiEmail,
  mdiLinkedin,
  mdiInstagram,
  mdiGithub,
  mdiChevronUp,
} from "@mdi/js";
import IconButton from "../components/icon-button";

const montserrat = Montserrat({ weight: "900" });
const montserratReg = Montserrat({ weight: "400" });

const GetInTouch = () => (
  <div id="getInTouch" className={styles.getInTouchContainer}>
    <span className={`${montserrat.className} header`}>Get In Touch</span>
    <div className={styles.linksContainer}>
      <div className={styles.linksRow}>
        <a
          href="mailto: vinsonemb_1511994@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton mdiIcon={mdiEmail} ariaLabel="Email Me" />
        </a>
        <a
          href="https://www.linkedin.com/in/vinson-beduya/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton mdiIcon={mdiLinkedin} ariaLabel="View my LinkedIn" />
        </a>
      </div>

      <div className={styles.linksRow}>
        <a
          href="https://www.instagram.com/vinson.beduya/"
          target="_blank"
          rel="noreferrer"
        >
          <IconButton mdiIcon={mdiInstagram} ariaLabel="View my Instagram" />
        </a>
        <a href="https://github.com/justvinny" target="_blank" rel="noreferrer">
          <IconButton mdiIcon={mdiGithub} ariaLabel="View my GitHub" />
        </a>
      </div>
    </div>
    <span className={montserratReg.className}>
      © Copyright Vinson Beduya 2022
    </span>
    <a href="#" aria-label="Navigate to top of page.">
      <Icon path={mdiChevronUp} size={5.5} />
    </a>
  </div>
);

export default GetInTouch;
