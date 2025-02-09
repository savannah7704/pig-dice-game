let playerTotalScore = 0
let playerCurrentScore = 0
let compTotalScore = 0
let compCurrentScore = 0

function OnLoadRoll() {

    playerCurrentScore = RollDie(true)
    document.getElementById("initial-roll").innerText = playerCurrentScore;
    document.getElementById("your-current-score").innerText = playerCurrentScore;
    document.getElementById("your-total-score").innerText = playerTotalScore;
    document.getElementById("computer-current-score").innerText = compCurrentScore;
    document.getElementById("computer-total-score").innerText = compTotalScore;

}

function PlayerTurn(){
    RollDie()
}

function ComputerTurn(){

    let compRoll = 0;
    let choice = Math.floor(Math.random() * 5);
    if (choice == 0){ //if choice is a 0, then the computer decides to hold. Otherwise it rolls.
        PlayerTurn()
    } else {
        compRoll = Math.floor(Math.random() * 6) + 1;
        if (compRoll == 1){
            compCurrentScore = 0;
            PlayerTurn()
        } else {
            compCurrentScore = compRoll;
        }
        return compRoll;
    }
}

function RollDie(initialRoll = false){

    let roll = Math.floor(Math.random() * 6) + 1
    if (initialRoll){
        return roll;
    } else {
        if (roll == 1) {
            playerCurrentScore = 0;
            document.getElementById("your-current-score").innerText = playerCurrentScore;
            document.getElementById("computer-total-score").innerText = compTotalScore;
            document.getElementById("computer-current-score").innerText = compCurrentScore;
            document.getElementById("your-current-score").innerText = playerCurrentScore;
            ComputerTurn()
        } else {
            playerCurrentScore += roll;
            document.getElementById("your-current-score").innerText = playerCurrentScore;
            document.getElementById("computer-total-score").innerText = compTotalScore;
            document.getElementById("computer-current-score").innerText = compCurrentScore;
        }
        return roll;
    }
}

function Hold(){
//Adds the current turn’s points to the player’s total score and switches turns.
    playerTotalScore += playerCurrentScore;
    document.getElementById("your-total-score").innerText = playerTotalScore;
    ComputerTurn()

}

function CheckWinner(){
    //Checks if a player has reached 100 points and declares the winner.
}

function reset(){
    //reset game
}