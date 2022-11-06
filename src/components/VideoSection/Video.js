import "./Video.scss"

function Video(props) {
    console.log(props)
    const {image} = props;
    return(
        <section className="video">
            <div className="video__container">
            <video poster={image} className="video__screen">
                <source></source>
            </video>
            </div>
        </section>
    )
}

export default Video;