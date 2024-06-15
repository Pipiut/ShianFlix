import styles from "./Banner.module.css";

export default function Banner({ selectedVideo }) {
  const {channel, url, description, title } = selectedVideo;

  return (
    <div className={styles.gradient}>
      <figure className={styles.banner}>
        <div className={styles.wrapperContain}>
          <h1 className={styles.titleCategory}>{channel}</h1>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.wrapperText}>{description}</p>
        </div>

        <iframe
          className={styles.wrapperImg}
          width="647.79px"
          height="333.58px"
          src={`https://www.youtube.com/embed/${url}`}
          title={title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="true"
        ></iframe>
      </figure>
    </div>
  );
}
