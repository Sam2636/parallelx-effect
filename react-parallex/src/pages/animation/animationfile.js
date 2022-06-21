import './animation.css';
import React from "react"
import { useNavigate } from 'react-router-dom';
//import uni from './../../images/uni.jpg';
function Animation() {

  const navigate = useNavigate();
  return (
    // <div class="zoom"><img src='uni'></img>
    <div>hello world
      <div>
        <button onClick={() => {
          navigate('/app');
        }}
        >
        go to app</button>
      </div>
      <div>
        <button onClick={() => {
          navigate('/video_animation');
        }}
        >
        video_animation effects</button>
      </div>
    </div>  //</div>

  );
}

export default Animation;
