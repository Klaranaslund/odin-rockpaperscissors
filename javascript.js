/* Rock Paper Scissors game with computer, to be played in the  */

let rockbtn = document.querySelector('.rockbutton');
let paperbtn = document.querySelector('.paperbutton');
let scissorbtn = document.querySelector('.scissorbutton');
let roundscore = document.querySelector('.roundscore');

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
       return 0;

   } else if (
       (playerSelection == "rock" && computerSelection == "scissors") ||
       (playerSelection == "scissors" && computerSelection == "paper") ||
       (playerSelection == "paper" && computerSelection == "rock")
   ) {
        roundscore.textContent = `You win! ${playerSelection} beats ${computerSelection}` ;
       return true;
   } else {
    roundscore.textContent = `You lose! ${playerSelection} beats ${computerSelection}` ;
    return false;
   }
}
