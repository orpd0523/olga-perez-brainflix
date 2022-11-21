import "./VideoControls.scss";
import playIcon from "../../assets/icons/play.svg";
import fullScreenIcon from "../../assets/icons/fullscreen.svg";
import volumeUpIcon from "../../assets/icons/volume_up.svg";

function VideoControls(props) {
  const { duration } = props;
  return (
    <div className="video-controls">
      <span className="video-controls__control">
        <img className="video-controls__icon" alt="play" src={playIcon} />
      </span>
      <span className="video-controls__control video-controls__control--center">
        <span className="video-controls__progress-bar"></span>
        <span className="video-controls__time">0:00/{duration}</span>
      </span>
      <span className="video-controls__control">
        <img
          className="video-controls__icon"
          alt="fullscreen"
          src={fullScreenIcon}
        />
        <img
          className="video-controls__icon"
          alt="volume up"
          src={volumeUpIcon}
        />
      </span>
    </div>
  );
}

export default VideoControls;
