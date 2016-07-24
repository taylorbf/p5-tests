function setup() {
  createCanvas(500,500)
  noStroke()
}

function draw() {
  if (mouseX > width/2) {
    fill(0,100,255,50)
  } else {
    fill(255,100,0,50)
  }
  ellipse(mouseX,mouseY,40,40)
}