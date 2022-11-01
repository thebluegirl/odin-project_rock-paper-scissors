/* 
    1. Adjust the logic that plays 5 rounds to play until a player reaches 5 points'
        a. This means there can't be a tie

    2. Create buttons that will serve as user input instead of using a prompt
        a. 3 buttons, one for each option
        b. Each button will have to trigger an event to play a round

    3. Create a div that will declare the winner for each round and at the end of the game


*/

//These variables have been initialized to keep track of wins an losses
let playerWinCounter = 0;
let computerWinCounter = 0;
let playerSelection = "";

// To accomplish 2, we'll create buttons in the HTML and take control of them here
const playerSelectionRock = document.getElementById('player-selection-rock');
const playerSelectionPaper = document.getElementById('player-selection-paper');
const playerSelectionScissors = document.getElementById('player-selection-scissors');

//Here, we'll create a div to declare the winner and put it in the DOM. We'll also adjust the winner function to put this in the DOM
const resultDiv = document.createElement('div');
resultDiv.setAttribute('id', 'result-div');
playerSelectionScissors.after(resultDiv);

//Let's create a boolean function to check if there is a winner. This way we can end the game and disable the player choice buttons when there's a winner.
function winner() {
    if (playerWinCounter === 5 && playerWinCounter > computerWinCounter){
        resultDiv.innerHTML += `<p>You win!</p>` ;
        return true;
    } else if (computerWinCounter === 5 && computerWinCounter > playerWinCounter) {
        resultDiv.innerHTML += `<p>You lose!</p>` ;
        return true;
    } else return false
}

function winnerCheck() {
    if (winner() === true){
        playerSelectionRock.disabled = true;
        playerSelectionPaper.disabled = true;
        playerSelectionScissors.disabled = true;
    }
}

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


function gameRound() {
    let computerSelection = getComputerChoice();
    //This is to see what the computer's choice is and may be taken out later
    console.log(computerSelection);
    //.toLowerCase() is to get variables to be case insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    //We'll use if else if conditionals to declare the winner
    if (computerSelection === playerSelection) {
        resultDiv.innerHTML += `<p>This round is tied</p>`;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        resultDiv.innerHTML += `<p>Paper covers rock, you win this round!</p>`;
        return playerWinCounter++;
    } else if (playerSelection === "rock" && computerSelection
     === "paper") {
        resultDiv.innerHTML += `<p>Paper covers rock, you lose this round!</p>`;
        return computerWinCounter++;
     } else if (computerSelection === "scissors" && playerSelection === "paper") {
        resultDiv.innerHTML += `<p>Scissors cuts paper, you lose this round.</p>`;
        return computerWinCounter++;
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        resultDiv.innerHTML += `<p>Scissors cuts paper, you win this round!</p>`;
        return playerWinCounter++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        resultDiv.innerHTML += `<p>Rock crushes scissors, you win this round!</p>`;
        return playerWinCounter++;
     } else if (computerSelection === "rock" && playerSelection === "scissors") {
        resultDiv.innerHTML += `<p>Rock crushes scissors, you lose this round.</p>`;
        return computerWinCounter++;
     } else {
        resultDiv.innerHTML = `<p>Something's not right here...</p>`;
    }
}

//Attaching functions to the buttons
playerSelectionRock.addEventListener('click', function(e) {
    playerSelection = "Rock";
    gameRound();
    winnerCheck();
})

playerSelectionPaper.addEventListener('click', function(e) {
    playerSelection = "Paper";
    gameRound();
    winnerCheck();
})

playerSelectionScissors.addEventListener('click', function(e) {
    playerSelection = "Scissors";
    gameRound();
    winnerCheck();
})

