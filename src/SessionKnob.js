import React, { Component } from 'react';
import './css/SessionKnob.css';
class SessionKnob extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  pulseAnimation() {
    var that = this;
    this.setState({
      clicked:true
    })
    setTimeout(function(){
      that.setState({
        clicked:false
      })
    }, 400)
  }

  render() {
    return (
      <div className="session-knob">
        <p className="session-knob-header"> Session length </p>
          <span onClick={()=>{this.pulseAnimation();this.props.decrementSessionLength()}} className="session-knob-decrement primary-text-color button"> - </span>
          <span className={this.state.clicked ? "pulse" : ""} id="session-value"> {this.props.sessionLength} </span>
          <span onClick={()=>{this.pulseAnimation();this.props.incrementSessionLength()}} className="primary-text-color button session-knob-increment"> + </span>
      </div>
    );
  }
}

export default SessionKnob;
