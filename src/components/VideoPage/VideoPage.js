import Video from "../VideoSection/Video";
import VideoDetails from "../VideoDetailsSection/VideoDetails";
import Comments from "../CommentsSection/Comments";
import NextVideos from "../NextVideos/NextVideos";
import axios from 'axios';
import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function VideoPage(props) {
  const {videos} = props;
  const {videoid = videos[0].id} = useParams()
  const [currentVideo, setCurrentVideo] = useState({});
useEffect(()=>{
  const id = videoid
  axios.get('http://localhost:3001/videos/'+ id +'?api_key=219e369b-90a6-41bf-b7ae-59ad7724b87f')
    .then(response =>{
      setCurrentVideo(response.data)
  })
}, [videoid]);

  const {comments} = currentVideo
  return (
    <main>
      <Video {...currentVideo}/>
      <div className="app__body container">
        <div className="app__video">
          <VideoDetails {...currentVideo} />
          <Comments comments={comments}/>
        </div>
        <section className="app__aside">
          <NextVideos
            currentVideoId={currentVideo.id}
            videos={videos}
          /> 
        </section>
      </div>
    </main>
  );
}

export default VideoPage;
