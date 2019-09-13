
var square1 = document.getElementById("div1")
var square2 = document.getElementById("div2")
var square3 = document.getElementById("div3")
var button = document.getElementById("buttonClick")
var button2 = document.getElementById("buttonAntiClick")
var counter = 0;
var buttoncounter = 0;
var buttonCount = document.getElementById("buttonCount")


square1.addEventListener("click", function(){
  if(counter < 4) {
  this.classList.toggle("divChange")
  counter++
  }
})

square2.addEventListener("mouseover", function(){
  square3.classList.toggle("hidden")
})

button.addEventListener("click", function(){
  buttoncounter++
  updateButtonCount()
})

button2.addEventListener("click", function(){
  buttoncounter--
  updateButtonCount()
})

function updateButtonCount(){
  buttonCount.innerHTML = buttoncounter
}
