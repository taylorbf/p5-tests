var x = 0

function setup() {
  createCanvas(500,500)
}

function draw() {
  background(255)
  
  var circlex = sin(x) * 50 + 100
  var circley = cos(x) * 50 + 100
  ellipse(circlex,circley,20,20)
  
  x = x + 0.1
}