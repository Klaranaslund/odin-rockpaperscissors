/* Rock Paper Scissors game with computer, to be played in the  */

let rockbtn = document.querySelector('.rockbutton');
let paperbtn = document.querySelector('.paperbutton');
let scissorbtn = document.querySelector('.scissorbutton');
let roundscore = document.querySelector('.roundscore');
let finalscore = document.querySelector('.finalscore');
let winner = document.querySelector('.winner');

let computerscore = 0;
let playerscore = 0;

/* Get randomized choice of rock paper or scissors to act as
computers choice*/
function getComputerChoice(){
    const strings = ["rock", "paper", "scissors"];
    const randomindex = Math.floor(Math.random() * strings.length);
    const choice = strings[randomindex];
    return choice;
  }
    
rockbtn.addEventListener('click', ()=>{
        playRound('rock', getComputerChoice());
        });
    
paperbtn.addEventListener('click', ()=>{
        playRound('paper', getComputerChoice());
        });
    
scissorbtn.addEventListener('click', ()=>{
        playRound('scissors', getComputerChoice());
        });

/* Play a round by comparing the players selection to the computer selection, 
call displayscore accordingly*/
function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
       roundscore.textContent = "It's a tie";
       displayScore(0,0);

   } else if (
       (playerSelection == "rock" && computerSelection == "scissors") ||
       (playerSelection == "scissors" && computerSelection == "paper") ||
       (playerSelection == "paper" && computerSelection == "rock")
   ) {
        roundscore.textContent = `You win the round! ${playerSelection} beats ${computerSelection}` ;
        displayScore(1,0);
   } else {
    roundscore.textContent = `You lose the round! ${computerSelection} beats ${playerSelection}` ;
    displayScore(0,1);
   }
}

/* Display the current score, and call announceWinner and resetScore if player or
computer reaches a score of 3.*/
function displayScore(player, computer){
    playerscore += player;
    computerscore += computer;

    finalscore.textContent = `Player: ${playerscore} Computer: ${computerscore}`

    if(playerscore >=3){
        announceWinner('player');
        resetScore();
      
    }else if(computerscore >= 3){
        announceWinner('computer');
        resetScore();
    }  
}

function announceWinner(win){
    if(win == 'computer'){
        winner.textContent = `Computer Wins!`  ;
    }else if(win == 'player'){
        winner.textContent = `Player Wins!`  ;
    }    
}

/* Resets the scores for player and computer, should clear the winner textcontent but keep
getting a bug when trying to do so*/
function resetScore(){
    playerscore = 0;
    computerscore = 0;
}

