import React, { Component } from 'react';
import './css/App.css';
import Clock from './Clock';
import SettingsPanel from './SettingsPanel';
import SessionKnob from './SessionKnob';
import BreakKnob from './BreakKnob';
import settingsModule from './modules/settingsModule';
import Sound from './Sound';
class App extends Component {

  constructor() {
    super();
    this.state = {
      sessionLength: 1,
      breakLength: 5,
    };
    this.decrementSessionLength = settingsModule.decrementSessionLength.bind(this);
    this.incrementSessionLength = settingsModule.incrementSessionLength.bind(this);
    this.decrementBreakLength = settingsModule.decrementBreakLength.bind(this);
    this.incrementBreakLength = settingsModule.incrementBreakLength.bind(this);
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
            workOrBreak={this.state.workOrBreak}
            sessionTime={this.state.sessionLength}
            breakTime={this.state.breakLength}
          />
        </section>
        <Sound />
      </div>
    );
  }




}

export default App;
