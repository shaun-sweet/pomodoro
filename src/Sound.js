import React, { Component } from 'react';

class Sound extends Component {

  render(){
    return (
      <audio id="alert-sound" src="./alert-sound.wav" preload="auto"></audio>
    )
  }

}

export default Sound;
