import React, { Component } from 'react';
import './css/BreakKnob.css';
class BreakKnob extends Component {

  render() {
    return (
      <div className="break-knob">
        <p> Break Length </p>
        <div className="controls">
          <span onClick={this.props.decrementBreakLength} className="primary-text-color button"> - </span>
          <span className="primary-text-color" id="break-value"> {this.props.breakLength} </span>
          <span onClick={this.props.incrementBreakLength} className="primary-text-color button"> + </span>
        </div>
      </div>
    );
  }
}

export default BreakKnob;
