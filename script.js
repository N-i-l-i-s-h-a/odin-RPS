//onStart() : to initialize scores to zero
//displayScore() : fired when start is clicked
//updateScore() : updates the scoreboard according to humanChoice and machiineChoice, fired when any button is clicked
//getComputerChoice() : 
// random generator function

var scoreH, scoreM;

function onStart(){
    scoreH = 0;
    scoreM = 0;
    displayScore()
}

function getComputerChoice(){
    const ch = ['rock', 'paper', 'scissors'];
    const r = Math.floor(Math.random() * 10);
    return ch[r % 3];
}

function selSciss(){
    const sel = document.querySelector("#scissors");
    sel.classList.add("selected");
    let com = getComputerChoice();
    if(com === "rock"){
        const selC = document.querySelector("#rockM");
        selC.classList.add("selected");
        scoreM++;
    }
    else if(com === "paper"){
        const selC = document.querySelector("#paperM");
        selC.classList.add("selected");
        scoreH++;
    }
    console.log(`com: ${com} \n hum: scissors`);
    displayScore();
    sel.classList.remove("selected");
}

function selPaper(){
    const sel = document.querySelector("#paper");
    sel.classList.add("selected");
    let com = getComputerChoice();
    if(com === "rock"){
        const selC = document.querySelector("#rockM");
        selC.classList.add("selected");
        scoreH++;
    }
    else if(com === "scissors"){
        const selC = document.querySelector("#scissM");
        selC.classList.add("selected");
        scoreM++;
    }
    console.log(`com: ${com} \n hum: paper`);
    displayScore();
    sel.classList.remove("selected");
}

function selRock(){
    const sel = document.querySelector("#rock");
    sel.classList.add("selected");
    let com = getComputerChoice();
    if(com === "paper"){
        const selC = document.querySelector("#paperM");
        selC.classList.add("selected");
        scoreM++;
    }
    else if(com === "scissors"){
        const selC = document.querySelector("#scissM");
        selC.classList.add("selected");
        scoreH++;
    }
    console.log(`com: ${com} \n hum: rock`);
    displayScore();
    sel.classList.remove("selected");
}

function displayScore(){
    const mid = document.querySelector("#middle");
    mid.innerText = "";
    var scoreBoard = document.createElement("div");
    var score = document.createElement("div");
    var human = document.createElement("div");
    var machine = document.createElement("div");
    score.innerText = "SCORE";
    human.innerText = `Human : ${scoreH}`;
    machine.innerText = `Machine : ${scoreM}`;
    scoreBoard.appendChild(score);
    scoreBoard.appendChild(human);
    scoreBoard.appendChild(machine);
    scoreBoard.style.cssText = "width: 300px; height: 300px; background-color: bisque; padding: 0px 16px 0px 16px; border: 2px dashed rgba(0, 0, 0, 0.507); border-radius: 10%; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center;";
    score.style.cssText = "font-size: 55px;";
    human.style.cssText = "font-size: 45px;";
    machine.style.cssText = "font-size: 45px;";
    mid.appendChild(scoreBoard);
    if(scoreM === 5 && scoreH === 5){
        displayRes("Tie");
    }
    if(scoreH === 5){
        displayRes("Computer");
    }
    if(scoreM === 5){
        displayRes("Human");
    }
}

function displayRes(winner){
    const mid = document.querySelector("#middle");
    mid.innerText = "";
    var scoreBoard = document.createElement("div");
    if(winner === "Tie"){
        scoreBoard.innerText = "It's a tie!";
    }
    else{
        scoreBoard.innerText = `${winner} won!`;
    }
    scoreBoard.style.cssText = "font-size: 45px; width: 300px; height: 200px; background-color: rgba(102, 165, 43, 0.45); padding: 0px 16px 0px 16px; border: 2px dashed rgba(0, 0, 0, 0.507); border-radius: 10%; display: flex; justify-content: center; align-items: center;";
    mid.appendChild(scoreBoard);
}