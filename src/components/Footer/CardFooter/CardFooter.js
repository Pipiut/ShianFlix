import styles from "./CardFooter.module.css";
import editicon from "./VectorEdit.png";
import deleteicon from "./VectorDelete.png";
import { Link } from "react-router-dom";

export default function CardFooter(props) {
  const { channelColor, deleteVideos, setVideoEdit, dataVideo } = props;

  const borderColor = {
    borderColor: channelColor,
    boxShadow: `0px -4px 5px 3px inset`+channelColor,
  };

  const handleClick = (id) => {
    if (window.confirm("¿Deseas eliminar este Video?")) {
      deleteVideos(id);
      alert("El video ha sido eliminado de la galeria");
    }
  };

  const handleEdit = (dataVideo) => {
    setVideoEdit(dataVideo);
  };

  return (
    <>
      <footer style={borderColor} className={styles.cardFooterContainer}>
        <div
          className={styles.iContainer}
          onClick={() => handleClick(dataVideo.id)}
        >
          <img className={styles.icon} src={deleteicon} alt="delete" />
          <p className={styles.iconText}>BORRAR</p>
        </div>
        <Link to={"Modal"}>
          <div
            className={styles.iContainer}
            onClick={() => handleEdit(dataVideo)}
          >
            <img className={styles.icon} src={editicon} alt="edit" />
            <p className={styles.iconText}>EDITAR</p>
          </div>
        </Link>
      </footer>
    </>
  );
}