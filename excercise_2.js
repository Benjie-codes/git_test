cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13 + 1 )
    if (randomNumber === 1){
        return 11
    } else if (randomNumber > 10){
        return 10
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum 
   
    for (i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
        console.log(cards.length)
    }

    if (sum <= 20){
        message = "Do you want to draw a new card? "
    } else if (sum === 21){
        message = "You've got blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

