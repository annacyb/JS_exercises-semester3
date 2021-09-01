"use strict";

let startValue = document.querySelector(".typewritten").textContent
document.querySelector(".typewritten").textContent = ""

let splittedSentence = startValue.split("")
console.log(splittedSentence)

let iterator
let maxNumber
let a
init()

function init() {
    iterator = -1
    maxNumber = startValue.length
    console.log(maxNumber)
    loop()
}

function loop() {
    iterator++
    a = splittedSentence[iterator]
    document.querySelector(".typewritten").textContent += a
    // console.log(a)
    if(iterator < maxNumber) {
        setTimeout(loop, 500)
    }
}








