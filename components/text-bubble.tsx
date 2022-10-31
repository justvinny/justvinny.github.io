import styles from "../styles/components/text-bubble.module.css";

interface Props {
  label: string;
}

const TextBubble = ({ label }: Props) => (
  <div className={styles.textBubble}>{label}</div>
);

export default TextBubble;
