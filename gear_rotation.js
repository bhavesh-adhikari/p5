let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(radians);
}

function draw() {
  background(50);
  noStroke();
  
  push();  // start of the transformation block
  translate(width/2, height/2);
  rotate(angle);  // apply rotation to the whole drawing
  angle += 0.01;  // constant angular velocity
  
  fill(255);
  circle(0, 0, 202);
  
  for (let a = 0; a < radians(360); a += radians(15)) {
    push();
    rotate(a);
    translate(0, 100);
    square(0, 0, 15);
    pop();
  }
  
  pop();  // end of the transformation block
}
