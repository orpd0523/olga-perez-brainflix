import "./NextVideos.scss"
import NextVideo from "../NextVideo/NextVideo"

function NextVideos(props) {

    const videos = props.videos.filter((video) => {
      return video.id !== props.currentVideoId;
    });
    return (
      <>
        <h3 className="typography typography--secondary typography--font-reg next-videos__title">
          NEXT VIDEOS
        </h3>
        <ul className="next-videos">
          {videos.map((video) => {
            return(
              <NextVideo key={video.id} {...video} />
          )})}
        </ul>
      </>
    );
  }

  export default NextVideos;