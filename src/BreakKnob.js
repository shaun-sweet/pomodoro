import React, { Component } from 'react';
import './css/BreakKnob.css';
class BreakKnob extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
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
      <div className="break-knob">
        <p> Break Length </p>
          <span onClick={()=>{this.pulseAnimation();this.props.decrementBreakLength()}} className="break-knob-decrement primary-text-color button"> - </span>
          <span className={this.state.clicked ? "pulse" : ""} id="break-value"> {this.props.breakLength} </span>
          <span onClick={()=>{this.pulseAnimation();this.props.incrementBreakLength()}} className="break-knob-increment primary-text-color button"> + </span>

      </div>
    );
  }
}

export default BreakKnob;
