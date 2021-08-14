import Deck from "./deck.js";

const computerCardSlot = document.querySelector(".computer-card-slot")

let playerDeck, computerDeck

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()  

    const deckMidpoint = Math.cell(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    computerDeck
}


computerCardSlot.appendChild(deck.cards[0].getHTML())
