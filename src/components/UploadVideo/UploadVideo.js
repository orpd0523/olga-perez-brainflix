import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import publish from "../../assets/icons/publish.svg";
import videoPreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadVideo.scss"

function UploadVideo() {
  return (
    <section className="container">
      <h1 className="typography typography--h1">Upload Video</h1>
      <UploadForm/>
    </section>
  );
}

function UploadForm(props) {
  return (
    <form className="upload-form">
      <div className="upload-form__body">
        <span className="upload-form__aside">
          <small className="typography typography--secondary">VIDEO THUMBNAIL</small>
          <img className="upload-form__preview" alt="video preview" src={videoPreview} />
        </span>
        <span className="upload-form__main">
          <TextField label="TITLE YOUR VIDEO" placeholder="Add a title to your video"/>
          <TextField label="ADD A VIDEO DESCRIPTION"  placeholder="Add a description to your video" />
        </span>
      </div>
      <div className="upload-form__button-group">
        <Button alt="publish" src={publish}>PUBLISH</Button>
        <Button color = "secondary">CANCEL</Button>
      </div>
    </form>
  );
}

export default UploadVideo;
