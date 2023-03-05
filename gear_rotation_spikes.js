let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(radians);
}

function draw() {
  background(50);
  noStroke();

  push();  // start of the transformation block
  translate(width/2, height/2);   // move origin to center
  rotate(angle); 
  angle+=0.01;// rotate the entire figure
  for (let a = 0; a < radians(360); a += radians(15)) {
    push();
    rotate(a);                      // rotate each by 30º
    translate(0, 100);              // then offset vertically           
    strokeWeight(5);
    stroke(23, 23, 53);
    line(7.5, 0, 10, 80);
    noStroke();
    square(0, 0, 15);
    pop();
  }
  fill(255);
  circle(0, 0, 202);
  noFill();
  strokeWeight(4);
  stroke(223, 23, 53);
  circle(0, 0, 20);
  pop();// end of the transformation block
 
}
