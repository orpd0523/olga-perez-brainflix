import Video from "../VideoSection/Video";
import VideoDetails from "../VideoDetailsSection/VideoDetails";
import Comments from "../CommentsSection/Comments";
import NextVideos from "../NextVideoSection/NextVideo";
import axios from 'axios';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function VideoPage(props) {
  const {videos} = props;
  const {videoid = videos[0].id} = useParams()
  const [currentVideo, setCurrentVideo] = useState({});
useEffect(()=>{
  const id = videoid
  axios.get('https://project-2-api.herokuapp.com/videos/'+ id +'?api_key=219e369b-90a6-41bf-b7ae-59ad7724b87f')
    .then(response =>{
      setCurrentVideo(response.data)
  })
}, [videoid]);
  return (
    <div>
      <Video {...currentVideo}/>
      <div className="app__body container">
        <div className="app__video">
          <VideoDetails {...currentVideo} />
          <Comments {...currentVideo} />
        </div>
        <div className="app__aside">
          <NextVideos
            currentVideoId={currentVideo.id}
            videos={videos}
          /> 
        </div>
      </div>
    </div>
  );
}

export default VideoPage;
