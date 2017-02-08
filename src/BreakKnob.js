import React, { Component } from 'react';
import './css/BreakKnob.css';
class BreakKnob extends Component {

  render() {
    return (
      <div className="break-knob">
        <p> Break Length </p>
        <button> - </button>
        <span> 5 </span>
        <button> + </button>
      </div>
    );
  }
}

export default BreakKnob;
