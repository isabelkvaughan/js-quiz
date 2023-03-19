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
var score = 0;

var startQuiz = function(currentQuestionID) {
  
  // create quizElement
  var quizElement = document.createElement("div");
  document.getElementById("questions").appendChild(quizElement);
  var questionElement = document.createElement("div");
  
  // create questionElement
  var question = quizQuestions[currentQuestionID];
  questionElement.textContent = question.question;
  quizElement.appendChild(questionElement);
  
  // for loop to add answer buttons
  for (var i = 0; i < question.answers.length; i++) {
    var choice = question.answers[i];
    var choiceElement = document.createElement("button");
    choiceElement.textContent = choice;
    quizElement.appendChild(choiceElement);

  // click event for feedback
    choiceElement.addEventListener("click", (event) => {
      if (event.target.textContent === question.correctAnswer) {
        var feedbackElement = document.createElement("div");
        feedbackElement.textContent = "Correct!";
        quizElement.appendChild(feedbackElement);
      } else {
        var feedbackElement = document.createElement("div");
        feedbackElement.textContent = "Incorrect!";
        quizElement.appendChild(feedbackElement);
        timeLeft = timeLeft - 10;
      }

      if (currentQuestionID === (quizQuestions.length)-1) {
  // end timer
        clearInterval(timerInterval);
  // remove questions
        quizElement.remove();
  // show form to add intials and submit high score
        endQuiz();
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

//endQuiz and show form

function endQuiz() {
  var formContainer = document.getElementById("form-container");
  formContainer.classList.remove("hidden");
  //create label
  var initialsLabel = document.createElement("label");
  initialsLabel.textContent = "Enter your initials:";
  formContainer.appendChild(initialsLabel);
  //create Initials input
  var initialsInput = document.createElement("input");
  initialsInput.textContent = "";
  formContainer.appendChild(initialsInput);
  // create initials submit button
  var initialsSubmit = document.createElement("button");
  initialsSubmit.textContent = "SUBMIT";
  formContainer.appendChild(initialsSubmit);
  // create eventListener onClick for submit button
  initialsSubmit.addEventListener("click", event => {
    event.preventDefault();
    var initials = initialsInput.value;
    localStorage.setItem("quizScore", `${initials}: ${score}`);
    location.reload();
  });
}