//Declaring global variables
let firstCard =  generateNumber();
let secondCard =  generateNumber();
let sumOfCards = 0;
let displayCardsEl = document.getElementById("display-cards");
let displaySumEl = document.getElementById("display-cards-sum");
let displayMessageEl = document.getElementById("display-message");
let gameCards = [firstCard,secondCard];
let isAlive = false;
let hasBlackJack = false;

//Declaring and defining methods and implementation

//Generates a random number between (1-11)
function generateNumber(){
  return Math.floor(Math.random()*11)+1;
}


function renderGame(){
  let message = "";

  for(counter of gameCards){
    sumOfCards +=counter;
  }

  if (sumOfCards < 21 && isAlive===true){
    message="Do you want to draw another card?";
  } else if(sumofCards === 21){
    message = "You got the black jack";
  } else if(sumCards>21 && isAlive===true){
    message= "You are out of the game!!!";
    isAlive=false;
  }

  displayMessageEl.textContent = message;
}

function startGame(){
  for(counter of gameCards){
    displayCardsEl.textContent += counter + " - ";
  }
  renderGame();
}


function generateNewCard(){
  let newCard = randomNumber;
  gameCards.push(newCard);
  renderGame();
}
