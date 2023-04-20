
let sum = 0
let cards = []
hasBlackJack = false
isAlive = false
message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")

let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")


//player object

let player={
    name:"Yashu",
    chips:120
}

let PlayerEl = document.querySelector("#player-el")
PlayerEl.textContent = player.name + ": $"+player.chips

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1
    if (randomNum === 1)
        return 11
    else if (randomNum > 10)
        return 10
    else
        return randomNum
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card? "

    }

    else if (sum === 21) // === means strictly equals

    {
        message = "You've got Blackjack "

        hasBlackJack = true
    }

    else {
        message = "You're out of the game"

        isAlive = false
    }
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum

}

function newCard() {

    if (!hasBlackJack && isAlive) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()

    }
}  