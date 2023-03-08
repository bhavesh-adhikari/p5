let angle = 0;
let lastUpdateTime = 0;
const rotationSpeed = 6; // in degrees per second
let second = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(50);
  noStroke();
  
  push();  // start of the transformation block
  translate(width/2, height/2);
  
  // Calculate the time elapsed since the last update
  const now = millis();
  const elapsed = now - lastUpdateTime
  // Only update the angle variable once per second
  if (elapsed >= 1000) {
    angle = (angle + 6) ; // update the angle by 6 degrees per second
    lastUpdateTime = now;
    second = second >= 59 ?0: second+1;
    
  }
  fill(255,200,23);
  textAlign(CENTER)
  textSize(50);
  text(second< 10 ? '0'+second : second, 0, -150);
  rotate(angle);  // apply rotation to the whole drawing
  
  for (let a = 0; a < 360; a += 30) {
    push();
    rotate(a);
    fill(255)
    translate(0, 100);
    square(-5, 0, 15);
    pop();
  }
  
  fill(255,174,66);
  circle(0, 0, 202);
  stroke(23,23,33);
  strokeWeight(5);
  circle(0,0,190);
  circle(0,0,120);
  circle(0,0,65);
  stroke(200,0,0);
  strokeWeight(5);
  line(0,0,0,-50)
  fill(0)
  circle(0,0,10);
  noStroke();
  pop();
  
  translate(width/2,height/2);
  for (let a = 30; a <=360; a += 30) 
  {
    push();
    rotate(a);
    fill(255)
    translate(0, -78);
    textSize(20)
    rotate(-a)
    textAlign(CENTER,TOP)
    stroke(5)
    fill(200,0,0)
    text((a/30),0,-7)
    pop();
  }
  stroke(10);
  noFill();
  circle(0,0,10);
  
    // end of the transformation block
}
