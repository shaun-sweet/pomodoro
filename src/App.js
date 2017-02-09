import React, { Component } from 'react';
import './css/App.css';
import Clock from './Clock';
import SettingsPanel from './SettingsPanel';
import SessionKnob from './SessionKnob';
import BreakKnob from './BreakKnob';
import settingsModule from './modules/settingsModule';
class App extends Component {

  constructor() {
    super();
    this.state = {
      workOrBreak: "Work",
      sessionLength: 25,
      breakLength: 5,
      timeRemaining: 1500,
      timerActive: false
    };
    this.decrementSessionLength = settingsModule.decrementSessionLength.bind(this);
    this.incrementSessionLength = settingsModule.incrementSessionLength.bind(this);
    this.decrementBreakLength = settingsModule.decrementBreakLength.bind(this);
    this.incrementBreakLength = settingsModule.incrementBreakLength.bind(this);
    this.startTimerCallback = this.startTimerCallback.bind(this);
  }

  startTimerCallback(){
    var that = this;
    this.setState({
      timeRemaining: this.state.sessionLength*60
    })
    var countDown = setInterval(function(){
      if (that.state.timeRemaining.seconds === 0) {
        clearInterval(countDown)
      }
      that.setState({
        timeRemaining: that.state.timeRemaining -1
      });
    }, 1000)
  }


  render() {
    return (
      <div id='react'>
      <div id="top-blue-bar"></div>
        <header>
          <h1 id="title">Pomodoro Clock</h1>
          <SettingsPanel>
            <BreakKnob
              breakLength={this.state.breakLength}
              decrementBreakLength={this.decrementBreakLength}
              incrementBreakLength={this.incrementBreakLength}
            />
            <SessionKnob
              decrementSessionLength={this.decrementSessionLength}
              incrementSessionLength={this.incrementSessionLength}
              sessionLength={this.state.sessionLength}
            />
          </SettingsPanel>
        </header>
        <section>
          <Clock
            startTimerCallback={this.startTimerCallback}
            timeRemaining={this.prettyTimeFormat(this.state.timeRemaining)}
            workOrBreak={this.state.workOrBreak}
            sessionTime={this.state.sessionLength}
            breakTime={this.state.breakLength}
          />
        </section>
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
}

export default App;
