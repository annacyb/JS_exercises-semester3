"use strict"

// 1. There must be a palette with at least 8 colors
// - you can load it as a SVG, or create it in the HTML

// 2. The user must be able to click any part of the image
// (but can exclude the background) to fill within the outlines

// 3. All color-selection and filling should be done by JavaScript.

// 4. The cursor must clearly indicate if an area can be clicked or not

// 5. Plan your colors and your shoe-image so you have some kind of
// concept regarding the aestetics


document.addEventListener("DOMContentLoaded", start)

// fetching SVG from file and showing it into "section" tag
async function start() {
    let response = await fetch("./shoe-01.svg")
    let mySvgData = await response.text()
    document.querySelector("#svgSection").innerHTML = mySvgData
    startManipulatingTheSvg()
}

function startManipulatingTheSvg() {

   













    // document.addEventListener("click", changeEyesToRed)

    // // changing elements to black when hovered over
    // document.addEventListener("mouseover", function(event){
    //     event.target.style.fill = "black"

    // // changing elements to pink after 3s when elements had been hovered
    //     setTimeout(function() {
    //         event.target.style.fill = "pink"
    //       }, 3000)
    //     }, false)
}