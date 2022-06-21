
import './App.css';
import Parallaxfile from './pages/parallax_effect/parallaxflie';
import Animation from './pages/animation/animationfile';
import Videoeffect from './pages/video_effect/vi_deo';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/app" element={<Parallaxfile/>} />
          <Route path="/" element={<Animation/>} />
          <Route path="/video_animation" element={<Videoeffect/>} />
      </Routes>    
    </Router>
  );
}

export default App;
