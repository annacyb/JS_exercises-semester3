"use strict"

/* <option value="1">If input is a first name: Make the first character in a name uppercase, and the rest lowercase</option>
<option value="2">If input is a full name: Find the first name</option>
<option value="3">If input is a full name: Find the length of the first name</option>
<option value="4">If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string</option>
<option value="5">If input is a filename: Check if a filename is .png or .jpg</option>
<option value="6">If input is a password: Hide a password with the correct number of *s</option>
<option value="7">With any input: Make the third character uppercase</option>
<option value="8">With any input: Make a character uppercase, if it follows a space or a hyphen</option> */


function initialize() {
    document.querySelector("#generateOutput").addEventListener("click", startFunctions)
    
}

function startFunctions() {
    let inputValue = document.querySelector("#inputField").value
    const optionChosen = document.getElementById("optionsForChoosing").value
    let returnedValue = ""
    if (optionChosen == "1") {
        returnedValue = optionFunction1(inputValue)
    }
    else if (optionChosen == "2") {
        returnedValue = optionFunction2(inputValue)
    }
    else if (optionChosen == "3") {
        returnedValue = optionFunction3(inputValue)
    }
    else if (optionChosen == "4") {
        returnedValue = optionFunction4(inputValue)
    }
    else if (optionChosen == "5") {
        returnedValue = optionFunction5(inputValue)
    }
    else if (optionChosen == "6") {
        let returnedPassword = optionFunction6(inputValue)
        document.querySelector("#inputField").value = returnedPassword
    }
    else if (optionChosen == "7") {
        returnedValue = optionFunction7(inputValue)
    }
    else if (optionChosen == "8") {
        returnedValue = optionFunction8(inputValue)
    }

    document.querySelector("#outputField").value = returnedValue

}

function optionFunction1(input) {
    // If input is a first name: Make the first character in a name uppercase, and the rest lowercase

    if (input.includes(" ")) {
        alert("Please write a only a name, not more words")
    }
    else {
        input = input.toLowerCase()

        let firstCapitalLetter = input.substring(0,1).toUpperCase()

        const result = firstCapitalLetter + input.substring(1)
        console.log(result)
        return result
    }

}

function optionFunction2(input) {
    // If input is a full name: Find the first name

    if (input.includes(" ")) {
        //znalezc index spacji
        const indexOfFirstSpace = input.indexOf(" ")
        const result = input.substring(0, indexOfFirstSpace)
        console.log(result)
        return result
    }
    else {
        alert("Please write a full name, not one word only")
    }
}

function optionFunction3(input) {
    // If input is a full name: Find the length of the first name

    if (input.includes(" ")) {
        const indexOfFirstSpace = input.indexOf(" ")
        const firstName = input.substring(0, indexOfFirstSpace)
        const result = firstName.length
        console.log(result)
        return result
    }
    else {
        alert("Please write a full name, not one word only")
    }
}


function optionFunction4(input) {
    // If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string

    if (input.includes(" ")) {
        let words = input.split(" ")

        if (words.length == 3) {
            let result = words[1]
            console.log(result)
        }
        else if (words.length > 3) {
            alert("Too long name to check the middle name")
        }
        else {
            alert("There is no middle name")
        }
    }
    else {
        alert("Please write a full name, not one word only")
    }
}


function optionFunction5(input) {
    // If input is a filename: Check if a filename is .png or .jpg
    let result = ""

    if (input.includes(".")) {
        if (input.includes(".png")) {
            result = "It is a png file"
            console.log(result)
        }
        else if (input.includes(".jpg")) {
            result = "It is a jpg file"
            console.log(result)
        }
        else {
            result = "The file name is not a png or jpg file"
            console.log(result)
        }
        return result
    }
    else {
        alert("Please write a full file name")
    }
}

function optionFunction6(input) {
    // If input is a password: Hide a password with the correct number of *s
    let returnToInputField
    if (!input.includes(" ")) {
        const number = input.length
        const star = "*"
        returnToInputField = star.repeat(number)
        console.log(returnToInputField)
        return returnToInputField
    }
    else {
        alert("Password does not contain spaces")
    }

}

function optionFunction7(input) {
    // With any input: Make the third character uppercase

    if (input.length >= 3) {
        const thirdLetterUppercase = input.substring(2,3).toUpperCase()

        const result = input.substring(0,2) + thirdLetterUppercase + input.substring(3)
        console.log(result) 
        return result
    }
    else {
        alert("Too short word")
    }
}

function optionFunction8(input) {
    // With any input: Make a character uppercase, if it follows a space or a hyphen

    // let letters = input.split("")
    // console.log(letters)
    // letters.forEach(letter) {
    //     if (letter == " " | letter == "-") {
    //         letter = letter.toUpperCase()
    //     }
    //     else {}
    // }
}


initialize()