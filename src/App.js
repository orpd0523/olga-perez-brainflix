import "./App.scss";
import Navigation from "./components/NavigationSection/Navigation";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./components/VideoPage/VideoPage";
import UploadVideo from "./components/UploadVideo/UploadVideo";
import axios from 'axios';

  function App() {
    useEffect(() =>{
      axios.get('https://project-2-api.herokuapp.com/videos?api_key=219e369b-90a6-41bf-b7ae-59ad7724b87f')
        .then(response =>{
          setVideos(response.data)
      })
    }, [])
  
   const [videos, setVideos] = useState([]); 
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>{videos.length > 0 && <VideoPage videos={videos}/>}</>
            }
          ></Route>
          <Route path="upload" element={<UploadVideo />}></Route>
          <Route
            path="videos/:videoid"
            element={
              <VideoPage videos={videos}/>
            }
          ></Route>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
