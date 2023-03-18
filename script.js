let userScore = 0;
let computerScore = 0;
const userSpan = document.getElementById("user-score");
const computerSpan = document.getElementById("computer-score");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
const resultShowcase = document.querySelector(".result > p");

function generateComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, computer) {
  userScore++;
  userSpan.innerHTML = userScore;
  const docElementDiv = document.getElementById(user);
  computerScore.innerHTML = computerScore;
  resultShowcase.innerHTML = user + " beats " + computer + ". You win!";
  docElementDiv.classList.add("green_glow");
  setTimeout(() => {
    docElementDiv.classList.remove("green_glow");
  }, 500);
}

function lose(user, computer) {
  computerScore++;
  computerSpan.innerHTML = computerScore;
  const docElementDiv = document.getElementById(user);
  userScore.innerHTML = userScore;
  resultShowcase.innerHTML = computer + " beats " + user + ". You lose!";
  docElementDiv.classList.add("red_glow");
  setTimeout(() => {
    docElementDiv.classList.remove("red_glow");
  }, 500);
}

function tie(user, computer) {
  const docElementDiv = document.getElementById(user);
  resultShowcase.innerHTML = "It's a tie!";
  docElementDiv.classList.add("gray_glow");
  setTimeout(() => {
    docElementDiv.classList.remove("gray_glow");
  }, 500);
}
function game(userChoice) {
  const computerChoice = generateComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      tie(userChoice, computerChoice);
  }
}

function main() {
  rockDiv.addEventListener("click", () => {
    game("rock");
  });
  paperDiv.addEventListener("click", () => {
    game("paper");
  });
  scissorsDiv.addEventListener("click", () => {
    game("scissors");
  });
}

console.log(main());
