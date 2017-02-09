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
      <div onClick={()=> console.log('hi')} className="clock">
        <div className="timer-info">
            <span id="timer-header">Session Time Remaining</span>
            <span id="timer-countdown">20:23</span>
        </div>
        <span className="fill"></span>
      </div>
    );
  }
}

export default Clock;
