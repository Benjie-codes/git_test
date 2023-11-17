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

let count_El = document.getElementById("count_el")

let count = 0

function increment(){
    count = count + 1
    count_El.innerText=count
}

function save() {
    console.log(count)
}

save()


