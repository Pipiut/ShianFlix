import styles from "./Button.module.css"

export default function Button(prop) {
  return (
    <button className={styles.button}>{prop.value}</button>
  )
}

