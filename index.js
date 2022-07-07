let countEl = document.getElementById("count-el")//pass argument
let saveEl = document.getElementById("save-el")
let count = 0
 //function that listens on click
 function increment(){
     count += 1
     countEl.textContent = count
    // console.log(count)
 }
 function save()
 {
   
// 1. Grab the save-el paragrah and store it in a variable called saveEl

console.log(saveEl)
// 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
let countStr = count + " - "
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr
    // NB: Make sure to not delete the existing content of the paragraph
    countEl.textContent = 0
    count = 0

   console.log(count)
 } 

