let humanScore = 0;
let computerScore = 0;
let gameCount = 5;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 10);

  if (randomNum === 0) {
    getComputerChoice();

  } else if (randomNum / 3 <= 1) {
    return "ROCK";

  } else if (randomNum / 3 <= 2) {
    return "PAPER";

  } else {
    return "SCISSOR";
  }
}


function getHumanChoice() {
  const humanChoice = prompt("Enter your move (Rock, Paper, Scissor): ").toUpperCase();

  return humanChoice;
}


function playRound(humanChoice, computerChoice) {
  console.log(`You: ${humanChoice}\nComputer: ${computerChoice}`);
  if (humanChoice == "ROCK" && computerChoice == "SCISSOR") {
    console.log("You win! Rock beats Paper.");
    humanScore++;
  
  } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
    console.log("You win! Paper beats Rock.");
    humanScore++;
  
  } else if (humanChoice == "SCISSOR" && computerChoice == "PAPER") {
    console.log("You win! Scissor beats Paper.");
    humanScore++;

  } else if (computerChoice == "ROCK" && humanChoice == "SCISSOR") {
    console.log("You lose! Rock beats Paper.");
    computerScore++;

  } else if (computerChoice == "PAPER" && humanChoice == "ROCK") {
    console.log("You lose! Paper beats Rock.");
    computerScore++;
  
  } else if (computerChoice == "SCISSOR" && humanChoice == "PAPER") {
    console.log("You lose! Scissor beats Paper.");
    computerScore++;
  
  } else {
    console.log("No winner! It's a Draw.");
  }

}


while (gameCount > 0) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  gameCount--;
}



console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
