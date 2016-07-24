function setup() {
  createCanvas(500,500)
  noStroke()
}

function draw() {
  background(255)
  var opacity = map(mouseX,0,width,0,255)
  fill(255,150,0,opacity)
  ellipse(width/2,height/2,width,height)
}