// DOm variables
let displayChoices = document.getElementById("display-choices");
let displayWinner = document.getElementById("display-winner");
let displayCompChoice = document.getElementById("comp-choice");


// user's choice
const userObj = {
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


    playGame(event) {

        let userChoice = event.target.value;
        let computerChoice = compObj.getComputerChoice();
        displayCompChoice.innerHTML = `${computerChoice}`;
        displayChoices.innerHTML = `${userChoice} VS. ${computerChoice}`;
        if ((userChoice === "Rock" && compChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
            displayWinner.innerHTML = `Your ${userChoice} won!`;
        } else if (userChoice === computerChoice) {
            displayWinner.innerHTML = `Your ${userChoice} tied.`;
        } else {
            displayWinner.innerHTML= `Your ${userChoice} lost to ${computerChoice}.`
        }
    }


}



// get user choice 


