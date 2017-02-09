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
      <div className="clock">
        <span className="fill"></span>
      </div>
    );
  }
}

export default Clock;
