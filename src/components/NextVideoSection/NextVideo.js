import "./NextVideos.scss"
import videosData from "../../data/videos.json"
import {useState} from "react"

function NextVideos(props) {
    const  [videos, setVideos] = useState(videosData)
    return(
        <section>
            <h3>NEXT VIDEOS</h3>
            <ul>
                {videos.map((video) => {
                    return(<li key={video.id}>{video.title}</li>)
                })}
            </ul>
        </section>
    )
}

export default NextVideos;