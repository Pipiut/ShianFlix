import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.png";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Link to="/">
          <section className={styles.container}>
            <img src={logo} alt="logo shianflix" />
          </section>
        </Link>
        <nav className={styles.container}>
          <Link to="./">
            <button className={styles.buttonHome}>HOME</button>
          </Link>

          <Link to="./NewVideo">
            <button className={styles.buttonNew}>NUEVO VIDEO</button>
          </Link>
        </nav>
      </header>
    </>
  );
}
