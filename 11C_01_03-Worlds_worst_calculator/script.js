document.querySelector("#calculate").addEventListener("click", startCalculation)
let result
let previousResults = []

function startCalculation() {
    let values = readValues() 
    calculateValues(values[0], values[1], values[2])
}

function readValues() {
    let firstnumber = document.getElementById("firstnumber").value
    // console.log(firstnumber)
    let secondnumber = document.getElementById("secondnumber").value
    // console.log(secondnumber)
    let operator = document.getElementById("operator").value
    // console.log(operator)
    let values = [firstnumber, secondnumber, operator]
    return values
}

function calculateValues(firstnumber, secondnumber, operator) {
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
    previousResults.push(result)
    console.log(previousResults)

    return ()
}
