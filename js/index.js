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

let toyota = new Car(canvas.width / 2 - 50 ,canvas.height-100, 50, 100, carImg) 

window.onkeydown = function(e) {
  console.log(e.key)
    switch (e.key) {    
      case "ArrowLeft":
        // if (toyota.x >= 0)
        toyota.x -= 30;
       break;
      case "ArrowRight":
        // if ((toyota.x < canvas.width-toyota.w))
        toyota.x += 30;
        break
      case "ArrowUp":
        toyota.y -= 30;
       break;
      case "ArrowDown":
        toyota.y += 30;
        break
    }
}








class Obstacle {
  constructor (x,y,w,h, color) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.color = color 
  }
  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect (this.x, this.y, this.w, this.h) 
    
  }
  
}

let boxObstacle = new Obstacle(50, 50, 50, 50,"red" )
 
let boxes = []

function animate() {
  let gameLoop = requestAnimationFrame(animate)
  
  ctx.clearRect(0,0,canvas.width, canvas.height)
  ctx.drawImage(roadImg, road.x, road.y, road.w, road.h) 
  toyota.draw()
  boxObstacle.draw()
  boxObstacle2.draw()
  // box.draw()
  for(box of boxes) {
    box.draw()
  } 
}

let boxObstacle2 = new Obstacle(100, 100, 50, 50,"gold")
setInterval(()=>{
  console.log("lo mein")
let box = new Obstacle(canvas.width*Math.random(), 0, 50, 50, "green")

boxes.push(box)
console.log(boxes)
}, 1000)

animate()