let scores = {
    playerRoll: 0,
    playerTotalScore: 0,
    playerCurrentScore: 0,
    compRoll: 0,
    compTotalScore: 0,
    compCurrentScore: 0,
}

function onLoadRoll() {

    scores.playerCurrentScore = rollDie(true);
    scores.playerRoll = scores.playerCurrentScore; 
    updateScores();

}

function playerTurn() {
    const roll = rollDie();
    if (roll == 1){ //if player rolls a 1, they lose any points gained during their turn
        scores.playerCurrentScore = 0;
        updateScores();
        disablePlayerButtons();
        computerTurn();
    } else {
        scores.playerCurrentScore += roll;
        updateScores();
    }
}

function computerTurn() {

    let choice = Math.floor(Math.random() * 5);
    while (choice != 0){ //determines whether the computer chooses to roll or hold.
        const roll = rollDie(false, false);
        if (roll == 1){
            scores.compCurrentScore = 0;
            updateScores();
            enablePlayerButtons();
            return;
        } else {
            scores.compCurrentScore += roll;
            updateScores();
        }
        choice = Math.floor(Math.random() * 5);
    }

    scores.compTotalScore += scores.compCurrentScore;
    scores.compCurrentScore = 0;
    updateScores();
    checkWinner();
    enablePlayerButtons();
}

function rollDie(initialRoll = false, isPlayer = true) {

    let roll = Math.floor(Math.random() * 6) + 1
    if (initialRoll){
        return roll;
    } else {
        if (roll == 1) {
            if (isPlayer){
                scores.playerCurrentScore = 0;
                scores.playerRoll = roll;
                updateScores()
            } else {
                scores.compCurrentScore = 0;
                scores.compRoll = roll;
                updateScores();
            }
        } else {
            if (isPlayer){
                scores.playerCurrentScore += roll;
                scores.playerRoll = roll;
                updateScores()
            } else {
                scores.compCurrentScore += roll;
                scores.compRoll = roll;
                updateScores();
            }
        }
        return roll;
    }

}

function hold() {
//Adds the current turn’s points to the player’s total score and switches turns.
    scores.playerTotalScore += scores.playerCurrentScore;
    scores.playerCurrentScore = 0;
    updateScores()
    checkWinner();
    disablePlayerButtons();
    computerTurn();
}

function checkWinner() {
    if(scores.playerTotalScore >= 100){
        alert("YOU WIN!!!!!");
        reset();
    } else if (scores.compTotalScore >= 100){
        alert("Sorry, YOU LOSE!!!!!");
        reset();
    }

}

function disablePlayerButtons() {
    document.getElementById("roll").disabled = true;
    document.getElementById("hold").disabled = true;
}

function enablePlayerButtons() {
    document.getElementById("roll").disabled = false;
    document.getElementById("hold").disabled = false;
}

function updateScores() {
    document.getElementById("your-roll").innerText = scores.playerRoll;
    document.getElementById("your-current-score").innerText = scores.playerCurrentScore;
    document.getElementById("your-total-score").innerText = scores.playerTotalScore;
    document.getElementById("computer-roll").innerText = scores.compRoll;
    document.getElementById("computer-current-score").innerText = scores.compCurrentScore;
    document.getElementById("computer-total-score").innerText = scores.compTotalScore;
}

function reset() { //resets the game
    scores = {
        playerRoll: 0,
        playerTotalScore: 0,
        playerCurrentScore: 0,
        compRoll: 0,
        compTotalScore: 0,
        compCurrentScore: 0,
    }
    updateScores();
    enablePlayerButtons();
}