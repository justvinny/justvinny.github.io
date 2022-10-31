import Icon from "@mdi/react";
import styles from "../styles/components/icon-button.module.css";

interface Props {
  mdiIcon: string;
}

const IconButton = ({ mdiIcon }: Props) => (
  <button type="button" className={styles.iconButton}>
    <Icon path={mdiIcon} size={2.5} color="white" />
  </button>
);

export default IconButton;
