import "./App.scss";
import Navigation from "./components/NavigationSection/Navigation";
import Video from "./components/VideoSection/Video";
import VideoDetails from "./components/VideoDetailsSection/VideoDetails";
import Comments from "./components/CommentsSection/Comments";
import NextVideos from "./components/NextVideoSection/NextVideo";
import videoDetailsData from "./data/video-details.json";
import { useState } from "react";

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
    <div className="app">
      <Navigation />
      <Video {...currentVideo} />
      <div className="app__body container">
        <div className="app__video">
          <VideoDetails {...currentVideo} />
          <Comments {...currentVideo} />
        </div>
        <div className="app__aside">
          <NextVideos
            currentVideoId={currentVideo.id}
            setCurrentVideo={updateCurrentVideo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
