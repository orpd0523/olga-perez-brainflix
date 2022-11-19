import "./Video.scss";
import VideoControls from "../VideoControls/VideoControls";


function Video(props) {
  const { image, duration } = props;
  return (
    <section className="video">
      <div className="video__container">
        <video poster={image} className="video__screen">
          <source></source>
        </video>
        <VideoControls duration = {duration}/>
      </div>
    </section>
  );
}

export default Video;
