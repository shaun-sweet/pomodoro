exports.clockStartCallback = function() {
  if (this.state.sessionName === "Work") {
    this.startTimerCountDown(this.props.sessionTime*60);
  } else {
    this.startTimerCountDown(this.props.breakTime*60);
  }
}

exports.startTimerCountDown = function(durationOfTimer){
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

exports.resetState = function() {
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

exports.alertSound = function(){
  var a = document.getElementById('alert-sound');
  a.play();
}

exports.getFillHeight = function() {
    return 100 - (this.state.timeRemaining / this.state.recentSessionLength * 100);
}

exports.prettyTimeFormat = function(timeInSeconds) {
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

exports.toggleTimerActiveState = function() {
  if (this.state.timerActive) {
    this.setState({timerActive: false});
  } else {
    this.setState({
      timerActive: true,
      timerStarted: true
    });
  }
}
