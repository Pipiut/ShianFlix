import React, { useEffect, useState } from "react";
import styles from "./OptionList.module.css";

export default function OptionList({ value, formData, setFormData }) {
  
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/Channels", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const data = await response.json();

      setChannels(data);
    } catch (error) {
      alert(`Error al importar la galería de Canales desde http://localhost:3000/Channels`, error);
    }
  }
  const handleChange = (e) => {
    const { value } = e.target;
    const updatedUserData = { ...formData, channel: value };
    setFormData(updatedUserData);
  };

  return (
    <div className={styles.optionList}>
      <label>Canales</label>
      <select required value={channels.name} onChange={handleChange}>
        <option value="" defaultValue="">
          {`${value}` || "Seleccione el canal"}
        </option>
        {channels.map((channel, index) => (
          <option key={index} name={channel.name} value={channel.name}>
            {channel.name}
          </option>
        ))}
      </select>
    </div>
  );
}
