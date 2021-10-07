"use strict"

// The model of all features
const features = {
  drinksholder: false,
  led: false,
  propeller: false,
  shield: false,
  solarfan: false
}

window.addEventListener("DOMContentLoaded", start)

function start() {
  // register toggle-clicks
  document.querySelectorAll(".option").forEach(option => option.addEventListener("click", toggleOption))
}

function toggleOption(event) {
  const target = event.currentTarget
  console.log("TARGET ", target)
  const feature = target.dataset.feature
  console.log("FEATURE ", feature)

  // feature added
  if (features[feature] == true) {
   
    target.classList.remove("chosen")
    features[feature] = false

    //Add the hide class from fetured elements (layers) on main photo
    if (feature === "shield") {
      document.querySelector(`[data-feature="shield_back"`).classList.add("hide")
      document.querySelector(`[data-feature="shield_front"`).classList.add("hide")
    }
    else {
      document.querySelector(`[data-feature="${feature}"`).classList.add("hide")
    }

    //Remove featureElement from the list in the bottom
    const selectedFeature = document.querySelector(`#selected [data-feature="${feature}"]`)
    // selectedFeature.remove()

    //FLIP- "animate-feature-out"
    const end = selectedFeature.getBoundingClientRect()
    const start = target.getBoundingClientRect()

    const diffx = start.x - end.x + "px"
    const diffy = start.y - end.y + "px"

    selectedFeature.style.setProperty("--diffx", diffx)
    selectedFeature.style.setProperty("--diffy", diffy)

    selectedFeature.offsetHeight

    //Animation feature out
    selectedFeature.classList = "animate-feature-out"

    //when animation is complete, remove featureElement from the DOM
    selectedFeature.addEventListener("animationend", function() {
      selectedFeature.remove()
      //Chose the feature element and hide it
      document.querySelector(`[data-feature=${feature}`).classList.add("hide")
    })



// feature removed
  } else {
    target.classList.add("chosen")
    features[feature] = true

    //Remove the hide class from fetured elements (layers) on main photo
    if (feature === "shield") {
      document.querySelector(`[data-feature="shield_back"`).classList.remove("hide")
      document.querySelector(`[data-feature="shield_front"`).classList.remove("hide")
    }
    else {
      document.querySelector(`[data-feature="${feature}"`).classList.remove("hide")
    }

    //Create new featureElement and add it to the list in the bottom
    const newfeatureElement = createFeatureElement(feature) 
    document.querySelector("#selected ul").appendChild(newfeatureElement)
    // feature added

    //FLIP- "animate-feature-in"
    const start = target.getBoundingClientRect()
    const end = newfeatureElement.getBoundingClientRect()

    const diffx = start.x - end.x + "px"
    const diffy = start.y - end.y + "px"

    newfeatureElement.style.setProperty("--diffx", diffx)
    newfeatureElement.style.setProperty("--diffy", diffy)

    //Animation feature in
    newfeatureElement.classList = "animate-feature-in" 

  }
}

// Create featureElement to be appended to #selected ul - could have used a <template> instead
function createFeatureElement(feature) {
  const li = document.createElement("li")
  li.dataset.feature = feature

  const img = document.createElement("img")
  img.src = `images/feature_${feature}.png`
  img.alt = capitalize(feature)

  li.append(img)
  return li
}

function capitalize(text) {
  return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase()
}