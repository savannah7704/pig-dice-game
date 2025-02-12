let scores = {
    playerRoll: 0,
    playerTotalScore: 0,
    playerCurrentScore: 0,
    compRoll: 0,
    compTotalScore: 0,
    compCurrentScore: 0,
}

function OnLoadRoll() {

    scores.playerCurrentScore = RollDie(true);
    scores.playerRoll = scores.playerCurrentScore; 
    UpdateScores();

}

function PlayerTurn() {
    const roll = RollDie();
    if (roll == 1){ //if player rolls a 1, they lose any points gained during their turn
        scores.playerCurrentScore = 0;
        UpdateScores();
        DisablePlayerButtons();
        ComputerTurn();
    } else {
        scores.playerCurrentScore += roll;
        UpdateScores();
    }
}

function ComputerTurn() {

    let choice = Math.floor(Math.random() * 5);
    while (choice != 0){ //determines whether the computer chooses to roll or hold.
        const roll = RollDie(false, false);
        if (roll == 1){
            scores.compCurrentScore = 0;
            UpdateScores();
            EnablePlayerButtons();
            return;
        } else {
            scores.compCurrentScore += roll;
            UpdateScores();
        }
        choice = Math.floor(Math.random() * 5);
    }

    scores.compTotalScore += scores.compCurrentScore;
    scores.compCurrentScore = 0;
    UpdateScores();
    CheckWinner();
    EnablePlayerButtons();
}

function RollDie(initialRoll = false, isPlayer = true) {

    let roll = Math.floor(Math.random() * 6) + 1
    if (initialRoll){
        return roll;
    } else {
        if (roll == 1) {
            if (isPlayer){
                scores.playerCurrentScore = 0;
                scores.playerRoll = roll;
                UpdateScores()
            } else {
                scores.compCurrentScore = 0;
                scores.compRoll = roll;
                UpdateScores();
            }
        } else {
            if (isPlayer){
                scores.playerCurrentScore += roll;
                scores.playerRoll = roll;
                UpdateScores()
            } else {
                scores.compCurrentScore += roll;
                scores.compRoll = roll;
                UpdateScores();
            }
        }
        return roll;
    }

}

function Hold() {
//Adds the current turn’s points to the player’s total score and switches turns.
    scores.playerTotalScore += scores.playerCurrentScore;
    scores.playerCurrentScore = 0;
    UpdateScores()
    CheckWinner();
    DisablePlayerButtons();
    ComputerTurn();
}

function CheckWinner() {
    if(scores.playerTotalScore >= 100){
        alert("YOU WIN!!!!!");
        Reset();
    } else if (scores.compTotalScore >= 100){
        alert("Sorry, YOU LOSE!!!!!");
        Reset();
    }

}

function DisablePlayerButtons() {
    document.getElementById("roll").disabled = true;
    document.getElementById("hold").disabled = true;
}

function EnablePlayerButtons() {
    document.getElementById("roll").disabled = false;
    document.getElementById("hold").disabled = false;
}

function UpdateScores() {
    document.getElementById("your-roll").innerText = scores.playerRoll;
    document.getElementById("your-current-score").innerText = scores.playerCurrentScore;
    document.getElementById("your-total-score").innerText = scores.playerTotalScore;
    document.getElementById("computer-roll").innerText = scores.compRoll;
    document.getElementById("computer-current-score").innerText = scores.compCurrentScore;
    document.getElementById("computer-total-score").innerText = scores.compTotalScore;
}

function Reset() { //resets the game
    scores = {
        playerRoll: 0,
        playerTotalScore: 0,
        playerCurrentScore: 0,
        compRoll: 0,
        compTotalScore: 0,
        compCurrentScore: 0,
    }
    UpdateScores();
    EnablePlayerButtons();
}