const btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

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

let textHTML1 = "Wash Car"
let textHTML2 = "Mow Lawn"
let textHTML3 = "Pull Weeds"

let amountSpan = document.getElementById("amount-span")
let amount2Span = document.getElementById("amount2-span")
let amount3Span = document.getElementById("amount3-span")

let total = []
let total1 = []
let total2 = []
let container = document.getElementById("container")

function Add(price) {
    return sum += price
}



btn1.addEventListener("click", function() {
    amount.innerHTML = ` <span style="color: #918E9B" >$</span>${fisrtPrice} `
    Add(fisrtPrice)
    totalAmount.innerHTML = `<p id="color1">$${sum} <p> `
    text1.textContent = textHTML1
    total2.push(fisrtPrice)
    totalAmount.style.color = "#4A4E74"; 
  
  
 
   for (let i = 0; i < total2.length; i++) {

       amountSpan.innerHTML = total2.length
    
   }
    
  
})

btn2.addEventListener("click", function() {

  amount2.innerHTML =  ` <span style="color: #918E9B" >$</span>${secondPrice} `
    Add(secondPrice)
    totalAmount.textContent = sum
text2.textContent = textHTML2
    total1.push(secondPrice)
    //generateTotal(total1)
    
    //generateTotal(total)
  
 
   for (let i = 0; i < total1.length; i++) {

        amount2Span.innerHTML = total1.length
    
   }
 

    
})
btn3.addEventListener("click", function() {

    amount3.innerHTML = "$" + thirdPrice
    Add(thirdPrice)
    totalAmount.textContent = sum
    text3.textContent = textHTML3 
    total.push(thirdPrice)
    //generateTotal(total)
  
 
   for (let i = 0; i < total.length; i++) {

        amount3Span.innerHTML = total.length
    
   }
})



function remove() {
    element.remove();
}

/* function generateTotal(arr) {
   let bla 
    for (let i = 0; i < arr.length; i++) {
        bla += arr[i] 
    }
   return bla

}
*/
