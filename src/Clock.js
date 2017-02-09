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
    var countDown = setInterval(function(){
      that.setState({recentSessionLength: durationOfTimer})
      if (that.state.timerActive) {
        that.setState({ timeRemaining: that.state.timeRemaining -1 });
        that.setState({ fillHeight: that.getFillHeight()})
      }
      if (that.state.timeRemaining === 0) {
        this.alertSound();
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
        <span style={{height: this.state.fillHeight+'%'}} className="fill"></span>
      </div>
    );
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
