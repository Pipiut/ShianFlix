import { useEffect, useState } from "react";
import styles from "./Channel.module.css";
import Video from "components/VideoCard/Video";
import Slider from "react-slick";
import React from "react";
import Loading from "components/Loading";
/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */

export default function Channel(props) {
  const {
    channelColor,
    channelName,
    setVideoEdit,
    setSelectedVideo,
  } = props;
  const styleColorChannel = { backgroundColor: channelColor };
  const [data, setData] = useState( [
    {
      "id": "1",
      "title": "TENGO PROHIBIDO TOCAR EL COLOR VERDE EN STUMBLE GUYS",
      "description": "2,988 views  May 18, 2024 Si toco algo verde del mapa en stumble guys pierdo la partida",
      "channel": "ShianOF",
      "img": "hXWvuwRgRb8",
      "url": "hXWvuwRgRb8"
    },
    {
      "id": "2",
      "title": "SORTEO DE 5.000 GEMAS EN STUMBLE GUYS Y JUEGO BLOCK DASH EN EQUIPOS",
      "description": "190,476 views  Streamed live on Jun 7, 2024  #stumbleguys #stumbleguys",
      "channel": "ShianDB",
      "img": "4ArtvlopiiQ",
      "url": "4ArtvlopiiQ"
    },
    {
      "id": "3",
      "title": "WORLD RECORD EN DONT BE JELLY EN STUMBLE GUYS",
      "description": "182 views  May 22, 2024 World Record en el mapa de Dont Be Jelly de la actualizacion de bob esponja en stumble guys",
      "channel": "ShianOF",
      "img": "q9IbYoux_d0",
      "url": "q9IbYoux_d0"
    },
    {
      "id": "4",
      "title": "STUMBLE GUYS JUGANDO BLOCK DASH EN EQUIPOS",
      "description": "43,563 views  Streamed live on Jun 5, 2024  #stumbleguys #stumbleguys",
      "channel": "ShianDB",
      "img": "jLrCwX7VivY",
      "url": "jLrCwX7VivY"
    },
    {
      "id": "5",
      "title": "LOS MOMENTOS MAS DIVERTIDOS DE STUMBLE GUYS #1",
      "description": "8,654 views  Sep 3, 2022 Muestro los momentos mas divertidos y graciosos de Stumble guys",
      "channel": "Shian03",
      "img": "fbQ7f6TK9IU",
      "url": "fbQ7f6TK9IU"
    },
    {
      "id": "6",
      "title": "BLOCK DASH EN STUMBLE GUYS JUGANDO CON EQUIPOS",
      "description": "318 views  Streamed live on Jun 5, 2024 Juego block dash con suscriptores en stumble guys",
      "channel": "ShianOF",
      "img": "80XEPt41L2Y",
      "url": "80XEPt41L2Y"
    },
    {
      "id": "7",
      "title": "Ganando partidas en stumble guys",
      "description": "15K views  1 year ago Partidas de stumble guys que gane en los directos que hago todos los días en youtube!",
      "channel": "Shian03",
      "img": "Z_YW2v7AxN0",
      "url": "Z_YW2v7AxN0"
    },
    {
      "id": "edf12301-4a73-4344-a50d-c63c613837bf",
      "title": "LOS MEJORES PRO TIPS PARA APRENDER EN STUMBLE GUYS",
      "description": "18,517 vistas  30 jul 2022 Enseño como pasar los mapas de stumble guys mostrando los pro tips y atajos del juego.",
      "channel": "Shian03",
      "img": "dRY7FEcV29I",
      "url": "dRY7FEcV29I"
    },
    {
      "id": "bc2fe101-c8c1-47ab-b20d-95281411f7bf",
      "title": "Todos los Países del Mundo Compiten por $250,000 - Reacción a ‪@MrBeast‬",
      "description": "4,785 vistas  19 ago 2023",
      "channel": "ShianDB",
      "img": "bFw1Q4p2mwU",
      "url": "bFw1Q4p2mwU"
    },
    {
      "id": "5610ac22-9d45-45e9-8716-13388d17db6a",
      "title": "TOP 7 MEJORES JUEGOS PARA ANDROID EN 2023",
      "description": " 3,314 vistas  20 ago 2022 Juego los mejores juegos de play store de este mes",
      "channel": "ShianDB",
      "img": "HLO5AKVxuEU",
      "url": "HLO5AKVxuEU"
    },
    {
      "id": "b0ba52e6-62b7-4c35-9187-7c338b147197",
      "title": "BETA 0.72 DE STUMBLE GUYS NOS TRAE NUEVAS SKINS DE LOS Looney Tunes",
      "description": "506 vistas  16 may 2024 BETA 0.72 DE STUMBLE GUYS NOS TRAE NUEVAS SKINS DE LOS Looney Tunes",
      "channel": "ShianOF",
      "img": "0TYJ0NagaY0",
      "url": "0TYJ0NagaY0"
    },
    {
      "id": "6c1bbd5b-f7f2-42da-8d0c-222c40f4e8c8",
      "title": "COMPLETO TODO EL PASE DE STUMBLE GUYS Y DESBLOQUEO LA MEJOR SKIN DEL JUEGO",
      "description": "164 vistas  8 jun 2024",
      "channel": "ShianOF",
      "img": "JboGw2nc4Rg",
      "url": "JboGw2nc4Rg"
    },
    {
      "id": "380bc269-3418-44de-949c-f1b4cfc350ff",
      "title": "STUMBLE GUYS SACA UN NUEVO MAPA DIVERTIDO LLAMADO RUSH HOUR LEGENDARY",
      "description": "335 vistas  30 may 2024",
      "channel": "ShianOF",
      "img": "RTuLfVGKTec",
      "url": "RTuLfVGKTec"
    },
    {
      "id": "3a91d19d-413d-4da8-9c7c-e9bcf03f8bfc",
      "title": "LOGRO EL DESAFIO MAS DIFICIL DE STUMBLE GUYS EN BLOCK DASH CON EQUIPOS",
      "description": "203 vistas  12 may 2024 Juego block dash en equipos y trato de hacer el reto mas dificil del juego ganando 4 vs 1 sin poder revivir a mis compañeros",
      "channel": "ShianOF",
      "img": "kNCYrRCJhUw",
      "url": "kNCYrRCJhUw"
    },
    {
      "id": "f011d34f-db45-46ec-a338-aca5ad1a2a94",
      "title": "CUANTAS CORONAS PUEDO GANAR EN 10 MINUTOS JUGANDO STUMBLE GUYS",
      "description": "175 vistas  15 may 2024 Hago un reto nuevo en stumble guys tratando de ver cuantas coronas puedo conseguir en 10 minutos",
      "channel": "ShianOF",
      "img": "6QWEUkhYVN8",
      "url": "6QWEUkhYVN8"
    },
    {
      "id": "0d67b9e5-8b05-41ae-aebc-3ad9bfd4fdfe",
      "title": "TENGO PROHIBIDO tocar los COLORES de ARGENTINA en STUMBLE GUYS",
      "description": "350 vistas  10 feb 2024  #stumbleguys No puedo tocar los colores de argentina en este video de stumble guys #stumbleguys",
      "channel": "ShianDB",
      "img": "XGI3392jwG8",
      "url": "XGI3392jwG8"
    },
    {
      "id": "2ec07429-23f3-4c47-a3df-3282e6f375de",
      "title": "MEMES PARA VER SOLITOS #1",
      "description": "4,226 vistas  3 mar 2022 Subo una recopilacion de los mejores memes del 2022",
      "channel": "Memes Cortos",
      "img": "hR8ZEevM1r0",
      "url": "hR8ZEevM1r0"
    }
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:3000/Videos", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const getData = await response.json();

      setData(getData.filter((video) => video.channel === channelName));
    } catch (error) {
      /* alert(`Error fetching data:`, error); */
      setData(data.filter((video) => video.channel === channelName));
    }
  }
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.channelContainer}>
      <div style={styleColorChannel} className={styles.title}>
        {channelName}
      </div>
      {data.length === 0 ? 
      <Loading></Loading> : 
      <Slider {...settings}>
        {
          data.map((video, index) => {
          
          return (
            <Video
              setSelectedVideo={setSelectedVideo}
              setVideoEdit={setVideoEdit}
              key={index}
              dataVideo={video}
              channelColor={channelColor}
            />
          );
        })}
      </Slider>}
    </section>
  );
}
