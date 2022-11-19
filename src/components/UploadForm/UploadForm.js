import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import publish from "../../assets/icons/publish.svg";
import videoPreview from "../../assets/images/Upload-video-preview.jpg";
import "./UploadForm.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function UploadForm(props) {
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        const object = {
          title: e.target.title.value,
          description: e.target.description.value 
        }
        e.target.reset()
        axios.post('http://localhost:3001/videos', object)
        .then(res =>{
          window.alert( `Successfully Uploaded ${res.data.title}.`)
          navigate("/")
        })
        .catch(error => {
          window.alert(error)
        })
        //window.alert("uploaded")
    }
  return (
    <form onSubmit= {handleSubmit}className="upload-form">
      <div className="upload-form__body">
        <span className="upload-form__aside">
          <small className="typography typography--secondary">
            VIDEO THUMBNAIL
          </small>
          <img
            className="upload-form__preview"
            alt="video preview"
            src={videoPreview}
          />
        </span>
        <span className="upload-form__main">
          <TextField name="title"
            label="TITLE YOUR VIDEO"
            placeholder="Add a title to your video"
          />
          <TextField name="description"
            label="ADD A VIDEO DESCRIPTION"
            placeholder="Add a description to your video"
          />
        </span>
      </div>
      <div className="upload-form__button-group">
        <span>
          <Button type= "submit" alt="publish" src={publish}>
            PUBLISH
          </Button>
        </span>
        <span>
          <Button color="secondary">CANCEL</Button>
        </span>
      </div>
    </form>
  );
}

export default UploadForm;