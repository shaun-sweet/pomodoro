import React, { Component } from 'react';
import './css/clock.css';

class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sessionName: "Work",
      timeRemaining: 1500,
      timerStarted: false,
      timerActive: false
    };
    this.startTimerCountDown = this.startTimerCountDown.bind(this);
  }

  startTimerCountDown(durationOfTimer){
    // validation check for if timer is active
    this.toggleTimerActiveState();
    if (this.state.timerStarted) {
      return;
    }

    var that = this;
    this.setState({timeRemaining: durationOfTimer});
    var countDown = setInterval(function(){
      if (that.state.timerActive) {
        that.setState({ timeRemaining: that.state.timeRemaining -1 });
      }
      if (that.state.timeRemaining === 0) {
        clearInterval(countDown)
      }

    }, 1000)
  }

  render() {
    return (
      <div onClick={()=>this.startTimerCountDown(this.props.sessionTime*60)} className="clock">
        <div className="timer-info">
            <span id="timer-header">{this.state.sessionName} {this.state.timerStarted ? "Time Remaining" : "Session Length"}</span>
            <span id="timer-countdown">{this.state.timerStarted ? this.prettyTimeFormat(this.state.timeRemaining) : this.prettyTimeFormat(this.props.sessionTime*60)} </span>
        </div>b
        <span className="fill"></span>
      </div>
    );
  }

  prettyTimeFormat(timeInSeconds) {
    let minutes, seconds;
    seconds = timeInSeconds % 60;
    minutes = (timeInSeconds - seconds) / 60;
    if (seconds < 10) {
      seconds = "0"+seconds;
    }
    return minutes+":"+seconds;
  }

  toggleTimerActiveState() {
    if (this.state.timerActive) {
      this.setState({timerActive: false});
    } else {
      this.setState({
        timerActive: true,
        timerStarted: true
      });
    }
  }

}

export default Clock;
