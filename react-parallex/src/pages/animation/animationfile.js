import './animation.css';
import React from "react"
import { useNavigate } from 'react-router-dom';

function Animation() {

  const navigate = useNavigate();
  return (
    <div>hello world
      <div>
        <button onClick={() => {
          navigate('/app');
        }}
        >
        go to app</button>
      </div>
    </div>  

  );
}

export default Animation;
