import styles from "./video.module.css";
import CardFooter from "../Footer/CardFooter/CardFooter";

export default function Video(props) {
  const { title, img, url } = props.dataVideo;
  const { channelColor, setVideoEdit, dataVideo, setSelectedVideo } = props;

  async function deleteVideos(id) {
    try {
    const data = await fetch(`http://localhost:3000/Videos/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      url: "http://localhost:3000/Videos/" + id,
    });
    window.location.reload();
    }catch {
      window.confirm(`El video será eliminado cuando el proyecto este aprobado. Su numero de operación es: ` + id)
    }
  }

  const borderColor = { borderColor: channelColor };

  const videoSelected = (data) => {
    setSelectedVideo(dataVideo);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <article className={styles.videoCardContainer}>
      <div
        className={styles.videoSelected}
        onClick={() => videoSelected(dataVideo)}
      >
        CLICK AQUI PARA VER ESTE VIDEO!!!
      </div>
      <div className={styles.iframe} style={borderColor}>
        <p style={{ color: channelColor }}>{title}</p>
        <a href={"https://www.youtube.com/watch?v=" + url}>
          <img
            className={styles.img}
            src={"http://img.youtube.com/vi/" + img + "/hqdefault.jpg"}
            title={title}
            alt={title}
          />
        </a>
      </div>
      <CardFooter
        dataVideo={dataVideo}
        setVideoEdit={setVideoEdit}
        channelColor={channelColor}
        deleteVideos={deleteVideos}
      />
    </article>
  );
}
