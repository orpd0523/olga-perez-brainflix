import "./App.scss";
import Navigation from "./components/NavigationSection/Navigation";
import Video from "./components/VideoSection/Video";
import VideoDetails from "./components/VideoDetailsSection/VideoDetails";
import Comments from "./components/CommentsSection/Comments";
import NextVideos from "./components/NextVideoSection/NextVideo";
import videoDetailsData from "./data/video-details.json"
import {useState} from "react"

function App(props) {
  const  [videoDetails, setVideoDetails] = useState(videoDetailsData)
  const [currentVideo, setCurrentVideo] = useState(videoDetails[0])
  return (
    <div className="App">
      <Navigation />
      <Video {...currentVideo}/>
      <VideoDetails {...currentVideo}/>
      <Comments {...currentVideo}/>
      <NextVideos 
        currentVideoId={currentVideo.id}
        setCurrentVideo={setCurrentVideo}
      />
    </div>
  );
}

export default App;
