/**
 * @name Mic Threshold
 */
// Adapted from Learning Processing, Daniel Shiffman
// learningprocessing.com

var source;
var analyzer;

function setup() {
  createCanvas(710, 200);
  background(255);
  // Create an Audio source
  source = new p5.AudioIn();
  source.start();
}

function draw() {
  background(255)
  
  // Get the overall volume (between 0 and 1.0)
  var volume = source.getLevel();
  // Graph the overall potential volume, w/ a line at the threshold
  var y = map(volume, 0, 0.5, 0, 255)
  
  fill(0,y)
  ellipse(100,100,200,200)
}
