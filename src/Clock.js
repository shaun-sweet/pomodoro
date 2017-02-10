import React, { Component } from 'react';
import './css/clock.css';

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
    this.startTimerCountDown = this.startTimerCountDown.bind(this);
  }

  resetState() {
    var sessionName;
    if (this.state.sessionName === "Work") {
      sessionName = "Break";
    }else {
      sessionName = "Work";
    }
    this.setState({
      sessionName: sessionName,
      timerStarted: false,
      timerActive: false,
      fillHeight: 0
    });
  }

  alertSound(){
    var a = document.getElementById('alert-sound');
    a.play();
  }

  startTimerCountDown(durationOfTimer){
    // validation check for if timer is active
    this.toggleTimerActiveState();
    if (this.state.timerStarted) {
      return;
    }

    var that = this;
    this.setState({timeRemaining: durationOfTimer});
    that.setState({recentSessionLength: durationOfTimer})
    var countDown = setInterval(function(){
      if (that.state.timerActive && that.state.timeRemaining > 0) {
        that.setState({ timeRemaining: that.state.timeRemaining -1 });
        that.setState({ fillHeight: that.getFillHeight()});
      } else if (that.state.timeRemaining <= 0) {
        that.alertSound();
        that.resetState();
        clearInterval(countDown);
      }
    }, 1000)
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

  clockStartCallback() {
    if (this.state.sessionName === "Work") {
      this.startTimerCountDown(this.props.sessionTime*60);
    } else {
      this.startTimerCountDown(this.props.breakTime*60);
    }

  }

  getFillHeight() {
      return 100 - (this.state.timeRemaining / this.state.recentSessionLength * 100);
  }

  prettyTimeFormat(timeInSeconds) {
    let minutes, seconds;
    seconds = timeInSeconds % 60;
    minutes = (timeInSeconds - seconds) / 60;
    if (seconds < 10) {
      seconds = "0"+seconds;
    }
    if (timeInSeconds < 60) {
      return seconds;
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
