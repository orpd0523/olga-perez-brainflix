import "./App.scss";
import Navigation from "./components/NavigationSection/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoPage from "./pages/VideoPage/VideoPage";
import UploadVideo from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<VideoPage/>}
          ></Route>
          <Route path="upload" element={<UploadVideo />}></Route>
          <Route
            path="videos/:videoid"
            element={<VideoPage/>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
