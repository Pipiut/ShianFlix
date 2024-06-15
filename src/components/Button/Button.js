import styles from "./Button.module.css"

export default function Button({value, type }) {

  return (
    <button className={styles.button} type={type}>
      {value}
    </button>
  )
}

