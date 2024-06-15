import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import DefaultPage from "pages/DefaultPage/DefaultPage";
import NewVideoForm from "pages/NewVideoForm/NewVideoForm";
import Modal from "components/Modal/Modal";
import NotFound from "./pages/NotFound/index";

function AppRoutes() {
  const [editVideos, setVideoEdit] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState({
    id: "5",
    title: "LOS MOMENTOS MAS DIVERTIDOS DE STUMBLE GUYS #1",
    description:
      "8,654 views  Sep 3, 2022 Muestro los momentos mas divertidos y graciosos de Stumble guys",
    channel: "ShianDB",
    img: "fbQ7f6TK9IU",
    url: "https://www.youtube.com/watch?v=fbQ7f6TK9IU",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route
            index
            element={
              <Home
                selectedVideo={selectedVideo}
                setSelectedVideo={(data) => setSelectedVideo(data)}
                setVideoEdit={(data) => setVideoEdit(data)}
              />
            }
          ></Route>
          <Route path="NewVideo" element={<NewVideoForm />}></Route>
          <Route
            path="Modal"
            element={<Modal editVideos={editVideos} />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
