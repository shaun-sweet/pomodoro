import React, { Component } from 'react';
import './css/App.css';
import Clock from './Clock';
import SettingsPanel from './SettingsPanel';
import SessionKnob from './SessionKnob';
import BreakKnob from './BreakKnob';
class App extends Component {

  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <main>
        <header>
          <SettingsPanel>
            <BreakKnob />
            <SessionKnob />
          </SettingsPanel>
        </header>
        <section>
          <Clock />
        </section>
      </main>
    );
  }
}

export default App;
