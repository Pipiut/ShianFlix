import Button from "components/Button/Button";
import OptionList from "components/OptionList/OptionList";
import TextField from "components/TextField/TextField";
import styles from "./NewVideoForm.module.css";
import React, { useState } from "react";

export default function NewVideoForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    channel: "",
    img: "",
    url: "",
  });

  async function onSubmit(newVideo) {
    const data = await fetch("http://localhost:3000/Videos", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newVideo),
    });
    if (!data.ok) {
      alert("Aún no es posible enviar el video");
      window.location.href = "./";
    }
    if (data.ok) {
      return alert("Nuevo Video agregado en la galería");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newVideo = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      channel: formData.channel,
      img: formData.img,
      url: formData.url,
    };
    onSubmit(newVideo);

    setFormData({
      id: "",
      url: "",
      title: "",
      img: "",
      channel: "",
      description: "",
    });
    e.target.reset();
  };

  return (
    <>
      <section className={styles.formContainer}>
        <div className={styles.title}>
          <h1>NUEVO VIDEO</h1>
          <h3>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA</h3>
        </div>
        <h2>Crear Tarjeta</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.line}>
            <TextField
              title="Título"
              placeholder="título del video"
              required
              name="title"
              setFormData={setFormData}
            />
            <OptionList
              name="channel"
              value={formData.channel}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div className={styles.line}>
            <TextField
              title="ID de la imagen"
              placeholder="Ingrese el ID de la imagen"
              required
              name="img"
              setFormData={setFormData}
            />
            <TextField
              title="ID del Vídeo"
              placeholder="Ingrese el embed ID del vídeo"
              required
              name="url"
              setFormData={setFormData}
            />
          </div>
          <div className={styles.line}>
            <TextField
              title="Descripción"
              placeholder="¿De qué se trata este vídeo?"
              required
              name="description"
              setFormData={setFormData}
            />
          </div>
          <div className={styles.btn}>
            <Button value="GUARDAR" type="submit" />
            <Button value="LIMPIAR" type="reset" />
          </div>
        </form>
      </section>
    </>
  );
}
