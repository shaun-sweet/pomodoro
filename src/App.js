import React, { Component } from 'react';
import './css/App.css';
import Clock from './Clock';
import SettingsPanel from './SettingsPanel';
import SessionKnob from './SessionKnob';
import BreakKnob from './BreakKnob';
import Footer from './Footer'
class App extends Component {

  constructor() {
    super();
    this.state = {
      sessionLength: 25,
      breakLength: 5
    };
    this.decrementSessionLength = this.decrementSessionLength.bind(this);
    this.incrementSessionLength = this.incrementSessionLength.bind(this);
    this.decrementBreakLength = this.decrementBreakLength.bind(this);
    this.incrementBreakLength = this.incrementBreakLength.bind(this);
  }

  decrementSessionLength() {
    // doesn't let length go below 1
    if (this.state.sessionLength > 1) {
      this.setState({
        sessionLength: this.state.sessionLength - 1
      });
    }
  }

  incrementSessionLength() {
    this.setState({
      sessionLength: this.state.sessionLength + 1
    });
  }

  decrementBreakLength() {
    // doesn't let length go below 1
    if (this.state.breakLength > 1) {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  }

  incrementBreakLength() {
    this.setState({
      breakLength: this.state.breakLength + 1
    });
  }

  render() {
    return (
      <div id='react'>
        <header>
          <h1>Pomodoro Clock</h1>
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
          <Clock />
        </section>
      </div>
    );
  }
}

export default App;
