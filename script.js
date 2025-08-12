//onStart() : to initialize scores to zero
//displayScore() : fired when start is clicked
//updateScore() : updates the scoreboard according to humanChoice and machiineChoice, fired when any button is clicked
//getComputerChoice() : 
// random generator function

var scoreH, scoreM;
var sel = null, selC = null;

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
    if(sel != null && selC != null){
        sel.classList.remove("selected");
        selC.classList.remove("selected");
    }
    sel = document.querySelector("#scissors");
    sel.classList.add("selected");

    let com = getComputerChoice();

    if(com === "rock"){
        selC = document.querySelector("#rockM");
        scoreM++;
    }
    else if(com === "paper"){
        selC = document.querySelector("#paperM");
        scoreH++;
    }
    else{
        selC = document.querySelector("#scissM");
    }

    selC.classList.add("selected");
    displayScore();
}

function selPaper(){
    if(sel != null && selC != null){
        sel.classList.remove("selected");
        selC.classList.remove("selected");
    }
    sel = document.querySelector("#paper");
    sel.classList.add("selected");

    let com = getComputerChoice();

    if(com === "rock"){
        selC = document.querySelector("#rockM");
        scoreH++;
    }
    else if(com === "scissors"){
        selC = document.querySelector("#scissM");
        scoreM++;
    }
    else{
        selC = document.querySelector("#paperM");
    }

    selC.classList.add("selected");
    displayScore();
}

function selRock(){
    if(sel != null && selC != null){
        sel.classList.remove("selected");
        selC.classList.remove("selected");
    }

    sel = document.querySelector("#rock");
    sel.classList.add("selected");

    let com = getComputerChoice();

    if(com === "paper"){
        selC = document.querySelector("#paperM");
        scoreM++;
    }
    else if(com === "scissors"){
        selC = document.querySelector("#scissM");
        scoreH++;
    }
    else{
        selC = document.querySelector("#rockM");
    }

    selC.classList.add("selected");
    displayScore();
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
    machine.innerText = `Computer : ${scoreM}`;
    scoreBoard.style.cssText = "width: 300px; height: 300px; background-color: bisque; padding: 0px 16px 0px 16px; border: 2px dashed rgba(0, 0, 0, 0.507); border-radius: 10%; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center;";
    score.style.cssText = "font-size: 55px; background-color: bisque;";
    human.style.cssText = "font-size: 45px; background-color: bisque; ";
    machine.style.cssText = "font-size: 45px; background-color: bisque; ";
    scoreBoard.appendChild(score);
    scoreBoard.appendChild(human);
    scoreBoard.appendChild(machine);
    mid.appendChild(scoreBoard);
    if(scoreM === 5 && scoreH === 5){
        score.innerText = "It's a tie!";
        score.style.cssText = "color: rgb(8, 111, 214); font-size: 50px; background-color: bisque;";
        return endGame();
    }
    if(scoreH === 5){
        score.innerText = "You won!";
        score.style.cssText = "color: rgb(8, 111, 214); font-size: 50px; background-color: bisque;";
        return endGame();
    }
    if(scoreM === 5){
        score.innerText = "Computer won!";
        score.style.cssText = "color: rgb(8, 111, 214); font-size: 50px; background-color: bisque;";
        return endGame();
    }
}

function endGame(){
    if(sel != null && selC != null){
        sel.classList.remove("selected");
        selC.classList.remove("selected"); 
    }
    const scoreBoard = document.querySelector("#middle>div");
    const restart = document.createElement("button");
    restart.setAttribute("id", "restart");
    restart.style.cssText = "background-color: bisque; margin-top: 16px;";
    restart.setAttribute("onclick", "onStart()");
    const img = document.createElement("img");
    img.setAttribute("src", "assets/redopx.png");
    img.style.cssText = "height: 48px; width: 48px; background-color: bisque;";
    restart.appendChild(img);
    scoreBoard.appendChild(restart);
}