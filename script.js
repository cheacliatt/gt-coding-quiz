// var startTimer = confirm("Would you like to start timer?");
var secondsLeft = 75;
var timeEl = document.querySelector("#timer");
var startGame = document.querySelector("#startGame");
var quizMain = document.querySelector("#quizMain");
var secondDiv = document.querySelector("#secondDiv");
var secondButton = document.querySelector("#secondButton")

function setTime() {
  startGame.addEventListener("click", function () {
    quizMain.style.display = "none";
    secondDiv.style.display = "block";
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timeEl.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  });
}

secondButton.addEventListener("click", function() {
    secondDiv.style.display = "none";
    thirdDiv.style.display = "block";
}


)
setTime();

// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
