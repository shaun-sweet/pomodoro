import React, { Component } from 'react';
import './css/clock.css';
import ClockActions from './modules/clockModule';
class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sessionName: "Work",
      timeRemaining: 1500,
      timerStarted: false,
      timerActive: false,
      recentSessionLength: 0,
      fillHeight: 0
    };
    this.toggleTimerActiveState = ClockActions.toggleTimerActiveState.bind(this);
    this.getFillHeight = ClockActions.getFillHeight.bind(this);
    this.alertSound = ClockActions.alertSound.bind(this);
    this.startTimerCountDown = ClockActions.startTimerCountDown.bind(this);
    this.clockStartCallback = ClockActions.clockStartCallback.bind(this);
    this.startTimerCountDown = this.startTimerCountDown.bind(this);
    this.resetState = ClockActions.resetState.bind(this);
    this.prettyTimeFormat = ClockActions.prettyTimeFormat;
  }

  render() {
    return (
      <div
        onClick={this.clockStartCallback.bind(this)}
        className="clock">
        <div className="timer-info">
            <span id="timer-header">{this.state.sessionName} {this.state.timerStarted ? "Time Remaining" : "Session Length"}</span>
            <span id="timer-countdown">{this.state.timerStarted ? this.prettyTimeFormat(this.state.timeRemaining) : (this.state.sessionName === "Work") ? this.prettyTimeFormat(this.props.sessionTime*60) : this.prettyTimeFormat(this.props.breakTime*60)} </span>
        </div>b
        <span style={{height: this.state.fillHeight+'%'}} className="fill"></span>
      </div>
    );
  }

}

export default Clock;
