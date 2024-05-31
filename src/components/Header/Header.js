import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.png"
import Button from "../Button/Button";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";

export default function Header() {
  return (
    <>
    <header className={styles.header}>
        {/* <Link to="/"> */}
        <section className={styles.container}>
            <img src={logo} alt="logo shianflix"/>
        </section>
        {/* </Link> */}
        <nav className={styles.container}>
            {/* <Link to="./"> */}
                <Button value="HOME"/>
            {/* </Link> */}

            {/* <Link to="./NuevoVideo"> */}
                <Button value="NUEVO VIDEO"/>
            {/* </Link> */}
        </nav>

    </header>
        <Banner/>
        <Footer/>
        </>
  )
}
