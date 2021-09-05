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

        // EDITING OBJECT PROTOTYPE
        // splitting name to words
        jsonObject.fullname = jsonObject.fullname.trim()
        let nameSplit = jsonObject.fullname.split(" ")
        student.firstName = makeFirstLetterUppercase(nameSplit[0])

        // checks if a student has a last name
        if (nameSplit.length > 1) {
            student.lastName = makeFirstLetterUppercase(nameSplit[nameSplit.length - 1])
        }
        else {
            student.lastName = "-"
        }

        student.middleName = getMiddleName(nameSplit)
        student.nickName = getNickName(nameSplit)

        // checks exception of image file naming
        if (student.lastName.includes("Finch")){
            student.imageFilename = "./images/fletchley_j.png"
        }
        else {
            student.imageFilename = getProfileImage(student.firstName, student.lastName)
        }

        student.house = makeFirstLetterUppercase(jsonObject.house)
        student.gender = makeFirstLetterUppercase(jsonObject.gender)

        allStudents.push(student)
    })
    displayList()
}

function makeFirstLetterUppercase(input) {
    input = input.trim()
    input = input.toLowerCase()
    let firstCapitalLetter = input.substring(0,1).toUpperCase()
    let result = ""

    // condition for when last name has two parts seperated by "-"
    if (input.includes("-")) {
        const hyphenIndex = input.indexOf("-")
        const secondLastname = input.substring((hyphenIndex + 1), (hyphenIndex + 2) ).toUpperCase() + input.substring((hyphenIndex + 2) )
        result = firstCapitalLetter + input.substring(1, hyphenIndex ) + "-" + secondLastname
    }
    else  {
        result = firstCapitalLetter + input.substring(1)
    }
    return result
}

function getMiddleName(input) {
    let middleName = ""
    // checks if full name is more than 2 words
    if (input.length > 2) {
        middleName = input[1]
        if (!middleName.includes(`"`)) {
            middleName = makeFirstLetterUppercase(middleName)
        }
        // for case when middle word is a nick name
        else {
            middleName = "-"
        }
    }
    else {
        middleName = "-"
    }
    return middleName
}

function getNickName(input) {
    let nickName = ""
    // checks if full name is more than 2 words
    if (input.length > 2) {
        nickName = input[1]
        if (nickName.includes(`"`)) {
            nickName = nickName.substring(0,1) + nickName.substring(1,2).toUpperCase() + nickName.substring(2)
        }
        else {
            // for case when middle word is a middle name
            nickName = "-"
        }
    }
    else {
        nickName = "-"
    }
    return nickName
}


function getProfileImage(firstName, lastName) {
    let imageFilename
    // checks exeption of naming - for Parvati and Padma Patil 
    if (lastName == "Patil") {
        imageFilename = lastName.toLowerCase() + "_" + firstName.toLowerCase() + ".png"
        imageFilename = "./images/" + imageFilename
    }
    else {
        imageFilename = lastName.toLowerCase() + "_" + firstName.substring(0,1).toLowerCase() + ".png"
        imageFilename = "./images/" + imageFilename
    }
    return imageFilename
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
    clone.querySelector(".profileImage").src = student.imageFilename
    clone.querySelector("[data-field=house]").textContent = student.house
    clone.querySelector("[data-field=gender]").textContent = student.gender

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone )
}
