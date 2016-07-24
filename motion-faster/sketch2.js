// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-14: Overall motion

// Variable for capture device
var video;
// Previous Frame
var prevFrame;
// How different must a pixel be to be a "motion" pixel
var threshold = 400;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  // Create an empty image the same size as the video
  prevFrame = createImage(video.width, video.height, RGB);
  
  frameRate(1)
  noStroke()
}

function draw() {
  //background(255);
  
  tint(255,100)
  image(video,0,0,video.width,video.height)
  noTint()

  video.loadPixels();
  prevFrame.loadPixels();
  
  var totalMotion = 0

  // Begin loop to walk through every pixel
  for (var x = 0; x < video.width; x=x+20) {
    for (var y = 0; y < video.height; y=y+20) {

      // Step 1, what is the location into the array
      var loc = (x + y * video.width) * 4;
      
      // Step 2, what is the previous color
      var r1 = prevFrame.pixels[loc   ]; 
      var g1 = prevFrame.pixels[loc + 1];
      var b1 = prevFrame.pixels[loc + 2];

      // Step 3, what is the current color
      var r2 = video.pixels[loc   ]; 
      var g2 = video.pixels[loc + 1];
      var b2 = video.pixels[loc + 2];
      
      if (x==0 && y==0) {
        console.log(r1,g1,b1,r2,g2,b2)
      }

      var diffr = abs(r1-r2)
      var diffb = abs(b1-b2)
      var diffg = abs(g1-g2)
      var diff = diffr + diffb + diffg

      // Step 4, compare colors (previous vs. current)
     // var diff = dist(r1, g1, b1, r2, g2, b2);

      if (diff >= 0 && diff > threshold) {
        totalMotion++;
        console.log(x,y)
        fill(255,0,0)
        rect(x,y,10,10)
      }
      
    }
  }

  // Save frame for the next cycle
  if (video.canvas) {


    console.log(totalMotion)
    console.log("===")
    prevFrame.copy(video, 0, 0, video.width, video.height, 0, 0, video.width, video.height); // Before we read the new frame, we always save the previous frame for comparison!

 /*   // averageMotion is total motion divided by the number of pixels analyzed.
    var avgMotion = totalMotion / ((video.width/10) * (video.height/10)); 
  
    // Draw a circle based on average motion
    noStroke();
    fill(255);
    //console.log(avgMotion)
    var r = avgMotion
    ellipse(width/2, height/2, r, r);
    console.log("===")
    console.log(totalMotion)
    console.log("===") */
  } 

}