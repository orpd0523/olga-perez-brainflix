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
    props.setCurrentVideo(video)
  }
  return (
    <section className="container">
      <h3 className="typography typography--secondary">NEXT VIDEOS</h3>
      <ul>
        {videos.map((video) => {
          return (
            <li onClick={() => handleClick(video)} key={video.id}>
              {video.title}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default NextVideos;
