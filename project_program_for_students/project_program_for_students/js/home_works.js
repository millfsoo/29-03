//GMAIL VALIDATOR

const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerHTML = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerHTML = "NOT OK";
    gmailResult.style.color = "red";
  }
};

//MOVE BLOCK

const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;

const move = () => {
  if (positionX < 448 && positionY === 0) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
  } else if (positionX === 448 && positionY < 448) {
    positionY++;
    childBlock.style.top = `${positionY}px`;
  } else if (positionX > 0) {
    positionX--;
    childBlock.style.left = `${positionX}px`;
  } else if (positionY > 0) {
    positionY--;
    childBlock.style.top = `${positionY}px`;
  } else {
    return;
  }
  setTimeout(move, 1);
};

move();

//STOPWATCH

let seconds = 0;
let intervalId = null;

const secondsElement = document.getElementById("secondsS");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

function updateTimer() {
  seconds++;
  secondsElement.textContent = seconds;
}

function startTimer() {
  if (intervalId === null) {
    intervalId = setInterval(updateTimer, 1000);
  }
}

function stopTimer() {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
}

function resetTimer() {
  seconds = 0;
  secondsElement.textContent = seconds;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
