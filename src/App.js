import './App.scss';
import Navigation from './components/NavigationSection/Navigation'; 
import Video from './components/VideoSection/Video'; 
import VideoDescription from './components/VideoDescriptionSection/VideoDescription';

function App() {
  return (
    <div className="App">
    <Navigation/>
    <Video/>
    </div>
  );
}

export default App;
