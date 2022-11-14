import "./CommentsForm.scss";
import bubble from "../../assets/icons/add_comment.svg";
import weekend from "../../assets/images/Mohan-muruge.jpg";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import TextField from "../TextField/TextField";

function CommentsForm() {
    return (
      <div className="form">
        <span className="form__aside">
          <Avatar alt="avatar" src={weekend} />
        </span>
        <form className="form__body">
          <div className="form__field-container">
            <TextField
              multiline={true}
              id="newComment"
              name="newComment"
              label="JOIN THE CONVERSATION"
              placeholder="Add a new comment"
            />
          </div>
          <div className="form__button-container">
            <Button alt="#" src={bubble}>
              COMMENT
            </Button>
          </div>
        </form>
      </div>
    );
  }

export default CommentsForm;