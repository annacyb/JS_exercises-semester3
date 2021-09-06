"use strict"

window.addEventListener("DOMContentLoaded", init)

function init() {
    let colorPickerElement = document.querySelector(`[type="color"]`)
    colorPickerElement.addEventListener("input", readData)
}

function readData(){
    let selectedColor = document.querySelector(`[type="color"]`).value
    
    displayData(selectedColor)
}

function displayData(selectedColor) {
    // display color
    let colorSquare = document.querySelector("#colorSquare")
    colorSquare.style.backgroundColor = selectedColor
    
    // display HEX value
    let hexContainer = document.querySelector("#hex")
    hexContainer.textContent = selectedColor
    
    // display RGB value
    let rgbArray = changeToRGB(selectedColor)
    let rgbContainer = document.querySelector("#rgb")
    rgbContainer.textContent = rgbArray[0] + ", " + rgbArray[1] + ", " + rgbArray[2]

    // display HSL value
    let hslArray = changeToHSL(rgbArray)
    let hslContainer = document.querySelector("#hsl")
    hslContainer.textContent = hslArray[0] + ", " + hslArray[1] + ", " + hslArray[2]

}


function changeToRGB(color){
    let r = color.substring(1,3)
    r = parseInt(r, 16)
   
    let g = color.substring(3,5)
    g = parseInt(g, 16)

    let b = color.substring(5,7)
    b = parseInt(b, 16)

    let rgbArray = [r,g,b]
    return rgbArray
}

function changeToHSL(rgbArray) {
    let r = rgbArray[0]
    let g = rgbArray[1]
    let b = rgbArray[2]
    
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
   
    return [h,s,l];
}

