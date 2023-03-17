//questions
var quizQuestions = [
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
var startQuiz = function(currentQuestionID) {
  console.log('starting quiz');

  var question = quizQuestions[currentQuestionID];
  var questionElement = document.createElement("div");
  questionElement.textContent = question.question;
  document.getElementById("questions").appendChild(questionElement);

  for (var i = 0; i < question.answers.length; i++) {
    var choice = question.answers[i];
    var choiceElement = document.createElement("button");
    choiceElement.textContent = choice;
    document.getElementById("questions").appendChild(choiceElement);

    choiceElement.addEventListener("click", (event) => {
      if (event.target.textContent === question.correctAnswer) {
        var feedbackElement = document.createElement("div");
        feedbackElement.textContent = "Correct!";
        document.getElementById("questions").appendChild(feedbackElement);
      } else {
        var feedbackElement = document.createElement("div");
        feedbackElement.textContent = "Incorrect!";
        document.getElementById("questions").appendChild(feedbackElement);
        timeLeft = timeLeft - 10;
      }
      if (currentQuestionID === (quizQuestions.length)-1) {
// end timer
// remove questions
// show form to add intials and submit high score
      }
      else {
        startQuiz(currentQuestionID+1);
      }
    });
  };
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
  startQuiz(0);
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