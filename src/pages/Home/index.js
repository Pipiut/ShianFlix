import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Banner from "../../components/Banner/Banner";
import Channel from "../../components/Channel/Channel";

export default function Home({setVideoEdit, selectedVideo, setSelectedVideo}) {

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
  };

  return (
    <>
      <Banner selectedVideo={selectedVideo}/>
      <section className={styles.container}>
        {channels.map( (channel) => (
            <Channel 
            setSelectedVideo={setSelectedVideo}
            setVideoEdit={setVideoEdit}
            key={channel.id}
            channelName={channel.name}
            channelColor={channel.color}
          />)
        )}    
      </section>
    </>
  );
}
