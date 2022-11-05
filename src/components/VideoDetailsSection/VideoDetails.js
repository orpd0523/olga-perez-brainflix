import "./VideoDetails.scss"
import eye from "../../assets/icons/views.svg"
import heart from "../../assets/icons/likes.svg"

function VideoDetails(props){
    return(
    <section className="container">
        <h1 className="typography typography--h1">{props.title}</h1>
        <h2 className="typography typography--h2">{props.channel}</h2>
        <time className="typography typography--secondary">{props.timestamp}</time>
        <p className="typography typography--secondary"><img alt="views icon" src={eye}/>{props.views}</p>
        <p className="typography typography--secondary"><img alt="like icon" src={heart}/>{props.likes}</p>
        <p className="typography">{props.description}</p>
    </section>       
    );
}

export default VideoDetails;