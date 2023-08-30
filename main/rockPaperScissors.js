// Created 8/23/23 by ArchILLtect


let numberId = 0;
const buttons = document.getElementById("buttonDiv");


function startGame() {
    buttons.addEventListener( 'click', playerSelection )
}

function playerSelection(e) {
    if (e.target.id === 'rock') {
        playRound( 'Rock' , getComputerChoice() )
        return;
    } else if (e.target.id === 'paper') {
        playRound( 'Paper' , getComputerChoice() )
        return;
    } else if (e.target.id === 'scissors') {
        playRound( 'Scissors' , getComputerChoice() )
        return;
    } else {
        // console.log("ERROR! Bad input!")
        return;
    }
}


function getComputerChoice() {
    randomInt = Math.floor(Math.random() * 99) + 1;
    if (randomInt < 34) {
        return "Rock";
    } else if (randomInt > 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}



function playRound(a, b) {
    
    if (a == "Rock" && b == "Rock" || a == "Paper" && b == "Paper" || a == "Scissors" && b == "Scissors") {
        // alert(`Tie! You both chose ${a} ${b}.`);
        printIt(`Tie! You both chose ${a}. (${a} vs ${b}).`);
        updateScore ( "tie" );
    } else if ((a == "Rock" && b == "Scissors") || (a == "Paper" && b == "Rock") || (a == "Scissors" && b == "Paper")) {
        // alert(`You win! ${a} beats ${b}!`);
        printIt(`You win! ${a} beats ${b}!`);
        updateScore ( "win" );
    } else if ((b == "Rock" && a == "Scissors") || (b == "Paper" && a == "Rock") || (b == "Scissors" && a == "Paper")) {
        // alert(`You lose! ${b} beats ${a}.`);
        printIt(`You lose! ${b} beats ${a}.`);
        updateScore ( "loss" );
    } else alert("SOMETHING WENT WRONG with playRound()!!!!")

    // return a string that declares the winner of the round
    // "You Lose! Paper beats rock"  

}


let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function updateScore( update ) {
    if (update == 'win' ) {
        playerScore++;
        document.getElementById("playerScoreCount").textContent = playerScore;
        checkWinner ( playerScore , computerScore )
        return;
    } else if (update == 'loss' ) {
        computerScore++;
        document.getElementById("computerScoreCount").textContent = computerScore;
        checkWinner ( playerScore , computerScore )
        return;
    } else if (update == 'tie' ) {
        tieScore++;
        document.getElementById("tieScoreCount").textContent = tieScore;
        return;
    } else if (update == 'reset' ) {
        playerScore = 0;
        computerScore = 0;
        tieScore = 0;
        document.getElementById("playerScoreCount").textContent = playerScore;
        document.getElementById("computerScoreCount").textContent = computerScore;
        document.getElementById("tieScoreCount").textContent = tieScore;
        return;
    } else {
        console.log('SCORE UPDATE ERROR')
        return;
    }
}



function printIt(a) {
    const para = document.createElement("p");
    numberId++;
    para.id = "para" + numberId;
    const currentDiv = document.getElementById("results");
    currentDiv.insertAdjacentElement("beforeend", para);
    document.getElementById("para" + numberId).innerHTML = a ;
}


function checkWinner( player , computer ) {
    if ( player == 5 ) {
        alert("WE HAVE A WINNER!!");
        buttons.removeEventListener( 'click', playerSelection );
        playAgain();
        return;
        // gameEnd();
    } else if ( computer == 5 ) {
        alert("WE HAVE A LOSER!!");
        buttons.removeEventListener( 'click', playerSelection );
        playAgain();
        return;
        // gameEnd();
    } else return;
}


function playAgain() {
    let promptRaw = prompt('Would you like to play again? (y/n)', 'y')
    if (promptRaw == null) { alert("I'LL TAKE THAT AS A NO! JEEZ!!!"); return; }
    let decision = promptRaw.toLowerCase();
    if (decision === 'y' || decision === 'yes' ) {
        alert("GOOD CHOICE!");
        restartGame();
    } else if (decision === 'n' || decision === 'no' ) {
        alert("OH WELL, MAYBE NEXT TIME...");
        return;
    } else {
        alert("ERROR @ playAgain()!!");
        return;
    }
}


function restartGame() {
    let resultsDiv = document.getElementById('results');
    let lastLogEntry = resultsDiv.lastChild.id;
    console.log("lastLogEntry = " + lastLogEntry);
    let maxEntries = lastLogEntry.slice(4);
    console.log('maxEntries = ' + maxEntries)
    for (i = 1; i <= maxEntries; i++) {
        let currentId = `para${i}`;
        console.log(currentId);
        let currentPara = document.getElementById(currentId);
        console.log(currentPara);
        currentPara.remove()
    }
    updateScore('reset')
    numberId = 0
    startGame()

}



startGame()

// END END END END END END END END END END END END END END END END END END END END END END END END END END END END END END END END END END END








































/*
function playerSelection() {
    window.addEventListener('click', function(e) {
        const buttonSelected = document.querySelector(e.target.id);
        console.log(e.target.id)
        if (e.target.id === 'rock') {
            printIt('Rock')
            return Rock;
        } else if (e.target.id === 'paper') {
            printIt('Paper')
            return Paper;
        } else if (e.target.id === 'scissors') {
            printIt('Scissors')
            return Scissors;
        } else {
            console.log("ERROR! Bad input!")
            return;
        }
    })
}
*/









function gamePlay() {
   playRound(playerSelection(), getComputerChoice());
}











/*
function gamePlay() {
    console.log(gameState);
    let i = 0;
    for (gameState = 0; gameState < 1; i++) {
    let round = playRound(playerSelection(), getComputerChoice());

    if (round == "win") {
        playerWins++;
        console.log(`p (+1) = ${playerWins} and c = ${compWins} with ${totalTies} ties.`)
        let gameState = checkWinner(playerWins, compWins);
        console.log(gameState);
    } else if(round == "loss") {
        compWins++;
        console.log(`p = ${playerWins} and c (+1) = ${compWins} with ${totalTies} ties.`)
        let gameState = checkWinner(playerWins, compWins);
        console.log(gameState);
    } else if(round == "tie") {
        totalTies++;
        console.log(`p = ${playerWins} and c = ${compWins} with (+1) ${totalTies} ties.`)
        let gameState = checkWinner(playerWins, compWins);
        console.log(gameState);
    } else alert("SOMETHING WENT WRONG with game()!!!!")
    
    // use playRound here to play rounds - first to 5 wins.
    // report the player as a winner or loser at the end.
    }
}
*/


    /*
    if (promptRaw == null) {
        alert("You MUST make a selection to proceed")
        throw new Error("You MUST make a selection to proceed");
        } else {
        let promptSelect = promptRaw.charAt(0).toUpperCase() + promptRaw.slice(1);
        if (promptSelect == "Rock") {
            return "Rock";
        } else if (promptSelect == "Paper") {
            return "Paper";
        } else if (promptSelect == "Scissors") {
            return "Scissors";
        } else alert("Bad input! Try again!");
    }*/






/*
function gameEnd() {
    let keepGoing = prompt("Would you like to play another round?", "N")
    if (keepGoing == "Y") {
        gamePlay();
    } else { alert ("Too Bad....");
    }
}
*/




/*
function gameStart() {
    window.addEventListener('click', function(e) {
        const buttonSelected = document.getElementById(e.target.id);
        console.log(e.target.id)
        console.log(buttonSelected)
        if (e.target.id === 'start') {
            buttonSelected.classList.add('hiddenButton');
        //    playerSelection()
        } else {
            console.log('ERROR at gameStart()')
            return;
        }
    })
}
*/