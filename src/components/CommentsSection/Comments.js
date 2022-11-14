import "./Comments.scss";
import Comment from "../Comment/Comment.js"
import CommentsForm from "../CommentsForm/CommentsForm";

function Comments(props) {
  const { comments = [] } = props;
  return (
    <section className="border">
      <CommentsTitle />
      <CommentsForm />
      <ul className="comments">
        {comments.length > 0 &&
          comments.map((comment) => {
            return <Comment key={comment.id} {...comment} />;
          })}
      </ul>
    </section>
  );
}

function CommentsTitle() {
  return (
    <h2 className="typography typography--h2 comments__title">3 Comments</h2>
  );
}

export default Comments;