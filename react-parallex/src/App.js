
import './App.css';
import Parallaxfile from './parallaxflie';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/app" element={<Parallaxfile/>} />
      </Routes>    
    </Router>
  );
}

export default App;
