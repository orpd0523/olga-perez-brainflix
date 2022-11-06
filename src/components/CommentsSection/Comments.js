import "./Comments.scss"
import {useState} from "react"
import bubble from "../../assets/icons/add_comment.svg" 
import weekend from "../../assets/images/Mohan-muruge.jpg"
import Button from "../Button/Button"
import Avatar from "../Avatar/Avatar"

function Comments(props) {
    const [comments, setComments] = useState(props.comments)
    return(
            <section className="container">
            <CommentsTitle/>
            <AddComment/>
            <Button alt="#" src={bubble}>COMMENT</Button>
            <ul>
            {comments.map((comment) => {
                    return(<PostedComment key={comment.id} {...comment}/>)
                })}
            </ul>
        </section>
    )
}

function CommentsTitle() {
    return(
        <section>
            <h2 className="typography typography--h2">3 comments</h2>
        </section>
    )
}

function AddComment() {
    return(
        <div>
            <Avatar alt="avatar" src={weekend}/>
            <label htmlFor="newComment">JOIN THE CONVERSATION
            <textarea name="newComment" placeholder="Add a new comment"/>
            </label>
        </div>
    );
};

function PostedComment(props){
    return(
        <li>
            <Avatar/>
            <h3 className="typography typography--h3">{props.name}</h3>
            <p className="typography">{props.comment}</p>
            <time className="typography typography--secondary">{props.timestamp}</time>
        </li>
    )
}

export default Comments;