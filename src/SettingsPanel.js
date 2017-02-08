import React, { Component } from 'react';
import './css/settingsPanel.css';

class SettingsPanel extends Component {

  render() {
    return (
      <div className="settingsPanel">
        {this.props.children}
      </div>
    );
  }
}

export default SettingsPanel;
