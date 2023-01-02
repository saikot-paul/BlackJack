const cards = []; 
let isAlive = null; 
let startClick = null; 
let cardsEl = document.getElementById("cards-el"); 
let sumEl = document.getElementById("sum-el"); 
let startEl = document.getElementById("start-game")
let restartEl = document.getElementById("restart-game")
let new_cardEl = document.getElementById("new-card");
let progressEl = document.getElementById("progress-message");
let errorEl = document.getElementById("error"); 
let message = ""; 


function startGame(){ 

    isAlive = true; 
    cards.push(getRandomInt())
    cards.push(getRandomInt())
    console.log("IN START GAME");
    console.log(cards);
    card_str = getCardString();
    cardsEl.textContent = "Cards: " + card_str; 
    startClick = true; 

    checkGameRules(); 
    
    if (startClick = true){ 
        startEl.disabled = true; 
        new_cardEl.disabled = false; 
        new_cardEl.textContent = "NEW CARD";
        progressEl.textContent = "GAME IN PROGRESS";
    }
    
}

function checkGameRules() {
    
    let sum = 0; 
    
    sum = getSum(cards);

    sumEl.textContent = "Sum: " + sum; 
    
    if (sum <= 20) {
        message = "Do you want a new card?";
    } else if (sum === 21) {
        message = "You won!!!";
        isAlive = false;  
    } else {
        message = "You lost! Press RESTART, then START GAME to play again";
        isAlive = false; 
    }

    let resultEl = document.getElementById('message-el');

    let restart = ''; 
    
    if (!isAlive){ 
        new_cardEl.disabled = true; 
        errorEl.textContent = "YOU LOST, PRESS RESTART"
    }

    resultEl.textContent = message;
}

function getSum() {

    let card_sum = 0; 
    
    for (const num in cards) {
        card_sum += cards[num];
    }
    
    return card_sum; 
}

function getCardString() {
    let card_str = null;
    console.log(card_str);
    for (const num in cards) {
        if (!card_str) {
            card_str = cards[num];
        } else {
            card_str += ", " + cards[num];
        }
    }
    console.log(card_str);
    return card_str; 
}

function newCard(){ 
    
    cards.push(getRandomInt()); 
    cardsEl.textContent = "Cards: " + getCardString(); 
    checkGameRules(); 

}

function restart(){ 
    cards.length=0; 
    startClick = false; 
    startEl.disabled = false; 
    startEl.textContent = "START GAME"; 
    cardsEl.textContent = "Cards: "; 
    new_cardEl.textContent = "NEW CARD"; 
    sumEl.textContent = "Sum: "; 
    errorEl.textContent = "";
}

function getRandomInt(){ 
    min = 2; 
    max = 12; 

    min = Math.ceil(min); 
    max = Math.floor(max); 

    return Math.floor(Math.random()*(max-min)+min);
}