import styles from "../styles/components/navbar.module.css";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import { Montserrat } from "@next/font/google";
import OutlinedButton from "./outlined-button";

interface NavLinkInterface {
  isRow: Boolean;
}

const montserrat = Montserrat({ weight: "900" });

const addMarginLeftOrTop = (isRow: Boolean) => (isRow ? "ml-1" : "mt-1");

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

  const NavLinks = ({ isRow }: NavLinkInterface) => (
    <>
      <li>
        <a href="#">
          <button
            type="button"
            className={`${styles.navLinkBtn} ${montserrat.className}`}
            onClick={dismissDrawer}
          >
            Home
          </button>
        </a>
      </li>
      <li className={addMarginLeftOrTop(isRow)}>
        <a href="#projects">
          <button
            type="button"
            className={`${styles.navLinkBtn}  ${montserrat.className}`}
            onClick={dismissDrawer}
          >
            Projects
          </button>
        </a>
      </li>
      <li className={addMarginLeftOrTop(isRow)}>
        <a href="#getInTouch">
          {isRow ? (
            <OutlinedButton label="Get in Touch" onClick={dismissDrawer} />
          ) : (
            <button
              type="button"
              className={`${styles.navLinkBtn}  ${montserrat.className}`}
              onClick={dismissDrawer}
            >
              Get in Touch
            </button>
          )}
        </a>
      </li>
    </>
  );

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
        <a href="#">
          <button
            type="button"
            className={`${styles.navBrand} ${montserrat.className}`}
          >
            Vinson Beduya
          </button>
        </a>
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
