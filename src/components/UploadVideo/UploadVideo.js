import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import publish from "../../assets/icons/publish.svg";
import videoPreview from "../../assets/images/Upload-video-preview.jpg";

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
    <form>
      <div>
        <span>
          <small className="typography typography--secondary">VIDEO THUMBNAIL</small>
          <img alt="video preview" src={videoPreview} />
        </span>
        <span>
          <TextField label="TITLE YOUR VIDEO" />
          <TextField label="ADD A VIDEO DESCRIPTION" />
        </span>
      </div>
      <div>
        <Button>CANCEL</Button>
        <Button alt="publish" src={publish}>PUBLISH</Button>
      </div>
    </form>
  );
}

export default UploadVideo;
