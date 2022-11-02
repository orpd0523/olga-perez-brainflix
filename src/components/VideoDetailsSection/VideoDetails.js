import "./VideoDetails.scss"

function VideoDetails(props){
    return(
    <section>
        <h1>{props.title}</h1>
        <h2>{props.channel}</h2>
        <time>{props.timestamp}</time>
        <p>{props.views}</p>
        <p>{props.likes}</p>
        <p>{props.description}</p>
    </section>       
    );
}

export default VideoDetails;