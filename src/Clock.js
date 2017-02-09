import React, { Component } from 'react';
import './css/clock.css';

class Clock extends Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div onClick={this.props.startTimerCallback} className="clock">
        <div className="timer-info">
            <span id="timer-header">{this.props.workOrBreak} Time Remaining</span>
            <span id="timer-countdown">{this.props.timeRemaining.minutes + ":"+ this.props.timeRemaining.seconds} </span>
        </div>
        <span className="fill"></span>
      </div>
    );
  }
}

export default Clock;
