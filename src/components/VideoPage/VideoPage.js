import Video from "../VideoSection/Video";
import VideoDetails from "../VideoDetailsSection/VideoDetails";
import Comments from "../CommentsSection/Comments";
import NextVideos from "../NextVideoSection/NextVideo";

function VideoPage(props) {
  const { currentVideo, updateCurrentVideo } = props;
  return (
    <div>
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

export default VideoPage;
