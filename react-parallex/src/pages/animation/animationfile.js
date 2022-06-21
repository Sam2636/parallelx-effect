import './animation.css';
import React from "react"
import { useNavigate } from 'react-router-dom';
//import uni from './../../images/uni.jpg';
function Animation() {

  const navigate = useNavigate();
  return (
    // <div class="zoom"><img src='uni'></img>
    <>
      <h1 class="hi"> Hello </h1>
      <div class="hello">
        <div>
          <button class="glow-on-hover" onClick={() => {
            navigate('/app');
          }}
          >
          go to app</button>
        </div>
        <div>
          <button class="glow-on-hover" onClick={() => {
            navigate('/video_animation');
          }}
          >
          video_animation effects</button>
        </div>
      </div>  
    </>

  );
}

export default Animation;
