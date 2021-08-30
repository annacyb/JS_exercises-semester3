"use strict"

// Given a single name string in an unknown case,
// e.g. “peter” or “PETER” - create a new string
// with the same name, where the third letter is uppercase,
// and the rest is lowercase. I.e. “peTer”.

let someName = "PETER"

let lowercaseName = someName.toLowerCase()
// console.log(lowercaseName)
const thirdLetter = lowercaseName.substring(2,3).toUpperCase()
// console.log(thirdLetter)

const result = lowercaseName.substring(0,2) + thirdLetter + lowercaseName.substring(3)
console.log(result)


