// Created 8/23/23 by ArchILLtect


let numberId = 0;

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

function printIt(a) {
    const para = document.createElement("p");
    numberId++;
    para.id = "para" + numberId;
    const currentDiv = document.getElementById("results");
    currentDiv.insertAdjacentElement("beforeend", para);
    console.log(a)
    document.getElementById("para" + numberId).innerHTML = a ;
}

function playerSelection() {
    // Make sure the var playerSelection is NOT case-sensitive.
    // Need an if for null.
    let promptRaw = prompt("Pick one: Rock, Paper or Scissors", "Rock");

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
    }
}


function playRound(a, b) {

    if (a == "Rock" && b == "Rock" || a == "Paper" && b == "Paper" || a == "Scissors" && b == "Scissors") {
        // alert(`Tie! You both chose ${a} ${b}.`);
        // printIt(`Tie! You both chose ${a} ${b}.`);
        return "tie";
    } else if ((a == "Rock" && b == "Scissors") || (a == "Paper" && b == "Rock") || (a == "Scissors" && b == "Paper")) {
        // alert(`You win! ${a} beats ${b}!`);
        // printIt(`You win! ${a} beats ${b}!`);
        return "win";
    } else if ((b == "Rock" && a == "Scissors") || (b == "Paper" && a == "Rock") || (b == "Scissors" && a == "Paper")) {
        // alert(`You lose! ${b} beats ${a}.`);
        // printIt(`You lose! ${b} beats ${a}.`);
        return "loss";
    } else alert("SOMETHING WENT WRONG with playRound()!!!!")


    // return a string that declares the winner of the round
    // "You Lose! Paper beats rock"
    

}

let playerWins = 0;
let compWins = 0;
let totalTies = 0;
let gameState = 0;



function gamePlay() {
    printIt(playRound(playerSelection(), getComputerChoice()));
    printIt(playRound(playerSelection(), getComputerChoice()));
    printIt(playRound(playerSelection(), getComputerChoice()));
    printIt(playRound(playerSelection(), getComputerChoice()));
    printIt(playRound(playerSelection(), getComputerChoice()));
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



function checkWinner( a , b ) {
    if ( a == 5 ) {
        alert("WE HAVE A WINNER!!");
        return 1;
        // gameEnd();
    } else if ( b == 5 ) {
        alert("WE HAVE A LOSER!!");
        return 1;
        // gameEnd();
    } else return 0;
}

/*
function gameEnd() {
    let keepGoing = prompt("Would you like to play another round?", "N")
    if (keepGoing == "Y") {
        gamePlay();
    } else { alert ("Too Bad....");
    }
}
*/

