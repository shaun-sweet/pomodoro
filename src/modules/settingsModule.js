exports.decrementSessionLength = function() {
  // doesn't let length go below 1
  if (this.state.sessionLength > 1) {
    this.setState({sessionLength: this.state.sessionLength - 1});
    this.setState({timeRemaining: this.state.sessionLength *60});
  }
}

exports.incrementSessionLength = function() {
  this.setState({
    sessionLength: this.state.sessionLength + 1
  });
}

exports.decrementBreakLength = function() {
  // doesn't let length go below 1
  if (this.state.breakLength > 1) {
    this.setState({
      breakLength: this.state.breakLength - 1
    });
  }
}

exports.incrementBreakLength = function() {
    this.setState({
      breakLength: this.state.breakLength + 1
    });
  }
