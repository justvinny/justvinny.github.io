import Icon from "@mdi/react";
import styles from "../styles/components/icon-button.module.css";

interface Props {
  mdiIcon: string;
  ariaLabel: string;
}

const IconButton = ({ mdiIcon, ariaLabel }: Props) => (
  <button type="button" className={styles.iconButton} aria-label={ariaLabel}>
    <Icon path={mdiIcon} size={2.5} color="white" />
  </button>
);

export default IconButton;
