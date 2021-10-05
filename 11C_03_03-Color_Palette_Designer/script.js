"use strict"

//NEW LINE
const colorAndHarmonyChosen = { mainColor: {}, harmony: "" }
// const colorsFromHarmony = {color1: {hex: 100, rgb: 200, hsl: 300}, color2: {hex: 400, rgb: 500, hsl: 600}, color3: {hex: 700, rgb: 800, hsl: 900}, color4: {hex: 1000, rgb: 1100, hsl: 1200}}
// const colorsFromHarmonyArray = [{color1: {hex: 100, rgb: 200, hsl: 300}}, {color2: {hex: 400, rgb: 500, hsl: 600}}, {color3: {hex: 700, rgb: 800, hsl: 900}}, {color4: {hex: 1000, rgb: 1100, hsl: 1200}}]

//ZLE-POTEM WYKASOWAC
//  ZLE PONIEWAZ TRZEBA ZA KAZDYM RAZEM UPDATOWAC ROZNE RODZAJE FORMATOW KOLOROW --- LATWO ZAPOMNIEC / POGUBIC SIE
//  ZLE PONIEWAZ ZAJMUJE WIECEJ MIEJSCA W PAMIECI A OPISUJE DEFACTO TEN SAM KOLOR
//  LEPIEJ TRZYMAC JEDEN RODZAJ KOLORU I TAM GDZIE TRZEBA ZAMIENIC SOBIE NA INNY PRZEZ FUNKCJE
const colorsFromHarmonyArray = [
    {hex: 100, rgb: {r: 10, g: 10, b: 10}, hsl: 300}, 
    {hex: 400, rgb: {r: 10, g: 10, b: 10}, hsl: 600}, 
    {hex: 700, rgb: {r: 10, g: 10, b: 10}, hsl: 900}, 
    {hex: 1000, rgb: {r: 10, g: 10, b: 10}, hsl: 1200}
]

//DOBRE-DOBRA FORMA
const RGBcolors = [
    {r: 10, g: 10, b: 10},
    {r: 10, g: 10, b: 10},
    {r: 10, g: 10, b: 10},
    {r: 10, g: 10, b: 10},
]

function RGBtoHSL2(color) {
    return {h: 10, s: 20, l: 30}
}

let HSLcolors = []
RGBcolors.forEach(color => {
    HSLcolors.push(RGBtoHSL2(color))
})





// window.addEventListener("DOMContentLoaded", init)

setEventListeners()

function setEventListeners() {
    // for the first colour- picked y the user
    let colorPickerElement = document.querySelector(`[type="color"]`)
    colorPickerElement.addEventListener("input", init)
    
    // for select element with many options to choose by the user
    let selectElement = document.querySelector("#optionsForChoosing").addEventListener("input", getHarmony)
}

function init() {
    const selectedColor = getColor()
    console.log(colorAndHarmonyChosen.mainColor.HEX)
    const convertedData = prepareData(colorAndHarmonyChosen.mainColor.HEX)

    // adding converted values of main color to global object
    colorAndHarmonyChosen.mainColor.RGB = convertedData.rgb
    colorAndHarmonyChosen.mainColor.HSL = convertedData.hsl
    
    showColor(convertedData)
}

// CONTROLLER
function getColor() {
    // gets a full HEX value with "#" symbol in front
    let selectedColor = document.querySelector(`[type="color"]`).value
    // return selectedColor
    colorAndHarmonyChosen.mainColor.HEX = selectedColor
}

// MODEL
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


// getting 4 more colors which creates harmony with the main color

function getHarmony() {
    let optionChosen = document.querySelector("#optionsForChoosing").value
    const mainColorData = colorAndHarmonyChosen.mainColor
    // console.log(mainColorData)

    if (optionChosen == "0") {
    }
    if (optionChosen == "1.Analogous") {
        calculateAnalogus(mainColorData)
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

function calculateAnalogus(mainColorData) {
    // H is shifted some degrees for each color, S and L are kept constant
    const mainColorH = mainColorData.HSL.h
    console.log("tutaj", mainColorH)
    
    // let previousNumber 

    // Object.keys(colorsFromHarmony).forEach(key => {
    //     // console.log(key, colorsFromHarmony[key])

    //   })

    console.log(colorsFromHarmonyArray)
    
    // const foundValue = colorsFromHarmonyArray.find(o => o.name === 'string 1');

    
    colorsFromHarmonyArray.forEach((color, index) => {
        color.hsl = color.hsl + 60 * (index + 1)
        color.rgb.r = Math.random()
    })

    console.log(colorsFromHarmonyArray)

    // const foundValue = colorsFromHarmonyArray.find(findColorProperty)     
    // function findColorProperty(i) { 
    //     let hsl1 = i.hsl1
    //     hsl1 = "9999999"
    //     console.log(colorsFromHarmonyArray)
    // }

   

    
    // for(let i=0; i<4; i++) {
    //     arrOfColors[i] = Object.assign({}, hslObject)
    // }
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



// VIEW
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