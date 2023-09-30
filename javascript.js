/* Rock Paper Scissors game with computer, to be played in the  */

let rockbtn = document.querySelector('.rockbutton');
let paperbtn = document.querySelector('.paperbutton');
let scissorbtn = document.querySelector('.scissorbutton');
let roundscore = document.querySelector('.roundscore');
let finalscore = document.querySelector('.finalscore');

let computerscore = 0;
let playerscore = 0;

//function to get a randomized choice of rock paper or scissors from the computer
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

//function to compare computer and player selection and thus decide who wins a single round. 
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
    roundscore.textContent = `You lose the round! ${playerSelection} beats ${computerSelection}` ;
    displayScore(0,1);
   }
}

function displayScore(player, computer){
    playerscore += player;
    computerscore += computer;

    if(playerscore >=3){
        finalscore.textContent = `Player: ${playerscore} Computer: ${computerscore} - Player Wins!`  ;
    
    }else if(computerscore >= 3){
        finalscore.textContent = `Player: ${playerscore} Computer: ${computerscore} - Computer Wins!`  ;
    }else finalscore.textContent = `Player: ${playerscore} Computer: ${computerscore}` ;

    
}

