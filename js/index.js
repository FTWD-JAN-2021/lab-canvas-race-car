let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

// roadImg.onload = animate
let roadImg = new Image()
roadImg.src = "./images/road.png"
let road = {x: 0, y: 30, w: 450, h: 600, img: roadImg}

// carImg.onload = animate
let carImg = new Image()
carImg.src = "./images/car.png"

class Car {
  constructor(x, y, w, h, img) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.img = img
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
}

let toyota = new Car(0, 0, 100, 200, carImg) 


function animate() {
  let gameLoop = requestAnimationFrame(animate)
  console.log("animate")
  ctx.drawImage(roadImg, road.x, road.y, road.w, road.h) 
  toyota.draw()
}
animate()

