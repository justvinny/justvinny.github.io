import styles from "../styles/components/navbar.module.css";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Link from "next/link";
import { Montserrat } from "@next/font/google";

interface NavLinkInterface {
  isRow: Boolean;
}

const montserrat = Montserrat({ weight: "900" });

const addMarginLeftOrTop = (isRow: Boolean) => (isRow ? "ml-1" : "mt-1");

const NavLinks = ({ isRow }: NavLinkInterface) => (
  <>
    <li className={`${styles.navLink} ${montserrat.className}`}>
      <Link href="/" style={{zIndex: 2}}>HOME</Link>
    </li>
    <li
      className={`${styles.navLink} ${addMarginLeftOrTop(isRow)} ${
        montserrat.className
      }`}
    >
      <Link href="/projects">PROJECTS</Link>
    </li>
    <li
      className={`${styles.navLink} ${addMarginLeftOrTop(isRow)} ${
        montserrat.className
      }`}
    >
      <Link href="/">CONTACT ME</Link>
    </li>
  </>
);

const NavBar = () => {
  const [isDrawerShown, setDrawerShown] = useState(false);
  const isValidWidthForDrawer = useMediaQuery(
    "only screen and (max-width: 1023px)"
  );

  const showDrawer = () => {
    setDrawerShown(true);
  };

  const dismissDrawer = () => {
    setDrawerShown(false);
  };

  return (
    <>
      {isDrawerShown && isValidWidthForDrawer ? (
        <div className={styles.drawerOverlay}>
          <button
            type="button"
            aria-label="Drawer Overlay"
            className={styles.backdropBtn}
            onClick={dismissDrawer}
          />
          <div className={styles.drawer}>
            <ul>
              <NavLinks isRow={false} />
            </ul>
          </div>
        </div>
      ) : null}
      <div id={styles.navBar}>
        <span className={`${styles.navBrand} ${montserrat.className}`}>
          VINSON BEDUYA
        </span>
        <ul id={styles.navList} className="flex-row-start-center">
          <NavLinks isRow={true} />
        </ul>
        <button
          type="button"
          aria-label="Menu Button"
          className={styles.navMenuBtn}
          onClick={showDrawer}
        >
          <Icon path={mdiMenu} size={1.5} color="white" />
        </button>
      </div>
    </>
  );
};

export default NavBar;
