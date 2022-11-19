import "./Comments.scss";
import Comment from "../Comment/Comment.js"
import CommentsForm from "../CommentsForm/CommentsForm";

function Comments(props) {
  const { comments = [] } = props;
  return (
    <section className="border">
      <h2 className="typography typography--h2 comments__title">{comments.length || 0} Comments</h2>
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

export default Comments;