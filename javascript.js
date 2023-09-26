/* Rock Paper Scissors game with computer, to be played in the  */


//function to get a randomized choice of rock paper or scissors from the computer
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

//function to compare computer and player selection and thus decide who wins a single round. 
//Returns 0 for a tie, 1 if player wins, -1 if computer wins.
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


/*game function that loops over function playRound() until computer or player
reaches a score of three, rather than a best of five because of ties*/
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
