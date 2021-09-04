"use strict"

window.addEventListener("DOMContentLoaded", init)

let array = []

function init() {
    let number = getNumberOfCustomers()
    getData(number)
    displayData()
    console.log(array)
    setTimeout(init, 1000)
}

function getNumberOfCustomers() {
    // FAKE: gives a completely random number
    return Math.floor(Math.random()*32)
}

function getData(number) {
    if (array.length < 40){
        array.push(number)
    }
    else {
        array.shift()
        array.push(number)
    }
}

function displayData() {
    const container = document.querySelector("#chart")
    // removes all divs from container
    container.innerHTML = ""
    // show all array element's values
    for(let i = 0; i < array.length; i++){
        const eachBarElement = document.createElement('div')
        eachBarElement.className = "bar"
        eachBarElement.style.height = (array[i])*7 + "px"
        container.appendChild(eachBarElement)
    }
}