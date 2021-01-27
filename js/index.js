let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")
let carImg = new Image()
carImg.src = "./images/car.png"
let car = { x: 0, y: 0, w: 100, h: 200, img: carImg }
// carImg.onload = animate

function animate() {
  let gameLoop = requestAnimationFrame(animate)
  console.log("animate")
  ctx.drawImage(carImg, car.x, car.y, car.w, car.h)
}
animate()
