//start button

var startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
  console.log('test');
  startTimer();
});


//timer

var timeLeft = 60;
var timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}
