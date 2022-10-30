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
    <span className={`${montserrat.className} ${styles.header}`}>
      Get In Touch
    </span>
    <div className={styles.linksContainer}>
      <div className={styles.linksRow}>
        <a href="mailto: vinsonemb_1511994@gmail.com" target="_blank">
          <IconButton mdiIcon={mdiEmail} />
        </a>
        <a href="https://www.linkedin.com/in/vinson-beduya/" target="_blank">
          <IconButton mdiIcon={mdiLinkedin} />
        </a>
      </div>

      <div className={styles.linksRow}>
        <a href="https://www.instagram.com/vinson.beduya/" target="_blank">
          <IconButton mdiIcon={mdiInstagram} />
        </a>
        <a href="https://github.com/justvinny" target="_blank">
          <IconButton mdiIcon={mdiGithub} />
        </a>
      </div>
    </div>
    <span className={montserratReg.className}>© Copyright Vinson Beduya 2022</span>
    <a href="#">
      <Icon path={mdiChevronUp} size={5.5} />
    </a>
  </div>
);

export default GetInTouch;
