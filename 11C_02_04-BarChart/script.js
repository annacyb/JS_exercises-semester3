"use strict"


init()

function init() {
    const array = []
    let value = 0
    showChart(value, array)
}

function showChart(value, array) {
    value++
    if (value < 100) {
        array = prepareData(array)
        createBarElements(array)
        setTimeout(showChart.bind(null, value, array), 1000)
    }
}

function prepareData(array) {
    // const eachNumber = getNumberOfCustomers()
    // let counter = 0
    // if(counter < 40){
    //     counter++
    //     array.push(eachNumber)
        
    //     array.forEach(element => {
    //     createBarElements(array)
    //     });
    // }
    // else {
    //     array1.unshift(counter)
    //     array.push(eachNumber)
    // }


    // usunac nadmiarowe liczby z listy

    // zwrocic liste
    return array
}

function createBarElements(array) {
    // usun wszystkie istniejace slupki z HTMLa

    // dodaj wszystkie slupki z arraya do HTMLa
    const container = document.querySelector("#chart")
    const eachBarElement = document.createElement('div')
    eachBarElement.className = "bar"
    const eachNumber = getNumberOfCustomers()

    eachBarElement.style.height = eachNumber*7 + "px";
    container.appendChild(eachBarElement)
}


function getNumberOfCustomers() {
    // FAKE: gives a completely random number
    return Math.floor(Math.random()*32)
}






