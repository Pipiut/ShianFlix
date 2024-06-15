import styles from "./PageFooter.module.css";
import logo from "./logo.png";

export default function PageFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <img src={logo} alt="ShianFlix" />
        <h3>Desarrollado por ꧁| 𝙲𝚁𝙸𝚂 |꧂</h3>
      </div>
    </footer>
  );
}