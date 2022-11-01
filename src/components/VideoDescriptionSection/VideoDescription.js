import "./VideoDescription.scss"

function VideoDescription(props){
    return(
    <section>
        <h1>{props.title}</h1>
        <h2>{props.channel}</h2>
        <date>{props.timestamp}</date>
        <p>{props.views}</p>
        <p>{props.likes}</p>
        <p>{props.description}</p>
    </section>       
    );
}

export default VideoDescription;