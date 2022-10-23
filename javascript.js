/* 
1. Create a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’

2. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
    Make your function’s playerSelection parameter case-insensitive (so users   can input rock, ROCK, RocK or any other variation).

3. Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

 */

// Let's start with 1
//We can get it to randomly select one of the three options by writing a function that returns a random number between one and three and assigning an option to each number
//To do this, we'll use the math methods for getting random numbers and then an if else if 
function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else if (computerChoice === 3) {
        return "Scissors"
    } else {
        return "Something's gone horribly wrong"
    }
}

//Now on to 2. The computerSelection will be assigned the value of running the getComputerChoice function and the playerSelection will be a prompt asking for input from the player. 

function gameRound() {
    let computerSelection = getComputerChoice();
    //This is to see what the computer's choice is and may be taken out later
    console.log(computerSelection);
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    //.toLowerCase() is to get variables to be case insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //We'll use if else if conditionals to declare the winner
    if (computerSelection === playerSelection) {
        return "It's a tie!";
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win! Paper covers rock";
    } else if (playerSelection === "rock" && computerSelection
     === "paper") {
        return "You lose! Paper covers rock";
     } else if (computerSelection === "scissors" && playerSelection === "paper") {
        return "You lose! Scissors cuts paper";
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors cuts paper";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock crushes scissors";
     } else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lose! Rock crushes scissors";
     } else {
        console.log("Something's not right here...");
     }
}