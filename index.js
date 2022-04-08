const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")

const amount = document.getElementById("amount")
const amount2 = document.getElementById("amount2")
const amount3 = document.getElementById("amount3")

let totalAmount = document.getElementById("total-amount")

let text1 = document.getElementById("text1")
let text2 = document.getElementById("text2")
let text3 = document.getElementById("text3")

let sum = 0
let fisrtPrice = 10
let secondPrice = 20 
let thirdPrice = 30

let amountSpan = document.getElementById("amount-span")
let amount2Span = document.getElementById("amount2-span")
let amount3Span = document.getElementById("amount3-span")

let total = []
let total1 = []
let total2 = []

let container = document.getElementById("container")

function Add(price) {
     sum += price
     let ourText = `<p id="color1">$${sum} <p> `
     totalAmount.innerHTML = ourText
     totalAmount.style.color = "#4A4E74"; 
   
}
  
btn1.addEventListener("click", function() {
    amount.innerHTML = ` <span style="color: #918E9B" >$</span>${fisrtPrice} `
    Add(fisrtPrice)
    text1.textContent = "Wash Car"
    total2.push(fisrtPrice)
      amountSpan.innerHTML = total2.length  
 
})


btn2.addEventListener("click", function() {

    amount2.innerHTML =  ` <span style="color: #918E9B" >$</span>${secondPrice} `
    Add(secondPrice)
    text2.textContent = "Mow Lawn"
    total1.push(secondPrice)
     amount2Span.innerHTML = total1.length
 
  
     
})

btn3.addEventListener("click", function() {
    amount3.innerHTML =  ` <span style="color: #918E9B" >$</span>${thirdPrice} `
    Add(thirdPrice)

    text3.textContent = "Pull Weeds" 
     total.push(thirdPrice)
     amount3Span.innerHTML = total.length

})
