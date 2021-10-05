"use strict"

const ball = document.querySelector("#ball");

// 1. Create keyframes and properties for falling and zoom

// falling animation
const propertiesFall = {
  duration: 1000,
  iterations: Infinity,
  // direction: "alternate",
  easing: "ease-in"
}

const keyframesFall = [
  { transform: `translateY(-20vw)`},
  { transform: `translateY(65vw)`}
]

// zoom animation
const propertiesZoom = {
  duration: 500,
  iterations: 1,
  // direction: "alternate",
  easing: "ease-in-out",
  fill: "forwards",
  composite: "add"
}

const keyframesZoom = [
  { transform: `scale(1)`},
  { transform: `scale(0)`}
]

// 2. Start falling animation
const animation = ball.animate( keyframesFall, propertiesFall )

// 3. Register click
ball.addEventListener("click", () => {
  console.log("Ball clicked!")
  console.log(ball)
  // pause falling animation
  animation.pause()
  // start zoom-animation
  const animationZoom = ball.animate( keyframesZoom, propertiesZoom )
})








