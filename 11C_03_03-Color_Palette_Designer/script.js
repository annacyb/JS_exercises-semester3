"use strict"

let colorPickerElement = document.querySelector(`[type="color"]`)
colorPickerElement.addEventListener("input", init)

function init() {
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
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
      
    if (max == min) {
        h = s = 0;
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      
        switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        }
      
        h /= 6;
    }
   
    return {h, s, l}
}

// View
function showColor(colorData) {
    showColoredSquare(colorData)
    showHEX(colorData)
    showRGB(colorData)
    showHSL(colorData)
}

function showColoredSquare(color){
    const colorSquare = document.querySelector("#mainColorSquare")
    colorSquare.style.backgroundColor = "#" + color.colorHEX
}

function showHEX(color){
    const hexContainer = document.querySelector("#hex")
    hexContainer.textContent = "#" + color.colorHEX
}

function showRGB(color){
    const rgbContainer = document.querySelector("#rgb")
    rgbContainer.textContent = color.rgb.r + ", " + color.rgb.g + ", " + color.rgb.b
}

function showHSL(color){
    const hslContainer = document.querySelector("#hsl")
    hslContainer.textContent = color.hsl.h + ", " + color.hsl.s + ", " + color.hsl.l
}

