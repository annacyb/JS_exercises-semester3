"use strict"

window.addEventListener("DOMContentLoaded", loadSVG)

function loadSVG() {
    console.log("load the SVG")

    fetch("car_and_road.svg")
    .then( response => response.text() )
    .then( svgData => {
        console.log("SVG loaded")
        document.querySelector("#thesvg").innerHTML = svgData
        runAnimation()

    })
}

let car = null
let curve = null
let currentPosition

function runAnimation() {
    console.log("animate")
    const car = document.querySelector("#car")
    car.classList.add("moveOnPath")
}