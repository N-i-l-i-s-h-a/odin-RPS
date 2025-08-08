//onStart() : to initialize scores to zero
//displayScore() : fired when start is clicked
//updateScore() : updates the scoreboard according to humanChoice and machiineChoice, fired when any button is clicked
//getComputerChoice() : 
// random generator function

var scoreH, scoreM;

function onStart(){
    scoreH = 0;
    scoreM = 0;
    playRound();
}

function getComputerChoice(){
    const ch = ['rock', 'paper', 'scissors'];
    const r = Math.floor(Math.random() * 10);
    return ch[r % 3];
}

function playRound(){
    displayScore();
}

function displayScore(){
    const mid = document.querySelector("#middle");
    mid.innerText = "";
    const scoreBoard = document.createElement("div");
    const score = document.createElement("div");
    const human = document.createElement("div");
    const machine = document.createElement("div");
    score.innerText = "SCORE";
    human.innerText = `Human : ${scoreH}`;
    machine.innnerText = `Machine : ${scoreM}`;
    scoreBoard.style.cssText = "width: 300px; height: 400px; padding: 16px; display: flex; flex-direction: column; justify-content: center; align-items: space-evenly;";
    score.style.cssText = "font-size: 55px;";
    return;
}