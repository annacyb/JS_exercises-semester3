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

  // TODO: Toggle feature in "model"

  // If feature is (now) turned on:
  // + mark target as chosen (add class "chosen")
  // + un-hide the feature-layer(s) in the #product-preview;
  // - create featureElement and append to #selected ul
  // - create FLIP-animation to animate featureElement from img in target, to
  //   its intended position. Do it with normal animation or transition class!

  // Else - if the feature (became) turned off:
  // + no longer mark target as chosen
  // + hide the feature-layer(s) in the #product-preview
  // - find the existing featureElement in #selected ul
  // - create FLIP-animation to animate featureElement to img in target
  // - when animation is complete, remove featureElement from the DOM
  
  // feature added
  if (features[feature] == true) {
    console.log(features[feature])
    features[feature] = false
    target.classList.remove("chosen")
    const featureImage = document.querySelector([feature])

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
    selectedFeature.remove()

    // TODO: More code

// feature removed
  } else {
    console.log(features[feature])
    // feature removed
    features[feature] = true
    target.classList.add("chosen")

    //Remove the hide class from fetured elements (layers) on main photo
    if (feature === "shield") {
      document.querySelector(`[data-feature="shield_back"`).classList.remove("hide")
      document.querySelector(`[data-feature="shield_front"`).classList.remove("hide")
    }
    else {
      document.querySelector(`[data-feature="${feature}"`).classList.remove("hide")
    }

    //Create new featureElement and add it to the list in the bottom
    console.log("PRZED FUNKCJA")
    const newfeatureElement = createFeatureElement(feature) 
    console.log("COS ", newfeatureElement)
    document.querySelector("#selected ul").appendChild(newfeatureElement)
    // feature added

    // TODO: More code

  }
}

// Create featureElement to be appended to #selected ul - could have used a <template> instead
function createFeatureElement(feature) {
  console.log("WCHODZI")
  const li = document.createElement("li")
  li.dataset.feature = feature

  const img = document.createElement("img")
  img.src = `images/feature_${feature}.png`
  console.log("SPR IMG SRC ", img.src)
  img.alt = capitalize(feature)

  li.append(img)
  return li
}

function capitalize(text) {
  return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase()
}