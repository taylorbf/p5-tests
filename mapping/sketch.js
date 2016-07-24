function setup() {
  createCanvas(windowWidth,windowHeight)
  noStroke()
  
  osc = new p5.SinOsc(); // set frequency and type
  osc.amp(.5);
  osc.start();
}

function draw() {
  background(0,10)
  
  var x = map(mouseX,0,width,100,200)
  ellipse(x,200,20,20)
  
  var y = map(mouseX,0,height,100,200)
  ellipse(300,y,20,20)
  
  
  var centerx = 500
  var centery = 200
  var rotationX = cos(mouseX/100)
  var rotationY = sin(mouseX/100)
  var size = 50;
  var x = rotationX * size + centerx
  var y = rotationY * size + centery
  ellipse(x,y,20,20)
  
  
  var darkness = map(mouseX,0,width,0,255)
  fill(darkness)
  rect(650,175,50,50)
  
  var amp = map(mouseX, 0, width, 0, 1);
  osc.amp(amp,0.1);
  
}