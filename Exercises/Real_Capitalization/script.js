"use strict"

// Use the 3caPitalization exercise as a basis for this exercise.
// Modify the code, so that only the first letter is upper case,
// and the rest is lower case.

// Make sure that it can take names of any length!

let someName = "pAmeLa"

let lowercaseName = someName.toLowerCase()
// console.log(lowercaseName)

let firstCapitalLetter = lowercaseName.substring(0,1).toUpperCase()
// console.log(firstCapitalLetter)

const result = firstCapitalLetter + lowercaseName.substring(1)
console.log(result)


