// let messages = [
//     "Hey, how is it going?",
//     "I'm great, thank you! How about you!",
//     "All good, been working on my portfolio lately"
// ]

// let newMessage = "Same here!"

// // adds items to an array
// messages.push(newMessage)
// console.log(messages)

// //removes items from an array
// messages.pop(messages[4])
// console.log(messages)

// for (let i = 10; i <= 100; i += 10){
//     console.log(i)
// }

// let cards = [7, 3, 9]

// for(let i = 0; i<cards.length; i++){
//     console.log(cards[i])
// }

// sentence = ["Hello", "my", "name", "is", "Ben"]
// let greetingEl = document.getElementById('greeting-el')

// for (let i = 0; i < sentence.length; i++){
//     greetingEl.textContent += sentence[i] + " "
// }

let player1Time = 102
let player2Time = 107

function totalRaceTime(){
    totalTime = player1Time + player2Time
    return totalTime
}

let raceTime = totalRaceTime()
console.log(raceTime)

// for(i = 0; i < 9; i++){
//     let randomNumber = Math.random() * 6 + 1
//     console.log(randomNumber)
//     let flooredNumber = Math.floor(randomNumber)
//     console.log(flooredNumber)
// }

// function rollDice(){
//     return Math.floor(Math.random()*6+1)
// }
// console.log(rollDice())

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }

// function showSolution(){
//     console.log("Showing the solutions......")
// }

likesDocomentaries = true
likesStartups = true

if (likesDocomentaries ===true || likesStartups===true){
    recommendMovie()
}

function recommendMovie(){
    console.log("Hey, check out this new movie we think you'll like")
}