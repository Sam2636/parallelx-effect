import './animation.css';
import React from "react"
import { useNavigate } from 'react-router-dom';
//import uni from './../../images/uni.jpg';
function Animation() {

  const navigate = useNavigate();
  return (
    // <div class="zoom"><img src='uni'></img>
    <>
      <article class="hi">
        <h1>Explore Effects</h1>
        <p>#code and coders() Never Dies</p>
      </article>
      <div class="threeD">
            welcome to the world
      </div>
      <div class="hello">
        <div>
          <button class="glow-on-hover" onClick={() => {
            navigate('/app');
          }}
          >
          Parallax</button>
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
