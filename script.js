const display = document.querySelector('div');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNum = 0
  while (randomNum == 0) {
    randomNum = Math.floor(Math.random() * 10);
  }

  if (randomNum / 3 <= 1) {
    return "ROCK";

  } else if (randomNum / 3 <= 2) {
    return "PAPER";

  } else {
    return "SCISSOR";
  }
}


function displayWinner(humanScore, computerScore) {
  const para = document.createElement('p');

  if (humanScore > computerScore) {
    para.textContent = `You score ${humanScore} points.\nComputer score ${computerScore} points.\nYou are the game winner!`;

  } else if (humanScore <  computerScore) {
    para.textContent = `You score ${humanScore} points.\nComputer score ${computerScore} points.\n Computer is the game winner!`;

  } else {
    para.textContent = `You score ${humanScore} points.\nComputer score ${computerScore} points.\n It's a tie!!`;
  }

  display.append(para);
}


function playRound(humanChoice, computerChoice) {
  let text = `You: ${humanChoice} Computer: ${computerChoice}. `;
  
  if (humanChoice == "ROCK" && computerChoice == "SCISSOR") {
    text += "You win! Rock beats Paper.";
    humanScore++;
  
  } else if (humanChoice == "PAPER" && computerChoice == "ROCK") {
    text += "You win! Paper beats Rock.";
    humanScore++;

  } else if (humanChoice == "SCISSOR" && computerChoice == "PAPER") {
    text += "You win! Scissor beats Paper.";
    humanScore++;

  } else if (computerChoice == "ROCK" && humanChoice == "SCISSOR") {
    text += "You lose! Rock beats Paper.";
    computerScore++;

  } else if (computerChoice == "PAPER" && humanChoice == "ROCK") {
    text += "You lose! Paper beats Rock.";
    computerScore++;

  } else if (computerChoice == "SCISSOR" && humanChoice == "PAPER") {
    text += "You lose! Scissor beats Paper.";
    computerScore++;

  } else {
    text += "No winner! It's a Draw.";
  }

  displayScore();
  display.textContent = text;

  console.log(humanScore, computerScore)
  if (humanScore === 5 || computerScore === 5) {
    displayWinner(humanScore, computerScore);
  }
}


function displayScore() {
  const score = document.querySelector('span');
  score.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`
}

document.querySelectorAll('button')
  .forEach(button => {
    button.addEventListener('click', (event) => {
      const id = event.target.id;
      if (id === "rock") {
        playRound("ROCK", getComputerChoice());

      } else if (id === "paper") {
        playRound("PAPER", getComputerChoice());

      } else if (id === "scissor") {
        playRound("SCISSOR", getComputerChoice());
      }
    });
});
