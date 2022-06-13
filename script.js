// DOm variables
let displayChoices = document.getElementById("display-choices");
let displayWinner = document.getElementById("display-winner");
let displayCompChoice = document.getElementById("comp-choice");
let displayGamesPlayed = document.getElementById("display-games-played");
let displayGamesWon = document.getElementById("display-games-won");
let displayGamesLost = document.getElementById("display-games-lost");
let displayGameTied = document.getElementById("display-games-tied");

// user's choice
const userObj = {
    wins: 0,
    loss: 0,
    ties: 0,

    _choice: "",
    askUserChoice(){
        let userChoice = "";
        this._choice = userChoice; 
        return userChoice;
    }
}


// computer's random choice
const compObj = {
    _choice: "",

    getComputerChoice() {
        let compChoice;
        let randomNum = Math.floor(Math.random() * 3);
        if (randomNum === 0 ) {
            compChoice = "rock";
        } else if (randomNum === 1) {
            compChoice = "paper";
        } else {
            compChoice = "scissors";
        }

         this._choice = compChoice;

         return compChoice;
     }

}

// compare user choice vs computer choice
const gameObj = {
    gameCounter:0,

    playGame(event) {
        this.gameCounter++

        displayGamesPlayed.innerHTML
        let userChoice = event.target.value;
        let computerChoice = compObj.getComputerChoice();
        displayCompChoice.innerHTML = `${computerChoice}`;
        displayChoices.innerHTML = `${userChoice} VS. ${computerChoice}`;
        if ((userChoice === "Rock" && compChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
            displayWinner.innerHTML = `Your ${userChoice} won!`;
            userObj.wins++;
        } else if (userChoice === computerChoice) {
            displayWinner.innerHTML = `Your ${userChoice} tied.`;
            userObj.ties++;
        } else {
            displayWinner.innerHTML= `Your ${userChoice} lost to ${computerChoice}.`
            userObj.loss++;
        }

        displayGamesPlayed.innerHTML = this.gameCounter;
        displayGamesWon.innerHTML = userObj.wins;
        displayGamesLost.innerHTML = userObj.loss;
        displayGameTied.innerHTML = userObj.ties;

    }


}



// get user choice 


