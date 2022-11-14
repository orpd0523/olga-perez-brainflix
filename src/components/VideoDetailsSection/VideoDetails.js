import "./VideoDetails.scss";
import eye from "../../assets/icons/views.svg";
import heart from "../../assets/icons/likes.svg";
import formatDate from "../../helpers/formatDate.js";

function VideoDetails(props) {
  const {channel, timestamp, likes, description, views, title } = props
  return (
    <section className="border">
      <h1 className="typography typography--h1">{title}</h1>
      <div className="details">
        <span className="details__col">
          <h2 className="typography typography--h2 details__text">
            By {channel}
          </h2>
          <time className="typography typography--secondary details__text">
            {formatDate(timestamp)}
          </time>
        </span>
        <span className="details__col">
          <p className="typography typography--secondary metric">
            <span className="metric__aside">
              <img className="details__icon" alt="views icon" src={eye} />
            </span>
            <span className="metric__body">{views}</span>
          </p>
          <p className="typography typography--secondary metric">
            <img className="details__icon" alt="like icon" src={heart} />
            {likes}
          </p>
        </span>
      </div>
      <p className="typography details__description">{description}</p>
    </section>
  );
}

export default VideoDetails;
