// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Victor Trujillo" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0
let totalQty = document.querySelector('#qty-total')
let qtyGb = document.querySelector('#qty-gb')
let qtyCc = document.querySelector('#qty-cc')
let qtySugar = document.querySelector('#qty-sugar')

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
// HINT: You can delete this console.log after you no longer need it!
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons
gbPlusBtn.addEventListener('click', function() {
gb++
qtySugar.textContent = sugar
total++
totalQty.textContent = total
})
gbMinusBtn.addEventListener('click', function(){
gb--
qtyGb.textContent = gb
total--
totalQty.textContent = total    
})

ccPlusBtn.addEventListener('click', function(){
cc++
qtyCc.textContent = cc
total++
totalQty.textContent = total
})
ccMinusBtn.addEventListener('click', function(){
cc--
qtyCc.textcontent = cc
total--
totalQty.textContent = total    
})

sugarPlusBtn.addEventListener('click', function(){
sugar++
qtySugar.textContent = sugar
total++ 
totalQty.textContent = total    
})
sugarMinusBtn.addEventListener('click', function(){
sugar--
qtySugar.textContent = sugar
total--
totalQty.textContent = total    
})
