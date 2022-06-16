
import './App.css';
import Parallaxfile from './pages/parallax_effect/parallaxflie';
import Animation from './pages/animation/animationfile';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/app" element={<Parallaxfile/>} />
          <Route path="/" element={<Animation/>} />
      </Routes>    
    </Router>
  );
}

export default App;
