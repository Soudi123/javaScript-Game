const inputGuess = document.getElementById("inputGuess");
const outputResult = document.getElementById("outputResult");
const outputCount = document.getElementById("countedOutput");

var buttonCheck = document.getElementById("button");
const restart = document.getElementById("button_new_Game");

// selection of a random number
var number = Math.floor(Math.random() * 100);
console.log(number);
var count = 0;
// define functions
function checkNumber() {
  var guess = parseInt(inputGuess.value);
  if (guess < number)
    outputResult.innerHTML = "you guessed to low. &#128078;&#127997";
  else if (guess > number)
    outputResult.innerHTML = "you guessed to high. &#128077;&#127997";
  else if (guess === number)
    outputResult.innerHTML = " &#127882 correct!  &#127882 ";
  count = count + 1;
  outputCount.innerHTML = "you guessed " + count + " times so far";
}

function newGame() {
  number = Math.floor(Math.random() * 100);
  console.log(number);
  count = 0;
  inputGuess.value = "";
  outputResult.innerHTML = "";
  outputCount.innerHTML = "";
}
// add advent listener to components
buttonCheck.addEventListener("click", (event) => {
  checkNumber();
});
restart.addEventListener("click", (event) => {
  newGame();
});
