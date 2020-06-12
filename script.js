var startGameEl = document.querySelector("#startGame");
var timeEl = document.querySelector("#timer");
var mainMenuEl = document.querySelector("#main-menu");
var quizAreaEl = document.querySelector("#quiz-area");
var resultAreaEl = document.querySelector("#result-area");
var questionEl = document.querySelector("#question");
var selectionsEl = document.querySelector("#selections");
var scoreAreaEl = document.querySelector("#score-area");
var finalScoreAreaEl = document.querySelector("#final-score-area");
var showResultEl = document.querySelector("#show-result");
var scoreSubmitEl = document.querySelector("#score-submit");
var initialSubmitEl = document.querySelector("#initial-submit");
var savedHighScores = [];
var secondsLeft = 75;
var timerInterval;

// This array of questions and answers is what will be the content of the webpage.
var questionIndex = 0;
var arrayOfQuestions = [
  {
    question: "Commonly Used data types DO NOT Include:",
    selections: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question: "The condition in an if/ else statement is enclosed within ___.",
    selections: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store __.",
    selections: [
      "numbers and strings",
      "other arrays</button",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "Sting values must be enclosed within __ when being assigned to variables.",
    selections: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    selections: ["Javascript", "terminal bash", "for loops", "console.log"],
    answer: "console.log",
  },
];
// This begins the timer placed in the header and generates the first question.
function startGameTimer() {
  mainMenuEl.style.display = "none";
  quizAreaEl.style.display = "block";
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
  }, 1000);
  questionGenerator();
}
// This function generates the array of questions based on which value the index is set to, which cycles on each button press. It dynamically generates the HTML elements onot the webpage.
function questionGenerator() {
  var currentQuestionIndex = arrayOfQuestions[questionIndex];
  questionEl.textContent = arrayOfQuestions[questionIndex].question;
  for (var i = 0; i < currentQuestionIndex.selections.length; i++) {
    var selectionsList = document.createElement("li");
    document.querySelector(".selections").append(selectionsList);
    var choiceButtons = document.createElement("button");
    selectionsList.append(choiceButtons);
    choiceButtons.setAttribute("class", "btn btn-primary");
    choiceButtons.textContent = currentQuestionIndex.selections[i];
    choiceButtons.addEventListener("click", showResults);
  }
}
// This function does two things: it increases the index of questions, cycling to the next page; once it is complete, it will make the final score page appear.
function showResults(e) {
  checkResult(e.target.textContent);
  document.getElementById("question").innerHTML = "";
  document.querySelector(".selections").innerHTML = "";
  questionIndex++;
  if (questionIndex === arrayOfQuestions.length) {
    quizAreaEl.style.display = "none";
    resultAreaEl.style.display = "none";
    scoreAreaEl.style.display = "block";
    finalScoreAreaEl.textContent = "Final Score: " + secondsLeft;
    clearInterval(timerInterval);
  } else {
    questionGenerator();
  }
}

// This function checks whether or not the choice selected is correct or not. If the text content does not match as the result, time is deducted.
function checkResult(result) {
  if (result === arrayOfQuestions[questionIndex].answer) {
    showResultEl.textContent = "Correct!";
  } else {
    showResultEl.textContent = "Wrong!";
    secondsLeft -= 15;
  }
}

startGameEl.addEventListener("click", startGameTimer);


// scoreSubmitEl.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (event.target.matches("#score-submit")) {
//     savedHighScores.push({"initials":initialsEl[0].value, "score":timeLeft});
//     console.log(savedHighScores)
//   localStorage.setItem("highScores", JSON.stringify((savedHighScores)));
//   questionSection.innerHTML = "";
//   renderHighScores();
//   }
// });

// function renderHighScores(){
//   var highScores = JSON.parse(localStorage.getItem("highScores"));
  
//   for (var i = 0; i < highScores.length; i++) {
//     //create the element
//       var highScoresMessage = document.createElement("h3");
//       //add content
//       highScoresMessage.textContent = highScores[i].initials + " scored " + highScores[i].score;
//       //append to existing element
//       questionSection.append(highScoresMessage);
//   }
