import React from "react";
import styles from "./TextField.module.css";

export default function TextField(props) {
  const { title, placeholder, required, name, value, setFormData } =
    props;

  const { type = "text" } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  return (
    <div className={styles.campo}>
      <label>{title}</label>
      <input
        title={title}
        name={name}
        onChange={(e) => handleChange(e)}
        value={value}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </div>
  );
}
