/* Movement Detection
   Goucher - Digital Media Programming
   Ben Taylor
   Derived from Basic Video Mirror by Daniel Shiffman.
*/ 

//Define pixilation size, initialize cols/rows/video variables
var cellSize = 20;
var cols, rows;

// Array to store prev frame data
var pastFrame = []

// Variable for capture device
var capture;

var lastDiff = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
  cols = width / cellSize;
  rows = height / cellSize;
  noStroke();
  fill(255);

  capture = createCapture(VIDEO)
  capture.size(640, 480)
  capture.hide()
  
}


function draw() { 
  fill(0)
  rect(0,0,width,height)
  //image(capture,0,0,capture.width,capture.height)

  capture.loadPixels()

  var totalDiff = 0
  
  // Begin loop for columns
  for (var i = 0; i < cols; i++) {
    // Begin loop for rows
    for (var j = 0; j < rows; j++) {
    
      // Where are we, pixel-wise?
      var x = i*cellSize
      var y = j*cellSize
      var loc = (capture.width - x - 1) + y*capture.width; // Reversing x to mirror the image
    
      // Make a new color from this pixel
      var r = capture.pixels[loc*4]
      var g = capture.pixels[loc*4 + 1]
      var b = capture.pixels[loc*4 + 2]
      var c = color(r, g, b)

     // fill(c)
     // rect(x, y, cellSize, cellSize)
      

      if (pastFrame[i*rows+j]) {
        //Compare brightness of this frame to last frame       
        var bdiff = abs(brightness(c) - brightness(pastFrame[i*rows+j]))

        if (bdiff >= 0) {
          //Draw a rectangle with transparency equal to that difference
        //  fill(0,100,255,bdiff)
         // rect(x, y, cellSize, cellSize)
        }
        if (bdiff > 20) {
          totalDiff++;
        }
      }
    
      //This frame becomes prev frame
      pastFrame[i*rows+j] = c

    }
  } 

  var smoothedDiff = (totalDiff + lastDiff*9) / 10
  lastDiff = totalDiff

  fill(smoothedDiff)
  //rect(width/2-50,height/2-50,100,100)
  textSize(100)
  text("motion",width/2-50,height/2-50)
}



