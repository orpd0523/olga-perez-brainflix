import "./NextVideos.scss";
import { Link } from "react-router-dom";

function NextVideos(props) {

  const videos = props.videos.filter((video) => {
    return video.id !== props.currentVideoId;
  });
  return (
    <section>
      <h3 className="typography typography--secondary typography--font-reg next-videos__title">
        NEXT VIDEOS
      </h3>
      <ul className="next-videos">
        {videos.map((video) => {
          return(
            <NextVideo key={video.id} {...video} />
        )})}
      </ul>
    </section>
  );
}

function NextVideo({ ...props }) {
  const { image, title, channel, id } = props;
  return (
    <Link to={`/videos/${id}`} >
      <li className="next-video">
        <span className="next-video__aside">
          <img className="next-video__image" alt={title} src={image} />
        </span>
        <span className="next-video__body">
          <p className="typography typography--h3 next-video__title">{title}</p>
          <p className="typography next-video__channel ">{channel}</p>
        </span>
      </li>
    </Link>
  );
}

export default NextVideos;
