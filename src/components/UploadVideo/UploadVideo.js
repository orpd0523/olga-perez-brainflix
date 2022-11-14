import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import publish from "../../assets/icons/publish.svg";

function UploadVideo() {
  return (
    <div>
      <h1 className="typography typography--h1">Upload Video</h1>
      <UploadForm/>
    </div>
  );
}

function UploadForm(props) {
  return (
    <form>
      <div>
        <span>
          <small>VIDEO THUMBNAIL</small>
          <img alt="#" src="#" />
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
