import styles from "../styles/components/navbar.module.css";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
import Link from "next/link";

interface NavLinkInterface {
  isRow: Boolean;
}

const addMarginLeftOrTop = (isRow: Boolean) => (isRow ? "ml-1" : "mt-1");

const NavLinks = ({ isRow }: NavLinkInterface) => (
  <>
    <li className={styles.navLink}>
      <Link href="/">Home</Link>
    </li>
    <li className={`${styles.navLink} ${addMarginLeftOrTop(isRow)}`}>
      <Link href="/projects">Projects</Link>
    </li>
    <li className={`${styles.navLink} ${addMarginLeftOrTop(isRow)}`}>
      <Link href="/">Contact Me</Link>
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
        <span className={styles.navBrand}>Vinson Beduya</span>
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
