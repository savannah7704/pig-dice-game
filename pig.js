let playerScore = 0
let playerCurrentScore = 0
let compScore = 0
let compCurrentScore = 0

function PlayerTurn(){
    RollDie()
}

function ComputerTurn(){
    // manages the computer's turn
    //updates current score
    //check for roll of 1
    //implement strategy for when computer holds. Maybe based on a random number?
}

function RollDie(initialRoll = false){

    let roll = Math.floor(Math.random() * 6) + 1
    if (initialRoll){
        return roll;
    } else {
        if (roll == 1) {
            playerCurrentScore = 0;
            alert("You rolled a 1! Your turn is over and you've lost any points gained during this turn.")
            ComputerTurn()
        } else {
            playerCurrentScore += roll;
            alert("You rolled a " + roll + "! You current score is " + playerCurrentScore + ".")
        }
        return roll;
    }
    // generate a random number 1-6
    // if 1 is rolled, turn ends
}

function OnLoadRoll() {

    playerScore = RollDie(true)
    alert = ("Your initial roll: " + playerScore)

}

function PlayerHold(){
//Adds the current turn’s points to the player’s total score and switches turns.
}

function CompHold(){

}

function CheckWinner(){
    //Checks if a player has reached 100 points and declares the winner.
}

function reset(){
    //reset game
}