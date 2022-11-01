import "./Comments.scss"

function Comments() {
    return(
            <section>
            <CommentsTitle/>
            <AddComment/>
            <Button/>
            <ProfileIcon/>
            <PostedComment/>
        </section>
    )
}

function CommentsTitle() {
    return(
        <section>
            <h2>3 comments</h2>
        </section>
    )
}

function AddComment() {
    return(
        <div>
            <label for="newComment">JOIN THE CONVERSATION
            <textarea name="newComment" placeholder="Add a new comment"/>
            </label>
        </div>
    );
};

function Button(){
    return(
        <button><img alt="#"/>COMMENT</button>
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
            <h3>{props.name}</h3>
            <p>{props.commentText}</p>
            <date>{props.timestamp}</date>
        </div>
    )
}

export default Comments;