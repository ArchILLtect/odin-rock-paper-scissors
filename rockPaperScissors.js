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
    let promptSelect = promptRaw.charAt(0).toUpperCase() + promptRaw.slice(1);

    if (promptSelect == "Rock") {
        return "Rock";
    } else if (promptSelect == "Paper") {
        return "Paper";
    } else if (promptSelect == "Scissors") {
        return "Scissors";
    } else alert("Bad input! Try again!")
}


function playRound(a, b) {

    if (a == "Rock" && b == "Rock" || a == "Paper" && b == "Paper" || a == "Scissors" && b == "Scissors") {
        // alert(`Tie! You both chose ${a} ${b}.`);
        printIt(`Tie! You both chose ${a} ${b}.`);
        // return "Tie! You both chose ${a}";
    } else if ((a == "Rock" && b == "Scissors") || (a == "Paper" && b == "Rock") || (a == "Scissors" && b == "Paper")) {
        // alert(`You win! ${a} beats ${b}!`);
        printIt(`You win! ${a} beats ${b}!`);
        // return "Win! ${a} beats ${b}";
    } else if ((b == "Rock" && a == "Scissors") || (b == "Paper" && a == "Rock") || (b == "Scissors" && a == "Paper")) {
        // alert(`You lose! ${b} beats ${a}.`);
        printIt(`You lose! ${b} beats ${a}.`);
        // return "Loss! ${b} beats ${a}";
    } else alert("SOMETHING WENT WRONG!!!!")


    // return a string that declares the winner of the round
    // "You Lose! Paper beats rock"
    

}






/*

function game() {
    use playRound here to play rounds - first to 5 wins.
    report the player as a winner or loser at the end.
}



*/


