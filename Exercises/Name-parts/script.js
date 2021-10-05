"use strict"

let fullName = document.querySelector("#fullName").textContent

// console.log(fullName)


// 1st possibility
const firstname = fullName.substring(0,5)
console.log(firstname)

const firstSpace = fullName.indexOf(" ")

const secondSpace = fullName.lastIndexOf(" ")

const middleName = fullName.substring((firstSpace + 1),secondSpace)
console.log(middleName)

const lastName = fullName.substring(secondSpace + 1)
console.log(lastName)


//2nd possibility
// let words = fullName.split(' ')
// const firstName = words[0]
// console.log(firstName)

// const middleName = words[1]
// console.log(middleName)

// const lastName = words[2]
// console.log(lastName)



