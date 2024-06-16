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
      /* alert(`Error al importar la galería de Canales desde http://localhost:3000/Channels`, error); */
      setChannels([
        {
          "id": "5",
          "name": "ShianOF",
          "color": "#7fff00"
        },
        {
          "id": "4",
          "name": "ShianDB",
          "color": "#00C86F"
        },
        {
          "id": "3",
          "name": "Shian03",
          "color": "#d2691e"
        },
        {
          "id": "2",
          "name": "ShianFT",
          "color": "#9acd32"
        },
        {
          "id": "1",
          "name": "Memes Cortos",
          "color": "#daa520"
        }
      ])
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
