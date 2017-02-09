import React, { Component } from 'react';
import './css/SessionKnob.css';
class SessionKnob extends Component {

  render() {
    return (
      <div className="session-knob">
        <p> Session length </p>
          <span onClick={this.props.decrementSessionLength} className="primary-text-color button"> - </span>
          <span className="primary-text-color pulse" id="session-value"> {this.props.sessionLength} </span>
          <span onClick={this.props.incrementSessionLength} className="primary-text-color button"> + </span>
      </div>
    );
  }
}

export default SessionKnob;
