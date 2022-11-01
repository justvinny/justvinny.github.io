import { useState } from "react";
import styles from "../styles/components/toggle-button.module.css";
import { Montserrat } from "@next/font/google";

interface Props {
  label: string;
  isActive: Boolean;
  setState: React.Dispatch<React.SetStateAction<Boolean>>;
  callback?: () => void;
}

const montserrat = Montserrat({ weight: "900" });

const ToggleButton = ({ label, isActive, setState, callback }: Props) => {
  const [isActiveState, setActiveState] = useState(isActive);

  const toggleState = () => {
    callback?.();
    setState(!isActiveState);
    setActiveState(!isActiveState);
  };

  return (
    <button
      type="button"
      className={`${montserrat.className} ${styles.toggleBtn} ${
        isActiveState ? styles.active : styles.inactive
      }`}
      onClick={toggleState}
    >
      {label}
    </button>
  );
};

export default ToggleButton;
