const messageEl = document.getElementById("message-el");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const playerEl = document.getElementById("player-el");

const player = "Nikita";
let chips = 150;

playerEl.textContent = `${player} : $${chips}`;

let message = "";
let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = randomCard();
  let lastCard = randomCard();
  cards = [firstCard, lastCard];
  sum = firstCard + lastCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum : " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Whoo! you've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game.";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = randomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
