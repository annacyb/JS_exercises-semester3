"use strict";


// Every second, the counter increments by one. The counter is then added
// to the beginning of an array. The array is “truncated” so that it never
// becomes longer than 9.

// It should look like that:
// [0]
// [1,0]
// [2,1,0]
// [3,2,1,0]
// ...
// [18,17,16,15,14,13,12,11,10] - max 9 elements in the array
// [19,18,17,16,15,14,13,12,11] 

let counter = -1
const array1 = []
init()

function init() {
    counting()
}

function counting() {
    counter++
    if (counter < 100) {
        if (array1.length < 9) {
            array1.unshift(counter)
            console.log(array1)
            setTimeout(init, 1000)
        }
        else {
            array1.pop()
            array1.unshift(counter)
            console.log(array1)
            setTimeout(init, 1000)
        }
    }
}






