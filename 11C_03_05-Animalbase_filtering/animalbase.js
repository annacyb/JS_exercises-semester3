"use strict";

window.addEventListener("DOMContentLoaded", start);


// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0
};


async function start( ) {
    console.log("r");

    addFilterEventListeners()
    // TO DO
    // addSortEventListeners()

    let data = await loadJSON();
    displayList(data);
}


// C (controllers, filters etc.)

function addFilterEventListeners(){
    const onlyCatsButton = document.querySelector(`[data-filter="cat"]`)
    onlyCatsButton.addEventListener("click", filterCats)

    const onlyDogsButton = document.querySelector(`[data-filter="dog"]`)
    onlyDogsButton.addEventListener("click", filterDogs)

    const allButton = document.querySelector(`[data-filter="*"]`)
    allButton.addEventListener("click", filterAll)
}

async function filterCats() {
    // download data
    let data = await loadJSON()
    // filter data
    let filterData = data.filter(animal => {
        return animal.type.includes("cat")
    })
    displayList(filterData)
}

async function filterDogs() {
    // download data
    let data = await loadJSON()
    // filter data
    let filterData = data.filter(animal => {
        return animal.type.includes("dog")
    })
    displayList(filterData)
}

async function filterAll() {
    let data = await loadJSON()
    displayList(data)
}


// Model (data loading, data modification)

async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();
    // when loaded, prepare data objects
    return prepareObjects( jsonData );
}

function prepareObjects( jsonData ) {
    // creates a new global array with
    let allAnimals = jsonData.map( preapareObject );

    // TODO: This might not be the function we want to call first
    console.log("All animals array", allAnimals)
    return allAnimals
}

function preapareObject( jsonObject ) {
    const animal = Object.create(Animal);

    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;

    return animal;
}

// View (data display)

function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    console.log(animals)
    animals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}

