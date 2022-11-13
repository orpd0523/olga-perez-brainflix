import "./Comments.scss";
import { useState, useEffect } from "react";
import bubble from "../../assets/icons/add_comment.svg";
import weekend from "../../assets/images/Mohan-muruge.jpg";
import Button from "../Button/Button";
import Avatar from "../Avatar/Avatar";
import TextField from "../TextField/TextField";
import formatDate from "../../helpers/formatDate";

function Comments(props) {
  const { comments = [] } = props;
  return (
    <section className="border">
      <CommentsTitle />
      <AddComment />
      <ul className="comments">
        {comments.length > 0 &&
          comments.map((comment) => {
            return <PostedComment key={comment.id} {...comment} />;
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

function PostedComment(props) {
  return (
    <li className="comment">
      <span className="comment__aside">
        <Avatar />
      </span>
      <span className="comment__body">
        <div className="comment__header">
          <h3 className="typography typography--h3 comment__name">
            {props.name}
          </h3>
          <time className="typography typography--secondary">
            {formatDate(props.timestamp)}
          </time>
        </div>
        <p className="typography comment__text">{props.comment}</p>
      </span>
    </li>
  );
}

export default Comments;
