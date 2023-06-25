let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.getElementById("player-el")

let sum = 0
let hasBlackjack = false
let isAlive = false
let cards = []
let player = {
    name: "Michael Eva",
    chips: 13
}

//displaying player details onto index
playerEl.textContent = player.name + ": $" + player.chips

// console.log(cards)

// function to draw random card
function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 11) + 1
    return randomCard
}

// main gameplay function
function renderGame() {

    // displaying the array of cards 
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackjack = true
        messageEl.textContent = "Blackjack!"
    } else if (sum > 21) {
        isAlive = false
        messageEl.textContent = "You're out of the game, bucko!"
    }
}
// draw a new card
function newCard() {
    let newCard = getRandomCard()

    // only able to draw new card if user isAlive and doesn't have blackjack
    if (isAlive === true && hasBlackjack === false) {
        sum += newCard
        cards.push(newCard)
        // console.log(cards)
        renderGame()
    }

}

//initialise game to get started
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}