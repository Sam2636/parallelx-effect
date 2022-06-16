
import './App.css';
import {Parallax} from 'react-parallax';
import moon from './images/moon.jpg';
import star from './images/star.jpg';
import uni from './images/uni.jpg';
function App() {
  return (
    <div className="App">
      <Parallax strength={600} bgImage={moon}>
        <div className="content">
          <div className="text-content">Normal parallax</div>
        </div>
      </Parallax> 

      <Parallax strength={300} blur={{min:-15,max:15}} bgImage={star}>
        <div className="content">
          <div className="text-content">blur parallax</div>
        </div>
      </Parallax> 

      <Parallax strength={-600} bgImage={uni}>
        <div className="content">
          <div className="text-content">reverse parallax</div>
        </div>
      </Parallax> 

      <div className="content">
 
      </div>
    </div>
  );
}

export default App;
