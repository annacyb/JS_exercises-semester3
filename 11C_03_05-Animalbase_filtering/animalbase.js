"use strict";

window.addEventListener("DOMContentLoaded", start);


// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0
};

// Global variable with array of filtered objects from database
let CURRENT_DATA = []

// Global variable with selected sorting
let SORT_BY = {
    column: 'name',
    order: 'asc'  // asc - ascending (A-Z, 1-9), desc - descending (Z-A, 9-1)
}

// Global variable with filtering
let FILTER_BY = {
    column: '',
    value: ''
}

async function start() {
    addFilterEventListeners()
    addSortEventListeners()

    await loadJSON();
    displayList();
}


// C (controllers, filters etc.)

function addFilterEventListeners(){
    const onlyCatsButton = document.querySelector(`[data-filter="cat"]`)
    onlyCatsButton.addEventListener("click", changeFiltering.bind(null, "type", "cat"))

    const onlyDogsButton = document.querySelector(`[data-filter="dog"]`)
    onlyDogsButton.addEventListener("click", changeFiltering.bind(null, "type", "dog"))

    const allButton = document.querySelector(`[data-filter="*"]`)
    allButton.addEventListener("click", changeFiltering.bind(null, "", ""))
}

function addSortEventListeners() {
    const sortName = document.querySelector(`[data-sort="name"]`)
    sortName.addEventListener("click", changeSorting.bind(null, "name"))

    const sortType = document.querySelector(`[data-sort="type"]`)
    sortType.addEventListener("click", changeSorting.bind(null, "type"))

    const sortDesc = document.querySelector(`[data-sort="desc"]`)
    sortDesc.addEventListener("click", changeSorting.bind(null, "desc"))

    const sortAge = document.querySelector(`[data-sort="age"]`)
    sortAge.addEventListener("click", changeSorting.bind(null, "age"))
}

function changeSorting(value) {
    // change global variable
    SORT_BY.column = value
    if (SORT_BY.order == 'asc') {
        SORT_BY.order = 'desc'
    } else {
        SORT_BY.order = 'asc'
    }
    sort()
    displayList()
}

function changeFiltering(column, value) {
    FILTER_BY.column = column
    FILTER_BY.value = value
    filterData()
    sort()
    displayList()
}

// Model

function sort() {
    // sort data
    function CompareNames(a, b) {
        // this part reverses comparison (it's enough to change signs of return)
        let ordering = -1
        if (SORT_BY.order == 'desc') {
            ordering = 1
        }
        // this part just sorts :)
        if(a[SORT_BY.column] < b[SORT_BY.column]) {
            return ordering
        }
        else if (a[SORT_BY.column] === b[SORT_BY.column]) {
            if (a.type < b.type) {
                return ordering
            }
        }
        else {
            return ordering * -1
        }
    }
    CURRENT_DATA.sort(CompareNames)
}

async function filterData() {
    await loadJSON()
    if(FILTER_BY.column != '') {
        CURRENT_DATA = CURRENT_DATA.filter(animal => {
            return animal[FILTER_BY.column].includes(FILTER_BY.value)
        })
    }

    sort()
    displayList()
}

async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();
    // when loaded, prepare data objects
    CURRENT_DATA = prepareObjects( jsonData );
}

function prepareObjects( jsonData ) {
    // creates a new global array with
    let allAnimals = jsonData.map( preapareObject );

    // console.log("All animals array", allAnimals)
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

function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    // console.log(animals)
    CURRENT_DATA.forEach( displayAnimal );
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