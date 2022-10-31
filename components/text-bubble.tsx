import styles from "../styles/components/text-bubble.module.css";

interface Props {
  label: string;
}

const TextBubble = ({ label }: Props) => (
  <span className={styles.textBubble}>{label}</span>
);

export default TextBubble;
