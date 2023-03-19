//questions
var quizQuestions = [
  {
    question: "Question 1: Javascript is an _______ language?",
    answers: ["Object Oriented", "Object Based", "Procedural", "No answers apply"],
    correctAnswer: "Object Oriented",
  },
  {
    question: "Question 2: Which of the following keywords is used to define a variable in Javascript?",
    answers: ["var", "let", "A and B", "No answers apply"],
    correctAnswer: "A and B",
  },
  {
    question: "Question 3: Which of the following methods is used to access HTML elements using Javascript?",
    answers: ["getElementById()", "getElementsByClassName", "A and B", "No answers apply"],
    correctAnswer: "A and B",
  },
  {
    question: "Question 4: Upon encountering empty statements, what does the Javascript Interpreter do?",
    answers: ["Throws and error", "Ignores the statement", "Gives a warning", "No answers apply"],
    correctAnswer: "Ignores the statement",
  },
  {
    question: "Question 5: Which of the following methods can be used to display data in some form using Javascript?",
    answers: ["document.write()", "console.log()", "window.alert()", "All answers apply"],
    correctAnswer: "All answers apply",
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
        var feedbackElement = document.getElementById("feedback");
        feedbackElement.textContent = "Correct!";
        console.log("test 1")
        score++;
        console.log(score);
      } else {
        var feedbackElement = document.getElementById("feedback");
        feedbackElement.textContent = "Incorrect!";
        timeLeft = timeLeft - 10;
        console.log("test 2")
      }
      quizElement.remove();

      if (currentQuestionID === (quizQuestions.length)-1) {
  // end timer
        clearInterval(timerInterval);
  // remove questions
        feedbackElement.remove();
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
  var formContainer = document.getElementById("submit-score");
  formContainer.classList.remove("hidden");
  
  var showScore = document.getElementById("score")
  showScore.textContent = score;


  //create label
  var initialsLabel = document.createElement("label");
  initialsLabel.textContent = "Enter your initials: ";
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

    var userData = {
      initials:initials,
      score:score
    }
    
    var localStorageData = JSON.parse(localStorage.getItem("quizScore")) || [];
    localStorageData.push(JSON.stringify(userData));

    localStorage.setItem("quizScore", localStorageData);
    //location.reload();
    
  });
}
