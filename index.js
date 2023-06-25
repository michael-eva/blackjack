let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let cards = [firstCard, secondCard]


function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    return randomCard
}

function renderGame() {

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

function newCard() {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    // console.log(cards)
    renderGame()
}

function startGame() {
    renderGame()
}