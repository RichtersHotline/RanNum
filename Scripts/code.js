let randomNumber = Math.random() * 10
let RandomDisplay = document.getElementById("NumberCheck")


console.log(Math.trunc(randomNumber))
document.getElementById("NumberCheck").innerHTML = Math.trunc(randomNumber)