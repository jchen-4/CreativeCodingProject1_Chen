let fog = [];
let fog1 = [];

function setup() {
  createCanvas(800, 800);
  for(let i = 0; i <1000; i++){
      let x = random(160, 250);
      let y = random(280, 330);
      let r = random(15);
      fog[i] = new FogMachine(x, y, r);
    }
    for (let j = 0; j <500; j++){
      let x = random(460, 550);
      let y = random(280, 330);
      let r = random(15);
      fog[j] = new FogMachine(x, y, r);
    }
}

function draw() {
  background(14, 33, 71);
 
  for (let i = 0; i < fog.length; i++) {
  fog[i].move();
  fog[i].show();
  
  for(let j = 0; j < fog1.length; j++){
    fog1[i].move();
    fog1[i].show();
  }
  
  }
  fill(245, 231, 122);
  circle(30, 40, 100); //creates moon
  glasses();
}

function glasses(){
  for (let i = 0; i<2; i++){
  strokeWeight(1);
  stroke(0);
  noFill();
  bezier(100, 270, 100, 500, 350, 400, 350, 270);
  bezier(410, 270, 410, 500, 650, 400, 650, 270);
  strokeWeight(6);
  arc(220, 270, 250, 100, PI, TWO_PI);
  arc(530, 270, 240, 100, PI, TWO_PI);
  arc(380, 300, 65, 60, PI, TWO_PI);
  }
}

class FogMachine {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    noStroke()
    fill(255, 10);
    ellipse(this.x, this.y, this.r*1.5);
  }
}

