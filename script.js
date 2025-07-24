//Functions:
// playRound: Function to play a single round of Rock, Paper, Scissors
// getResults: Returns the result of the round
// getComputerChoice: Function to randomly select Rock, Paper, or Scissors
// getHumanChoice: Function to get the user's choice
// updateScore: Function to update the scores based on the choices made

function getComputerChoice() {
    const ch = ['rock', 'paper', 'scissors'];
    const r = Math.floor(Math.random() * 10);
    return ch[r % 3];
}

function getHumanChoice(){
    var ch = prompt("Enter your choice: Rock, Paper or Scissors");
    ch = (ch.trim()).toLowerCase();
    if(ch === "rock" || ch === "paper" || ch === "scissors") {
        return ch;
    }
    else {        
        alert("Invalid choice. Please enter Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
    
}

function updateScore(hum, com){
    if(hum === com){
        scoreC++;
        scoreH++;
    }
    else if(hum === "rock"){
        if(com === "scissors"){
            scoreH++;
        }
        else{
            scoreC++; 
        }
    }
    else if(hum === "paper"){
        if(com === "rock"){
            scoreH++;
        }
        else{
            scoreC++;
        }
    }
    else{
        if(com === "paper"){
            scoreH++;
        }
        else{
            scoreC++;
        }
    }
}

function playRound(){
    console.clear();
    scoreH = 0;
    scoreC = 0;
    for(let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        const com = getComputerChoice();
        const hum = getHumanChoice();
        updateScore(hum, com, scoreH, scoreC);
        console.log(`Human: ${scoreH} \tComputer: ${scoreC}`);
    }
    return getResults();
}

function getResults() {
    var diff = scoreH - scoreC;
    if(diff === 0){
        console.log("It's a tie!");
    }
    else if(diff > 0){
        console.log(`You win by ${diff} ${diff > 1 ? "points" : "point"}!`);
    }
    else{
        console.log(`You lose by ${Math.abs(diff)} ${diff < -1 ? "points" : "point"}.`);
    }
    prompt("Do you want to play again? (yes/no)", "yes") === "yes" ? playRound() : console.clear(); 
}


//The game starts here
alert("Welcome to Rock, Paper, Scissors!\nLet's play for 5 rounds and see who wins!");
var scoreC, scoreH;
playRound();
