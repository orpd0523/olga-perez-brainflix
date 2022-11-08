import "./App.scss";
import Navigation from "./components/NavigationSection/Navigation";
import videoDetailsData from "./data/video-details.json";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./components/VideoPage/VideoPage";
import UploadVideo from "./components/UploadVideo/UploadVideo";

function App() {
  const [videoDetails] = useState(videoDetailsData);
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0]);
  function updateCurrentVideo(video) {
    const selectedVideo = videoDetails.find((vid) => {
      return vid.id === video.id;
    });
    setCurrentVideo(selectedVideo);
  }
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <VideoPage
                currentVideo={currentVideo}
                updateCurrentVideo={updateCurrentVideo}
              />
            }
          ></Route>
          <Route path="upload" element={<UploadVideo />}></Route>
          <Route
            path="videos/:videoid"
            element={
              <VideoPage
                currentVideo={currentVideo}
                updateCurrentVideo={updateCurrentVideo}
              />
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
