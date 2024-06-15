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
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const data = await fetch("http://localhost:3000/Videos", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const getData = await data.json();

      setData(getData.filter((video) => video.channel === channelName));
    } catch (error) {
      alert(`Error fetching data:`, error);
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
