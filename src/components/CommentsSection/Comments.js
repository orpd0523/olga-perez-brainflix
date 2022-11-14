import "./Comments.scss";
import bubble from "../../assets/icons/add_comment.svg";
import weekend from "../../assets/images/Mohan-muruge.jpg";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import TextField from "../TextField/TextField";
import Comment from "../Comment/Comment.js"

function Comments(props) {
  const { comments = [] } = props;
  return (
    <section className="border">
      <CommentsTitle />
      <AddComment />
      <ul className="comments">
        {comments.length > 0 &&
          comments.map((comment) => {
            return <Comment key={comment.id} {...comment} />;
          })}
      </ul>
    </section>
  );

function CommentsTitle() {
  return (
    <h2 className="typography typography--h2 comments__title">3 Comments</h2>
  );
}

function AddComment() {
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
}

export default Comments;