import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetailsSection/VideoDetails";
import Comments from "../../components/CommentsSection/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VideoPage(props) {
  const [videos, setVideos] = useState([]);
  const { videoid } = useParams();
  const [currentVideo, setCurrentVideo] = useState({});
  useEffect(() => {
    axios
      .get(
        "http://localhost:3001/videos?api_key=219e369b-90a6-41bf-b7ae-59ad7724b87f"
      )
      .then((response) => {
        setVideos(response.data);
        let id = undefined;
        if (videoid === undefined) {
          id = response.data[0].id;
        } else {
          id = videoid;
        }
        axios
          .get(
            "http://localhost:3001/videos/" +
              id +
              "?api_key=219e369b-90a6-41bf-b7ae-59ad7724b87f"
          )
          .then((response) => {
            setCurrentVideo(response.data);
          })
          .catch((error) => {
            window.alert(error);
          });
      })
      .catch((error) => {
        window.alert(error);
      });
  }, [videoid]);

  const { comments } = currentVideo;
  return (
    <main>
      {JSON.stringify(currentVideo) !== "{}" && (
        <>
          {" "}
          <Video {...currentVideo} />
          <div className="app__body container">
            <div className="app__video">
              <VideoDetails {...currentVideo} />
              <Comments comments={comments} />
            </div>
            <section className="app__aside">
              <NextVideos currentVideoId={currentVideo.id} videos={videos} />
            </section>
          </div>
        </>
      )}
    </main>
  );
}

export default VideoPage;
