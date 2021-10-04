"use strict"

window.addEventListener("DOMContentLoaded", init)

function init() {
    let textElement = document.querySelector("#coolText").textContent
    document.querySelector("#coolText").textContent = ""
    const splittedTextArray = splitText(textElement)
    const parentElement = document.querySelector("#coolText")
    createSpanWithEffect(splittedTextArray, parentElement)
}

function splitText(text) {
    // splitting text to an array with every character as an element of the list
    let textArray = []
    textArray = text.split('')
    return textArray
}

function createSpanWithEffect(textArray, parent) {
    let iterator = 1
    textArray.forEach( element => {
        // creating new 'span'
        let newSpan = document.createElement('span')
        newSpan.innerHTML = element
        // adding class to 'span'
        newSpan.classList.add("effect")
        // adding delay
        newSpan.style.animationDelay = `${iterator / 50}s`
        iterator = iterator + 1
        
        parent.appendChild(newSpan)       
    })
}