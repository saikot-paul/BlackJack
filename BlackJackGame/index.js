
function getRandomInt(){ 
    min = 2; 
    max = 12; 

    min = Math.ceil(min); 
    max = Math.floor(max); 

    return Math.floor(Math.random()*(max-min)+min);
}

const cards = []; 
let hasBJ = false; 
let isAlive = true; 
let cardsEl = document.getElementById("cards-el"); 
let sumEl = document.getElementById("sum-el"); 
let message = ""; 


function startGame(){ 
    
    cards.push(getRandomInt())
    cards.push(getRandomInt())
    console.log("IN START GAME");
    console.log(cards);
    card_str = getCardString();
    cardsEl.textContent = "Cards: " + card_str; 
    
    checkGameRules(); 

}

function checkGameRules() {
    
    let sum = 0; 

    sum = getSum(cards);

    sumEl.textContent = "Sum: " + sum; 

    if (sum <= 20) {
        message = "Do you want a new card?";
    } else if (sum === 21) {
        message = "You won!!!";
        hasBJ = true;
    } else {
        message = "You lost!";
        isAlive = false;
    }

    let resultEl = document.getElementById('message-el');

    let restart = ''; 
    if (!isAlive){ 
        restart = "\n Press restart to try again"
    }

    resultEl.textContent = message + restart;
}

function getSum(sum) {

    let sum = 0; 

    for (const num in cards) {
        sum += cards[num];
    }

    return sum;
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
    startGame();
}