import "./NextVideos.scss"

function NextVideos(props) {
    return(
        <section>
            <h3>NEXT VIDEOS</h3>
            <ul>
                {props.nextVideos}
            </ul>
        </section>
    )
}

export default NextVideos;