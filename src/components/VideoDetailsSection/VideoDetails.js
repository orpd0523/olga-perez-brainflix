import "./VideoDetails.scss"
import eye from "../../assets/icons/views.svg"
import heart from "../../assets/icons/likes.svg"

function VideoDetails(props){
    return(
    <section>
        <h1>{props.title}</h1>
        <h2>{props.channel}</h2>
        <time>{props.timestamp}</time>
        <p><img alt="views icon" src={eye}/>{props.views}</p>
        <p><img alt="like icon" src={heart}/>{props.likes}</p>
        <p>{props.description}</p>
    </section>       
    );
}

export default VideoDetails;