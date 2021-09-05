"use strict";

window.addEventListener("DOMContentLoaded", start)

const allStudents = []

// creating object prototype
const Student = {
    firstName: "x",
    lastName: "x",
    middleName: "x",
    nickName: "x",
    imageFilename: "x",
    house: "x",
    gender: "x"
}

function start( ) {
    console.log("ready")

    loadJSON()
}


function loadJSON() {
    fetch("https://petlatkea.dk/2021/hogwarts/students.json")
    .then( response => response.json() )
    .then( jsonData => {
        // when loaded, prepare objects
        prepareObjects( jsonData )
    });
}

function prepareObjects( jsonData ) {
    jsonData.forEach( jsonObject => {
        
        // creating an object from the prototype
        const student = Object.create(Student)
        // editing prototype
            // splitting name
        jsonObject.fullname = jsonObject.fullname.trim()
        let nameSplit = jsonObject.fullname.split(" ")

        student.firstName = makeOnlyFirstLetterUppercase(nameSplit[0])

        student.lastName = makeOnlyFirstLetterUppercase(nameSplit[nameSplit.length - 1])
        
        allStudents.push(student)

    })
    console.log(allStudents)
    displayList()
}

function makeOnlyFirstLetterUppercase(input) {
    input = input.toLowerCase()
    let firstCapitalLetter = input.substring(0,1).toUpperCase()
    let result = ''
    if (input.includes("-")) {
        const hyphenIndex = input.indexOf("-")
        const secondLastname = input.substring((hyphenIndex + 1), (hyphenIndex + 2) ).toUpperCase() + input.substring((hyphenIndex + 2) )
        console.log(secondLastname)
        result = firstCapitalLetter + input.substring(1, hyphenIndex ) + "-" + secondLastname
    }
    else  {
        result = firstCapitalLetter + input.substring(1)
    }
    return result
}


function displayList() {
    // clear the list
    document.querySelector("#list tbody").innerHTML = ""

    // build a new list
    allStudents.forEach( displayStudents )
}

function displayStudents( student ) {
    // create clone
    const clone = document.querySelector("template#student").content.cloneNode(true)

    // set clone data
    clone.querySelector("[data-field=firstName]").textContent = student.firstName
    clone.querySelector("[data-field=lastName]").textContent = student.lastName
    clone.querySelector("[data-field=middleName]").textContent = student.middleName
    clone.querySelector("[data-field=nickName]").textContent = student.nickName
    clone.querySelector("[data-field=imageFilename]").textContent = student.imageFilename
    clone.querySelector("[data-field=house]").textContent = student.house
    clone.querySelector("[data-field=gender]").textContent = student.gender

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone )
}
