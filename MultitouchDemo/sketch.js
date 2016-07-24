function setup() {
  createCanvas(800,800)
}

function draw() {
  
  fill(0,100,255,100)
  stroke(255)
  
  for (var i=0;i<touches.length;i++) {
    
    var x = touches[i].x
    var y = touches[i].y
    var w = 100
    var h = 100
    ellipse(x,y,w,h)
    
  }
  
  
}