import React, { Component } from 'react';
import './css/SessionKnob.css';
class SessionKnob extends Component {

  render() {
    return (
      <div className="session-knob">
        <p> Session length </p>
        <button> - </button>
        <span> 25 </span>
        <button> + </button>
      </div>
    );
  }
}

export default SessionKnob;
