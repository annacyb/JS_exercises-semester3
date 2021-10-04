window.addEventListener("DOMContentLoaded", loadSVG);

function loadSVG() {
    console.log("load the SVG");

    fetch("car_and_road.svg")
    .then( response => response.text() )
    .then( svgData => {
        console.log("SVG loaded");

        // TODO: put the SVG into the DOM

        // TODO: Start the animation

    })
}

let car = null;
let curve = null;
let currentPosition;

function runAnimation() {
    console.log("animate");

    // TODO: Build animation ...
}