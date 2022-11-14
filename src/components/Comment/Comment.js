import "./Comment.scss";
import formatDate from "../../helpers/formatDate";
import Avatar from "../Avatar/Avatar";

function Comment(props) {
  const { name, timestamp, comment } = props;
  return (
    <li className="comment">
      <span className="comment__aside">
        <Avatar />
      </span>
      <span className="comment__body">
        <div className="comment__header">
          <h3 className="typography typography--h3 comment__name">{name}</h3>
          <time className="typography typography--secondary">
            {formatDate(timestamp)}
          </time>
        </div>
        <p className="typography comment__text">{comment}</p>
      </span>
    </li>
  );
}

export default Comment;
