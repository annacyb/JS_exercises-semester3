"use strict"

document.querySelector("#calculate").addEventListener("click", startCalculation)
clearResults()
let previousResults = []
let firstNumberResult

function startCalculation() {
    let values = readValues()
    let result = calculateValues(values[0], values[1], values[2])
    result = checkRounding(result)
    previousResults.push(result)
    showResultInList(result)
    // result saved in first input field
    document.getElementById("firstnumber").value = result
}

function readValues() {
    let firstnumber = document.getElementById("firstnumber").value
    // console.log(firstnumber)
    let secondnumber = document.getElementById("secondnumber").value
    // console.log(secondnumber)
    let operator = document.getElementById("operator").value
    // console.log(operator)
    firstnumber = Number(firstnumber)
    secondnumber = Number(secondnumber)
    let values = [firstnumber, secondnumber, operator]
    return values
}

function calculateValues(firstnumber, secondnumber, operator) {
    let result
    if (operator == "add") {
        result = firstnumber + secondnumber
    }
    else if (operator == "sub") {
        result = firstnumber - secondnumber
    }
    else if (operator == "mul") {
        result = firstnumber * secondnumber
    }
    else if (operator == "div") {
        result = firstnumber / secondnumber
    }
    else {
        console.log("Error- invalid operator")
    }
    return result
}

function showResultInList(result) {
    let ul = document.getElementById("results")
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(result))
    ul.appendChild(li)
}

function clearResults() {
        document.querySelector("#clear").addEventListener("click", () => {
        previousResults = []
        document.getElementById("results").innerHTML = "0"
    })
}

function checkRounding(result) {
    let checkbox = document.querySelector("#doround")

    if (checkbox.checked) {
        let rounding = document.querySelector("#decimals").value
        result = result.toFixed(Number(rounding))
    }
    console.log(result)
    return result
}