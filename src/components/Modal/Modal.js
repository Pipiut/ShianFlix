import React, { useState } from "react";
import styles from "./Modal.module.css";
import cross from "./crosscancel.png";
import TextField from "../TextField/TextField";
import OptionList from "components/OptionList/OptionList";
import Button from "components/Button/Button";

export default function Modal({ editVideos }) {
  const [formData, setFormData] = useState({
    id: editVideos.id,
    title: editVideos.title,
    description: editVideos.description,
    channel: editVideos.channel,
    img: editVideos.img,
    url: editVideos.url,
  });

  async function onSubmit(formData) {
    const { id, title } = formData;
    const data = await fetch(`http://localhost:3000/Videos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!data.ok) {
      alert("No fue posible ACTUALIZAR el video: " + title);
      window.location.href = "./";
    }
    if (data.ok) {
      window.location.href = "./";
      alert("El video ha sido correctamente ACTUALIZADO");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));

    onSubmit(formData);

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

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = "./";
  };
  return (
    <>
      <div className={styles.overlay}>
        <dialog open={!!editVideos}>
          <div className={styles.dialogStyled}>
            <button
              className={styles.buttonClose}
              onClick={(e) => handleClick(e)}
              formMethod="dialog"
            >
              <img src={cross} alt="cerrar ventana" />
            </button>
            <h3>EDITAR VIDEO</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
              <TextField
                title="Título"
                placeholder="título del video"
                required
                name="title"
                value={formData.title}
                setFormData={setFormData}
              />
              <OptionList
                name="channel"
                value={formData.channel}
                formData={formData}
                setFormData={setFormData}
              />
              <TextField
                title="ID de la Imagen"
                placeholder="Ingrese el ID de la imagen"
                required
                name="img"
                value={formData.img}
                setFormData={setFormData}
              />
              <TextField
                title="ID del Vídeo"
                placeholder="Ingrese el ID del vídeo"
                required
                name="url"
                value={formData.url}
                setFormData={setFormData}
              />
              <TextField
                className={styles.prueba}
                title="Descripción"
                placeholder="¿De qué se trata este vídeo?"
                required
                name="description"
                value={formData.description}
                setFormData={setFormData}
              />
              <div className={styles.btn}>
                <Button value="GUARDAR" type="submit" />
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}
