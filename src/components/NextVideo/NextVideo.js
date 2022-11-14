import "./NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo(props) {
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

export default NextVideo;
