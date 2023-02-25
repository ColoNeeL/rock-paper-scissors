function getComputerChoice() {
  let choice = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * choice.length) + 1;

  if (randomChoice === 1) return "rock";
  else if (randomChoice === 2) return "paper";
  else return "scissors";
}

function playRound(playerSelection, computerSelection) 
{
  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "rock") {
      return "It is a tie!!";
    } else if (computerSelection === "paper") {
      return `The computer wins! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
    } else {
      return `You win this game! ${computerSelection} loses to ${playerSelection.toLowerCase()}`;
    }
  } else if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "paper") {
      return "It is a tie!!";
    } else if (computerSelection === "rock") {
      return `The computer wins! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
    } else {
      return `You win this game! ${computerSelection} loses to ${playerSelection.toLowerCase()}`;
    }
  } else {
    if (computerSelection === "rock") {
      return `The computer wins! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
    } else if (computerSelection === "paper") {
      return `You win this game! ${computerSelection} loses to ${playerSelection.toLowerCase()}`;
    } else {
      return "It is a tie!!";
    }
  }
}

function game()
{
    let result = '';
    let playerScore = 0;
    let computerScore = 0;
    const playerSelection = prompt("Chose your hand! (rock, paper or scissors)");
    let computerSelection = '';

    for(let i = 0; i < 5; i++)
    {
        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);

        if(result === `The computer wins! ${computerSelection} beats ${playerSelection.toLowerCase()}`)
        computerScore++;
        else if(result === `You win this game! ${computerSelection} loses to ${playerSelection.toLowerCase()}`)
        playerScore++;
    }

    if(playerScore > computerScore)
        return `You win! ${playerScore} > ${computerScore}`;
    else if(playerScore < computerScore)
        return `You lose! ${playerScore} < ${computerScore}`;
    else
        return `It's a tie! ${playerScore} = ${computerScore}`;
}

console.log(game());
