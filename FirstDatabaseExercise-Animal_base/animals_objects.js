"use strict";

window.addEventListener("DOMContentLoaded", start)

const allAnimals = []

// creating object prototype
const Animal = {
    name: "",
    type: "unknown",
    desc: "",
    age: 0
}

function start( ) {
    console.log("ready")

    loadJSON()
}


function loadJSON() {
    fetch("animals.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData )
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        
        // creating an object from the prototype
        const animal = Object.create(Animal)
        // editing prototype
        let nameSplit = jsonObject.fullname.split(" ")
        animal.name = nameSplit[0]
        animal.type = nameSplit[nameSplit.length - 1]
        animal.desc = nameSplit[2]
        animal.age = jsonObject.age

        allAnimals.push(animal)

    })
    console.log(allAnimals)
    displayList()
}


function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = ""

    // build a new list
    allAnimals.forEach( displayAnimal )
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true)

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name
    clone.querySelector("[data-field=desc]").textContent = animal.desc
    clone.querySelector("[data-field=type]").textContent = animal.type
    clone.querySelector("[data-field=age]").textContent = animal.age

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone )
}


