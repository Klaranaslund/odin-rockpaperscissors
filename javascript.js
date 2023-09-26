//funktion som slumpar rock paper eller scissors ochs kriver ut detta

function getComputerChoice(){
    //Array of strings to be randomized
    const strings = ["rock", "paper", "scissors"];

    //generate random index 
    const randomindex = Math.floor(Math.random() * strings.length)
    const choice = strings[randomindex]
    return choice
  }

//Get choice of rock, paper or scissors from player
function getPlayerChoice(){
    const choice = prompt("Enter your choice");
    return choice.toLowerCase();
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's A tie");
        return 0;

    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return 1;
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return -1;
    }
}


function game() {
    let score = 0;
    while (score < 3 && score > -3) {
        score = score + playRound(getPlayerChoice(), getComputerChoice());
    }
    
    if (score >= 3) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

//funktion game
// spela 5 rundor som räknar poäng och deklarerar vinnare eller förlorare vid slutet