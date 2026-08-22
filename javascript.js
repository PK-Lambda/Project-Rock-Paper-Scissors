//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Name: javascript.js                                                                                                  //
// Purpose: Five round Paper, Rock, Scissors Game against AI.                                                           //
// Date: 22.08.26                                                                                                       //
// Author: petequbit                                                                                                    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// A welcome message and game instructions explained inside the terminal

console.log("Welcome to Rock, Paper and Scissors game.");
console.log("This is a rock, paper and scissors game where you will play against a highly sophisticated AI agent. You will play 5 rounds; every round you choose rock, paper or scissors while the AI does the same thing in the background. The winner is awarded one point. Note: rock beats scissors but gets covered by paper; paper beats rock but gets cut by scissors; scissors beat paper but get cut by rock. A draw is announced if the same items are selected. To win this game, get the most points out of 5 games. Good luck!");

// Creating playGame Function where the enitre game logics is captured

function playGame () {
    
    // Declaring humanScore, computerScore, gamesCounter empty variables for later use to track scores and number of rounds:

    let humanScore = 0;
    let computerScore = 0;
    let gamesCounter = 0;

    // AI logics on computer choice of paper, rock or scissors. A random number gets generated and then based on outcome computerChoice get assigned

    function getComputerChoice () {
        let computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice == 0) {
            return computerChoice = 'rock';
        } else if (computerChoice == 1) {
            return computerChoice = 'paper';
        } else {
            return computerChoice = 'scissors';
        }
    }

    // Player/human logic gets created with a function getHumanChoice where the user is given options to choose
    // from and makes his/her choice. User types their choice in the terminal; note it won't be case-sensitive:

    function getHumanChoice () {
        console.log("It's time to chose one of the following options:\n rock \n paper \n scissors");
        let humanChoice = prompt("Enter your choice.. ");
        humanChoice.toLowerCase();
        return humanChoice;
    }

    // User choice gets compared against AI: rock beats scissors but gets covered by paper; paper beats 
    // rock but gets cut by scissors; scissors beat paper but get cut by rock othrwise, a draw is announced 
    // if the same items are selected. The winner is awarded 1 point. humanScore or computerScore:

    function playRound (humanChoice, computerChoice) {
        if (humanChoice == 'rock' && computerChoice == 'scissors') {
            console.log(`You won this round. Rock beats scissors. Your score: ${humanScore} Computer's score: ${computerScore}`);
            return humanScore = humanScore + 1;
        } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            console.log(`You lost this round. Rock bats scissors. Your score: ${humanScore} Computer's score: ${computerScore}`);
            return computerScore = computerScore + 1;
        } else if (humanChoice == 'paper' && computerChoice == 'rock') {
            console.log(`You won this round.. Paper beats rock. Your score: ${humanScore} Computer's score: ${computerScore}`);
            return humanScore = humanScore + 1;
        } else if (humanChoice == 'rock' && computerChoice == 'paper') {
            console.log(`You lost this round.. Paper beats rock. Your score: ${humanScore} Computer's score: ${computerScore}`);
            return computerScore = computerScore + 1;
        } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            console.log(`You won this round.. Scissors beats paper.Your score: ${humanScore} Computer's score: ${computerScore}`);
            return humanScore = humanScore + 1;
        } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            console.log(`You lost this round.. Scissors beats paper. Your score: ${humanScore} Computer's score: ${computerScore}`);
            return computerScore = computerScore + 1;
        } else {
            return console.log(`It's a draw, no one gets points in this round. Your score: ${humanScore} Computer's score: ${computerScore}`);
        }

    }

    // This is the main loop that loops 5 times. Note, humanSelection and computerSelection were added here to ensure their value refresh each time while loop rans over 

    while (gamesCounter < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);
        
        gamesCounter++;
    }
    
    // The final message informs the user won this game and provides the final score vs AI.

    if (humanScore > computerScore) {
        console.log(`You won this game. Congratulations. Your score: ${humanScore} Computer's final score: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost this game. AI managed to beat you. Your score: ${humanScore} Computer's final score: ${computerScore}`);
    } else {
        console.log(`It's a draw this time. Your score: ${humanScore} Computer's final score: ${computerScore}. Maybe, you should try one more time?`);
    }

}

// Then main game function get called to initate the whole game.

playGame();
