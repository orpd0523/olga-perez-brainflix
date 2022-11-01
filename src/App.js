import './App.scss';
import Navigation from './components/NavigationSection/Navigation'; 
import Video from './components/VideoSection/Video'; 
import VideoDescription from './components/VideoDescriptionSection/VideoDescription';
import Comments from './components/CommentsSection/Comments';
import NextVideos from './components/NextVideoSection/NextVideo';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Video/>
      <VideoDescription/>
      <Comments/>
      <NextVideos/>
    </div>
  );
}

export default App;
