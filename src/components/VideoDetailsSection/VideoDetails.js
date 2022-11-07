import "./VideoDetails.scss";
import eye from "../../assets/icons/views.svg";
import heart from "../../assets/icons/likes.svg";
import formatDate from "../../helpers/formatDate.js";

function VideoDetails(props) {
  return (
    <section className="container">
      <h1 className="typography typography--h1">{props.title}</h1>
      <div className="details">
        <span className="details__col">
          <h2 className="typography typography--h2 details__text">{props.channel}</h2>
          <time className="typography typography--secondary details__text">
            {formatDate(props.timestamp)}
          </time>
        </span>
        <span className="details__col">
          <p className="typography typography--secondary metric">
            <span className="metric__aside">
            <img className="details__icon" alt="views icon" src={eye} />
            </span>
            <span className="metric__body">
                {props.views}
            </span>
          </p>
          <p className="typography typography--secondary metric">
            <img className="details__icon" alt="like icon" src={heart} />
            {props.likes}
          </p>
        </span>
      </div>
      <p className="typography">{props.description}</p>
    </section>
  );
}

export default VideoDetails;
