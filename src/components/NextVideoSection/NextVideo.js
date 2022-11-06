import "./NextVideos.scss";
import videosData from "../../data/videos.json";
import { useState } from "react";

function NextVideos(props) {
  const [videos, setVideos] = useState(() => {
    return videosData.filter((video) => {
      return video.id !== props.currentVideoId;
    });
  });

  function handleClick(video) {
    props.setCurrentVideo(video);
  }
  return (
    <section className="container">
      <h3 className="typography typography--secondary typography--font-reg">NEXT VIDEOS</h3>
      <ul className="next-videos">
        {videos.map((video) => {
          return <NextVideo onClick={handleClick} key={video.id} {...video} />;
        })}
      </ul>
    </section>
  );
}

function NextVideo(props) {
  const { image, title, channel } = props;
  return (
    <li className="next-video">
      <span className="next-video__aside">
        <img className="next-video__image" alt={title} src={image} />
      </span>
      <span className="next-video__body">
        <p className="typography typography--h3 next-video__title">{title}</p>
        <p className="typography next-video__channel ">{channel}</p>
      </span>
    </li>
  );
}

export default NextVideos;
