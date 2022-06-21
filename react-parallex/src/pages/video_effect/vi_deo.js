import './vi_deo.css';
import React from "react"
import sample from './../../video_file/sample.mp4';
import logo from './../../images/logo.svg';

function Videoeffect() {
  return (
  <>
    <div class='intro'>
      <video autoPlay playsInline muted loop ><source src={sample} type="video/mp4" /></video>
    </div>
    <div class="sa">
      <h1> The mars </h1>
    </div>
    <div class="logo">
      <img src={logo} alt="logo" />
    </div>
  </>
  );
}

export default Videoeffect;
