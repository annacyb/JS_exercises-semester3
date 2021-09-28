"use strict"

document.addEventListener("DOMContentLoaded", start)


// fetching SVG from file and showing it into "section" tag
async function start() {
    let response = await fetch("./tiger.svg")
    let mySvgData = await response.text()
    document.querySelector("section").innerHTML = mySvgData
    startManipulatingTheSvg()
}

function startManipulatingTheSvg() {
    document.addEventListener("click", changeEyesToRed)

    // changing elements to black when hovered over
    document.addEventListener("mouseover", function(event){
        event.target.style.fill = "black"

    // changing elements to pink after 3s when elements had been hovered
        setTimeout(function() {
            event.target.style.fill = "pink"
          }, 3000)
        }, false)
}

function changeEyesToRed(){
    // finding eye color paths
    const path1 = document.querySelector("#g302")
    const path2 = document.querySelector("#g306")
    const path3 = document.querySelector("#g350")
    const path4 = document.querySelector("#g474")

    // making paths red on click
    path1.style.fill = "red"
    path2.style.fill = "red"
    path3.style.fill = "red"
    path4.style.fill = "red"
}
