var secondsLeft = 75;
var timeEl = document.querySelector("#timer");
var startGame = document.querySelector("#startGame");
var quizMain = document.querySelector("#quizMain");
var quizArea = document.querySelector("#quiz");
var responseEl = document.querySelector("#response");

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

function setTime() {
  startGame.addEventListener("click", function () {
    generateQuestion();
    quizMain.style.display = "none";
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  });
}

setTime();

// The following function will create the HTML elements and fill them with content from our Array of Objects.
var questionIndex = 0;

function generateQuestion() {
  //This clears any HTML as it cycles arrays.
  quizArea.innerHTML = "";
  // Question creator
  var questionEl = document.createElement("h3");
  questionEl.textContent = arrayOfQuestions[questionIndex].question;
  quizArea.append(questionEl);
  // Answer choices section, this is just creating the unordered list to append into.
  var selectionList = document.createElement("ul");
  selectionList.textContent = "";
  quizArea.append(selectionList);
  // This fills our unordered list with the choices object, then sets their attributes to Bootstrap buttons.
  for (var i = 0; i < 4; i++) {
    var choiceEl = document.createElement("li");
    choiceEl.textContent = arrayOfQuestions[questionIndex].selections[i];
    choiceEl.setAttribute("type", "button");
    choiceEl.setAttribute("class", "btn btn-primary choice-button");
    selectionList.append(choiceEl);
  }
  if(arrayOfQuestions[questionIndex] === 5) {
    endGame();
  }
}

function endGame() {
  quizArea.innerHTML = "";
  var finalScreen = document.createElement("h4");
  finalScreen.textContent = "Hey, you got this far. Congrats kid.";
  quizArea.append(finalScreen);
}

// quizArea.addEventListener("click", function(event) {;
//   if(event.target.matches("button")){;
//   }
// });

quiz.addEventListener("click", function () {
  questionIndex++;
  generateQuestion();
});

quizArea.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.matches(".choice-button")) {
    if (event.target.textContent != arrayOfQuestions[questionIndex].answer) {
      secondsLeft = secondsLeft - 10;
      responseEl.textContent = "incorrect";
    } else {
      responseEl.textContent = "correct";
    }
  }
});

// function incorrectAnswer() {
//   // cycles through buttons with the class "incorrect" and add event listners to those buttons
//   // deduct time inside event listener
// }

    // var responseTime = setInterval(function () {
    //   //Clear the HTML to start fresh
    //   quizArea.innerHTML = "";
    //   questionIndex++;
    //   clearInterval(responseTime);
    //   generateQuestion();
    // }, 1000);