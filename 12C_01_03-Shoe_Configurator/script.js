"use strict"

let SELECTION = ""

const COLORS = [
    "blanchedalmond", "#feec73", 
    "orange", "pink", "rgb(165, 27, 27)",
    "rgb(90, 25, 16)", "#6c296c",
    "rgb(24, 24, 75)", "#194519",
    "rgb(60, 60, 60)", "rgb(196, 196, 196)", "white"
]

document.addEventListener("DOMContentLoaded", init)


async function init() {
    await fetchSvg()
    createColorSelectors()
    createShoeParts()
}

async function fetchSvg() {
    let response = await fetch("./shoe-01.svg")
    let mySvgData = await response.text()
    document.querySelector("#svgSection").innerHTML = mySvgData
}

function createColorSelectors() {
    const pallete = document.getElementById("colorPalette")
    const tmpSquare = document.getElementById("colorTemplate")

    COLORS.forEach(color => {
        let clone = tmpSquare.content.children[0].cloneNode(true)
        clone.style.background = color
        clone.addEventListener("click",
            () => {
                SELECTION.children[0].setAttribute("fill", color)
            }
        )
        pallete.appendChild(clone)
    })
}

function createShoeParts() {
    let shoeParts = [
        document.querySelector("#Tongue"),
        document.querySelector("#Lace_cage"),
        document.querySelector("#Front"),
        document.querySelector("#Middle_front"),
        document.querySelector("#Side_stripe"),
        document.querySelector("#Middle_back"),
        document.querySelector("#Hell_counter")
    ]
    document.querySelector("#Shadow_Image").style.pointerEvents = "none"

    shoeParts.forEach(part => {
        part.classList.add("g_to_interact_with")
        part.addEventListener("click", () => {
            // this removes hoverOver from all parts
            shoeParts.forEach(p => {
                p.children[0].classList.remove("hoverOver")
            })
            part.children[0].classList.add("hoverOver")
            SELECTION = part 
        })
        part.addEventListener("mouseover", () => {
            part.children[0].classList.add("hoverOver")
        })
        part.addEventListener("mouseout", () => {
            if(part != SELECTION) {
                part.children[0].classList.remove("hoverOver")
            }
        })
    })
}
