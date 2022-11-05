import "./Comments.scss"
import {useState} from "react"
import bubble from "../../assets/icons/add_comment.svg" 
import weekend from "../../assets/images/Mohan-muruge.jpg"

function Comments(props) {
    const [comments, setComments] = useState(props.comments)
    return(
            <section className="container">
            <CommentsTitle/>
            <AddComment/>
            <Button/>
            <ProfileIcon/>
            <PostedComment/>
            <ul>
            {comments.map((comment) => {
                    return(<li key={comment.id}>{comment.comment}</li>)
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
            <img alt="profile image" src={"#"}/>
            <label htmlFor="newComment">JOIN THE CONVERSATION
            <textarea name="newComment" placeholder="Add a new comment"/>
            </label>
        </div>
    );
};

function Button(){
    return(
        <button><img alt="#" src={bubble}/>COMMENT</button>
    )
}

function ProfileIcon(){
    return(
        <div>{/*Logo Image Here*/}</div>
    )
}

function PostedComment(props){
    return(
        <div>
            <h3 className="typography typography--h3">{props.name}</h3>
            <p className="typography">{props.commentText}</p>
            <time className="typography typography--secondary">{props.timestamp}</time>
        </div>
    )
}

export default Comments;