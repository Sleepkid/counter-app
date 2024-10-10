let saveEl= document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let clearEl = document.getElementById("clear-el")


 let countvalue = 0
 console.log(saveEl)



 function increment(){
 countvalue +=1
 countEl.textContent =countvalue
 
 
 }
 function decrement(){
 countvalue -= 1
 countEl.textContent = countvalue
 }

 
function save() {
  let countstr = countvalue + '- '
  saveEl.textContent += countstr
  console.log(countvalue)
  countvalue = 0
  countEl.textContent = countvalue
 }

 
 

 
