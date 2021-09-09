"use strict"

//NEW LINE
const colorAndHarmonyChosen = { color: {}, harmony: "" }

window.addEventListener("DOMContentLoaded", init)

setEventListeners()

function setEventListeners() {
    // for the first colour- picked y the user
    let colorPickerElement = document.querySelector(`[type="color"]`)
    colorPickerElement.addEventListener("input", init)
    // for select element with many options to choose by the user
    let selectElement = document.querySelector("#optionsForChoosing").addEventListener("click", getHarmony)
}

function init() {
    setEventListeners()
    const selectedColor = getColor()
    const convertedData = prepareData(selectedColor)
    // console.log(convertedData)
    showColor(convertedData)
}

// Controller
function getColor() {
    // gets a full HEX value with "#" symbol in front
    let selectedColor = document.querySelector(`[type="color"]`).value
    return selectedColor
}

// Model
function prepareData(color) {
    // get HEX numbers without "#" symbol
    const colorHEX = getHEXnumbers(color)
    const rgb = HEXtoRGB(colorHEX)
    const hsl = RGBtoHSL(rgb)
    return {colorHEX, rgb, hsl}
}

function getHEXnumbers(color) {
    // get hex without "#" symbol
    let colorHEX = color.substring(1)
    return colorHEX
}

function HEXtoRGB(color) {
    let r = color.substring(0,2)
    r = parseInt(r, 16)
   
    let g = color.substring(2,4)
    g = parseInt(g, 16)

    let b = color.substring(4,6)
    b = parseInt(b, 16)

    return {r, g, b}
}

function RGBtoHSL(rgb) {
    let r = rgb.r
    let g = rgb.g
    let b = rgb.b

    // convertion copied from internet
    r /= 255;
    g /= 255;
    b /= 255;
 
    let h, s, l;
 
    const min = Math.min(r,g,b);
    const max = Math.max(r,g,b);
  
    if( max === min ) {
        h = 0;
    } else
    if (max === r) {
        h = 60 * (0 + (g - b) / (max - min) );
    } else
    if (max === g) {
        h = 60 * (2 + (b - r) / (max - min) );
    } else
    if (max === b) {
        h = 60 * (4 + (r - g) / (max - min) );
    }
  
    if (h < 0) {h = h + 360; }
  
    l = (min + max) / 2;
  
    if (max === 0 || min === 1 ) {
        s = 0;
    } else {
        s = (max - l) / ( Math.min(l,1-l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;
   
    // rounding numbers
    h = Math.round(h)
    s = Math.round(s)
    l = Math.round(l)

    return {h, s, l}
}




function getHarmony(colorData) {
    let optionChosen = document.querySelector("#optionsForChoosing").value

    console.log(colorData)

    if (optionChosen == "0") {
    }
    if (optionChosen == "1.Analogous") {
        calculateAnalogus(colorData)
    }
    if (optionChosen == "2.Monochromatic") {

    }
    if (optionChosen == "3.Triad") {
    
    }
    if (optionChosen == "4.Complementary") {
        
    }
    if (optionChosen == "5.Compound") {
        
    }
    if (optionChosen == "6.Shades") {
        
    }
}

function calculateAnalogus(colorData) {
    
}



// Used for array of colors somehow
// let hslObject = {h:350, s:45, l:34}
// arrofColors = []
// for(let i=0 ; i<4; i++) {
//     console.log(i)
//     arrofColors[i] = Object.assign({}, hslObject)
// }

// arrofColors[1].h = 11
// console.log(arrofColors)






// View
function showColor(colorData) {
    showColoredSquare(colorData)
    showMainColorHEX(colorData)
    showMainColorRGB(colorData)
    showMainColorHSL(colorData)
}

function showColoredSquare(color){
    const colorSquare = document.querySelector("#mainColorSquare")
    colorSquare.style.backgroundColor = "#" + color.colorHEX
}

function showMainColorHEX(color){
    const hexContainer = document.querySelector("#hex")
    hexContainer.textContent = "#" + color.colorHEX

    const hexContainer2 = document.querySelector("#squareMainHEX")
    hexContainer2.textContent = "#" + color.colorHEX
}

function showMainColorRGB(color){
    const rgbContainer = document.querySelector("#rgb")
    rgbContainer.textContent = color.rgb.r + ", " + color.rgb.g + ", " + color.rgb.b

    const rgbContainer2 = document.querySelector("#squareMainRGB")
    rgbContainer2.textContent = color.rgb.r + ", " + color.rgb.g + ", " + color.rgb.b
}

function showMainColorHSL(color){
    const hslContainer = document.querySelector("#hsl")
    hslContainer.textContent = color.hsl.h + ", " + color.hsl.s + ", " + color.hsl.l

    const hslContainer2 = document.querySelector("#squareMainHSL")
    hslContainer2.textContent = color.hsl.h + ", " + color.hsl.s + ", " + color.hsl.l
}