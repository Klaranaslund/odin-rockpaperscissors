/* Rock Paper Scissors game with computer, to be played in the  */


//function to get a randomized choice of rock paper or scissors from the computer
function getComputerChoice(){
    const strings = ["rock", "paper", "scissors"];

    const randomindex = Math.floor(Math.random() * strings.length);
    const choice = strings[randomindex];
    return choice;
  }

//Get choice of rock, paper or scissors from player
function getPlayerChoice(){
    const choice = prompt("Enter your choice");
    return choice.toLowerCase();
  }

//function to compare computer and player selection and thus decide who wins a single round. 
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
       return true;
   } else {
       console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
       return false;
   }
}


/*Loop over function playRound() until computer or player reaches a score of three */
function game() {
    let player = 0;
    let computer = 0;

    while (player <3 || computer <3) {
        if (playRound(getPlayerChoice(), getComputerChoice())){
            player++;
    }else{
        computer++;
    }}
    
    if (player == 3) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}
