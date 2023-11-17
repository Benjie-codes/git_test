let errorEl = document.getElementById('error')
console.log(errorEl)

let saveEl = document.getElementById('save-el')
let count_El = document.getElementById("count_el")
let count = 0

function increment(){
    count += 1
    count_El.textContent=count
    //code to test error application
    errorEl.textContent = "Something went wrong, please try again"
}

function save() {
    entries = count + ' - '
    saveEl.textContent += entries
    console.log(saveEl.textContent)
    count = 0
    count_El.textContent=count
}



