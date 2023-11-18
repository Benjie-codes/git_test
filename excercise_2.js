let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""

let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")

function startGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card? "
    } else if (sum === 21){
        message = "You've got blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    cardEl.textContent = "Cards: " + firstCard +", "+ secondCard
    sumEl.textContent = "Sum: " + sum

    messageEl.textContent = message
}
cardEl()