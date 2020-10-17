function setup() {
  createCanvas (800, 800);
   background(151, 190, 199);
}

function draw() {
  //glasses
  strokeWeight(1);
  noFill();
  bezier(100, 270, 100, 500, 350, 400, 350, 270);
  bezier(410, 270, 410, 500, 650, 400, 650, 270);
  strokeWeight(6);
  arc(220, 270, 250, 100, PI, TWO_PI);
  arc(530, 270, 240, 100, PI, TWO_PI);
  arc(380, 300, 65, 60, PI, TWO_PI);
 
  fog();
  wipe();
  
}
 
function fog() {
for (let i = 0; i<5; i++){
  noStroke()
  fill(207, 207, 207, 5);
    circle(150 + random(150), 270 + random(70), 40);
    circle(450 + random(150), 270 + random(70), 40);
   print(i);
  }
}

function wipe() {
  fill(151, 190, 199);
  square(mouseX, mouseY);
}