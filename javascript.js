// 1. A welcome message greets the user in the terminal
console.log("Welcome to Rock, Paper and Scissors game.")

// 2. Game instructions are explained inside the terminal
console.log("This is a rock, paper and scissors game where you will play against a highly sophisticated AI agent. You will play 5 rounds; every round you choose rock, paper or scissors while the AI does the same thing in the background. The winner is awarded one point. Note: rock beats scissors but gets covered by paper; paper beats rock but gets cut by scissors; scissors beat paper but get cut by rock. A draw is announced if the same items are selected. To win this game, get the most points out of 5 games. Good luck!")

// 3. humanScore or computerScore empty variables get declared with 0 values assigned
let humanScore = 0;
let computerScore = 0;


// 5. Nested AI logic gets created with a function getComputerChoice where the computer randomly chooses one of the options. Note user won't see this. 
function getComuterChoice () {
    computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return computerChoice = 'rock';
    } else if (computerChoice == 1) {
        return computerChoice = 'paper';
    } else {
        return computerChoice = 'scissors';
    }
}

// 6. Player/human logic gets created with a function getHumanChoice where the user is given options 
// to choose from and makes his/her choice. User types their choice in the terminal; note it won't be 
// case-sensitive.

function getHumanChoice () {
    console.log("Chose one of the options:\n rock \n paper \n scissors");
    humanChoice = prompt("Enter your choice.. ");
    return humanChoice.toLowerCase();
}

// 4. Declare score variables
let computerChoice = 0;
let humanChoice = 0;

// 7. User choice gets compared against AI: rock beats scissors but gets covered by paper; paper beats 
// rock but gets cut by scissors; scissors beat paper but get cut by rock othrwise, a draw is announced 
// if the same items are selected. The winner is awarded 1 point. humanScore or computerScore.

function playRound (getComuterChoice, getHumanChoice) {
    if (humanChoice == 'rock' && computerChoice == 'scissors') {
        humanScore++;
        return console.log("You won. Rock beats scissors.");
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        computerScore++;
        return console.log("You lost. Rock bats scissors.");
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        return console.log("You won. Paper beats rock.");
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        computerScore++;
        return console.log("You lost. Paper beats rock.");
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++;
        return console.log("You won. Scissors beats paper.");
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        computerScore++;
        return console.log("You lost. Scissors beats paper.");
    } else {
        humanScore++;
        computerScore++;
        return console.log("It's a draw, both players get two points");
    }
}

// 10. A message appears with an announcement of the winner, thanking them for playing.
    
// 11. End of the game
 