import styles from "./Footer.module.css";
import logo from "./logo.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={logo} alt="ShianFlix" />
        <h3>Desarrollado por Maria Cristina Gutierrez</h3>
      </div>
    </footer>
  );
}
