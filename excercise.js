// document.getElementById("count_el").innerHTML=5

// let myAge = 23 console.log(myAge)

// function increment() {

// }

// Lap increment function
// let lapsCompleted = 0

// function totalLap() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }

// totalLap()
// totalLap()
// totalLap()

// let username = 'benji'

// let message = 'You have three new notifications'
// let messageToUser = username + ', ' + message+ "!"

// console.log(messageToUser)

// let name = 'benji'
// let greeting = 'Hi, my name is '

// myGreeting = greeting + name
// console.log(myGreeting)

let welcomeEl = document.getElementById("welcome-el")
let name = 'Benjamin'
let greeting = 'Welcome back, '

welcomeEl.innerText= greeting + name
welcomeEl.innerText += '😉'

let firstName = "Benjamin"
let lastName = "Samuel"
let fullName = firstName +" "+ lastName 
console.log(fullName)

// let name = 'linda'
// let greeting = 'Hi there'

// function welcome(){
//     str = greeting + ", " + name + "!"
//     console.log(str)
// }
// welcome()

// let myPoints = 3

// function add3Points(){
//     myPoints += 3
//     console.log(myPoints)
// }

// function remove1Point(){
//     myPoints -= 1
//     console.log(myPoints)
// }

// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// add3Points()
// console.log(myPoints)

let num1 = 8
let num2 = 2

let num1El = document.getElementById("num1-el").textContent= num1
let num2El = document.getElementById("num2-el").textContent= num2
let symEl = document.getElementById("symbol")

let totalEl = document.getElementById("sum-el")  

function add(){
    addition = num1 + num2
    totalEl.textContent += addition
    symEl.textContent = ('+')
}

function subtract(){
    sub = num1 - num2
    totalEl.textContent += sub
    symEl.textContent = ('-')
}

function divide(){
    div = num1 / num2
    totalEl.textContent += div
    symEl.textContent = ('/')
}

function multiply(){
    mult = num1 * num2
    totalEl.textContent += mult
    symEl.textContent = ('*')
}




