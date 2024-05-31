import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <figure
      className={styles.banner}
    >
    <div className={styles.gradient}></div>
    </figure>
  );
}
