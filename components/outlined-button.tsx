import styles from "../styles/components/outlined-button.module.css";
import { Montserrat } from "@next/font/google";

interface Props {
  label: string;
  onClick?: () => void;
  fontFamily?: string;
  btnStyle?: string;
  extraBtnStyle?: Array<string>;
}

const montserrat = Montserrat({ weight: "900" });

const OutlinedButton = ({
  label,
  onClick,
  fontFamily = montserrat.className,
  btnStyle = styles.outlinedBtn,
  extraBtnStyle = [],
}: Props) => (
  <button
    type="button"
    className={`${fontFamily} ${btnStyle} ${extraBtnStyle.map(
      (extraStyle) => `${extraStyle} `
    )}`}
    onClick={onClick}
  >
    <span>{label}</span>
  </button>
);

export default OutlinedButton;
