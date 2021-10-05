"use strict"

init()

function init() {
    artwork1()
}

function artwork1() {
    const element = document.querySelector("#artwork1")
    
    for(let counter = 0; counter < 5; counter++) {
        let div = document.createElement('div')
        div.className = "circle"
        element.appendChild(div)
    }
}