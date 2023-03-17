//questions
var questions = [
{
  question: "Question 1",
  answers: ["A", "B", "C", "D"],
  correctAnswer: "A",
},
{
  question: "Question 2",
  answers: ["A", "B", "C", "D"],
  correctAnswer: "B",
},
{
  question: "Question 3",
  answers: ["A", "B", "C", "D"],
  correctAnswer: "C",
},
{
  question: "Question 4",
  answers: ["A", "B", "C", "D"],
  correctAnswer: "D",
},
{
  question: "Question 5",
  answers: ["A", "B", "C", "D"],
  correctAnswer: "A",
},
];

//startQuiz

var startQuiz = function() {
  console.log('starting quiz');
  
}

//intro screen
var introScreen = document.getElementById("intro");
var introHeading = document.createElement("h1");
introHeading.textContent = "JavaScript Fundamentals: Multiple Choice";
introScreen.appendChild(introHeading);

var introParagraph = document.createElement("p");
introParagraph.textContent = "Answer the following questions on JavaScript Fundamentals, within the time limit.";
introScreen.appendChild(introParagraph);

//start button
var startButton = document.createElement("button");
startButton.textContent = "START QUIZ";
introScreen.appendChild(startButton);

startButton.addEventListener("click", () => {
  console.log('test');
  introScreen.remove();
  startTimer();
  startQuiz();
});


//timer
var timeLeft = 90;
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


