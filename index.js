const displayTimeRemaining = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
let countdown;

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //ensure our seconds remaining does not fall below 0.
    if (secondsLeft < 0) {
      clearInterval(countdown);
    } else {
      displayTimeLeft(secondsLeft);
    }
  }, 1000);
}
function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds - minutes * 60;
  const display = `${minutes}:${secondsLeft}`;
  displayTimeRemaining.textContent = display;
}

function displayEndTime(timestamp) {
  const now = new Date(timestamp);
  const hours = now.getHours();
  const minutes = now.getMinutes();
  console.log({ hours, minutes });
}
