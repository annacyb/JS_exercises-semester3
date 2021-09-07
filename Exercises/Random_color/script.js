"use strict"

randomBackground()

function randomBackground() {
    // sets the backgroundto a randomcolor
    let rgbObject = randomColor()
    console.log(rgbObject)
    let cssColorString = rgbToCSS(rgbObject)
    document.body.style.backgroundColor = cssColorString   
}

function randomColor() {
    // Creates three values, r, g, and b, as random (integers) between 0 and 255
   
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    
    return {r, g, b}    
}

function rgbToCSS (rgb) {
    // Creates a string like "rgb( 192, 5, 42  )" with the r, g, and b numbers

    // console.log(rgb.r)
    // console.log(typeof(rgb.r))
    let rgbString = "rgb( " + rgb.r + ", " + rgb.g + ", " + rgb.b + " )"
    return rgbString
}