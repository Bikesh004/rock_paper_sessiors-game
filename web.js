let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#mag");
const para = document.querySelector("#comp-score");
const userPara = document.querySelector("#user-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndx = Math.floor(Math.random() * 3);
  return options[randomIndx];
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin === true) {
    userScore++;
    userPara.innerText = userScore;
    msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    para.innerText = compScore;
    msg.innerText = `You Lost! ${compChoice} beats You ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  msg.innerText = "Game is Draw";
  msg.style.backgroundColor = "yellow";
  msg.style.color = "black";
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
