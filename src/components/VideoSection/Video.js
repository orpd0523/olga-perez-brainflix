import "./Video.scss";
import playIcon from "../../assets/icons/play.svg"
import fullScreenIcon from '../../assets/icons/fullscreen.svg'
import volumeUpIcon from '../../assets/icons/volume_up.svg';


function Video(props) {
  const { image } = props;
  return (
    <section className="video">
      <div className="video__container">
        <video poster={image} className="video__screen">
          <source></source>
        </video>
        <VideoControls {...props}/>
      </div>
    </section>
  );
}

function VideoControls(props){
  return(
    <div className='video__controls'>
      <span className='video__control'>
        <img className='video__icon' alt='play' src={playIcon}/>
      </span>
      <span className='video__control video__control--center'>
        <span className='video__progress-bar'></span>
        <span className='video__time'>
        0:00/{props.duration}
        </span>
      </span>
      <span className='video__control'>
        <img className='video__icon' alt='fullscreen' src={fullScreenIcon}/>
        <img className='video__icon' alt='volume up' src={volumeUpIcon}/>
      </span>
    </div>
  )
}

export default Video;
