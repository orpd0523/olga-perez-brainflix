import "./App.scss";
import Navigation from "./components/NavigationSection/Navigation";
import Video from "./components/VideoSection/Video";
import VideoDetails from "./components/VideoDescriptionSection/VideoDetails";
import Comments from "./components/CommentsSection/Comments";
import NextVideos from "./components/NextVideoSection/NextVideo";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Video />
      <VideoDetails />
      <Comments />
      <NextVideos />
    </div>
  );
}

export default App;
