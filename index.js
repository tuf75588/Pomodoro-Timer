const breakPlusButton = document.querySelector('.breakPlus');
const sessionPlusButton = document.querySelector('.sessionPlus');
const breakSpan = document.querySelector('.breakSpan');
const sessionSpan = document.querySelector('.sessionSpan');
const timeLeft = document.querySelector('.timeLeft');
document.addEventListener('DOMContentLoaded', () => {
  breakSpan.textContent = timerData.breakLength;
  sessionSpan.textContent = timerData.sessionLength;
  timeLeft.textContent = timerData.currentTimer;
});
const timerData = {
  currentTimer: '25:00',
  isRunning: false,
  breakLength: 0,
  sessionLength: 0
};
function setNewData(oldState, newState) {
  return {
    ...oldState,
    ...newState
  };
}
function incrementBreakLength() {
  const updatedData = {
    ...timerData,
    breakLength: (timerData.breakLength += 1)
  };
  breakSpan.textContent = updatedData.breakLength;
}
function incrementSessionLength() {
  const updatedData = {
    ...timerData,
    breakLength: (timerData.sessionLength += 1)
  };
  sessionSpan.textContent = updatedData.breakLength;
}

breakPlusButton.addEventListener('click', incrementBreakLength);
sessionPlusButton.addEventListener('click', incrementSessionLength);
