//originally i was going to give the user the ability to wipe the fog off the glasses
//but i kept accidentally erasing the glasses with the fog

let fog = [];
let fog1 = [];
let fog2 = [];
let lightcolor; 
let a //
let b // a, b c are for changing the color of the streaks of light
let c //
let d // this affects the opacity, making the light look more translucent
let e // this shifts the light streaks down the y axis
let scene = 1
function setup() {
  createCanvas(700, 600);
  for(let i = 0; i <1000; i++){ //creates the fog blob on the left
      let x = random(160, 250);
      let y = random(280, 330);
      let r = random(15);
      fog[i] = new FogMachine(x, y, r);
    }
    for (let j = 0; j <500; j++){ //creates the fog blob on the right
      let x = random(460, 550);
      let y = random(280, 330);
      let r = random(15);
      fog[j] = new FogMachine(x, y, r);
    }
  
}

function draw() {
switchscene();
revertscene();
line(0, 350, 500, 350);
line(100, 0, 100, 600);
if (scene == 1)  {
    background(14, 33, 71);
  for (let i = 0; i < fog.length; i++) {
  fog[i].move(); //the fog spreads outside of the glasses, I've tried a few ways to fix it but it didn't work
  fog[i].show();
  
  for(let j = 0; j < fog1.length; j++){
    fog1[i].move();
    fog1[i].show();
  }
  
  }
  fill(245, 231, 122, 180);
  circle(30, 40, 100); //creates moon
  circle(30, 40, 110);
  trafficlight();
  atigmatism(255, 0, 0, 20, 260); //lights going from left to upper right
  atigmatism(255, 238, 5, 20, 315);
  atigmatism(0, 255, 0, 20, 370);
  glasses();

  noStroke();
  fill(128, 230); //light grey cloud
  ellipse(500, 80, 100); //creates the clouds on the top of the screen
  ellipse(600, 80, 100);
  fill(128);
  ellipse(550, 60, 120);

  fill(158, 230); // medium grey cloud
  ellipse(450, 80, 100);
  ellipse(550, 80, 100);
  fill(158);
  ellipse(500, 60, 120);

  fill(102, 230); //darkest cloud
  ellipse(350, 90, 100);
  ellipse(450, 90, 100);
  fill(102);
  ellipse(400, 70, 120);
  
} else{
background(14, 33, 71);
  fill(46, 46, 45);
  rect(285, 200, 130, 240);
  fill(255);
  stroke(0);
   noFill();
  strokeWeight(10);
      if (frameCount % 10 == 0){ 
  lightcolor = 1;
}else if (frameCount % 13 == 0){
  lightcolor = 2;
}else if (frameCount % 15 == 0){
  lightcolor = 3;
  }


switch (lightcolor){ //makes the traffic light colors appear and flash
  case 1: //red light
    fill(255, 0, 0);
    circle(350, 250, 50);
    break
  case 2: //yellow light
    fill(255, 238, 5);
    circle(350, 315, 50);
    break
  case 3: //green light
    fill(0, 255, 0);
    circle(350, 370, 50);
    break
}
  if (mouseY >= 200) {
  fill(46, 46, 45);
   rect(295, 180, 130, 240);

    if (frameCount % 10 == 0){ 
  lightcolor = 1;
}else if (frameCount % 13 == 0){
  lightcolor = 2;
}else if (frameCount % 15 == 0){
  lightcolor = 3;
  }


switch (lightcolor){ //makes the traffic light colors appear and flash
  case 1: //red light
    fill(255, 0, 0);
    circle(360, 240, 50);
    break
  case 2: //yellow light
    fill(255, 238, 5);
    circle(360, 315, 50);
    break
  case 3: //green light
    fill(0, 255, 0);
    circle(360, 365, 50);
    break
}
  }
  noFill();
  arc(160, (mouseY), 300, 100, PI, TWO_PI);
  arc(545, (mouseY), 300, 100, PI, TWO_PI);
  arc(350, (mouseY), 85, 20, PI, TWO_PI);
 
  
}


}

function glasses(){ //creates the glasses
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

function trafficlight(){ //creates the traffic light
fill(46, 46, 45);
rect(340, 230, 80, 160);
fill(255);
//circle(380, 260, 35); originally wanted to keep all three lights on permanently,
//                      but having them flash seemed more interesting
//circle(380, 315, 35); 
//circle(380, 365, 35);

if (frameCount % 10 == 0){ //i was inspired by the code we looked at last week where we used frameCount to change the background color
  lightcolor = 1;
}else if (frameCount % 13 == 0){
  lightcolor = 2;
}else if (frameCount % 15 == 0){
  lightcolor = 3;
  }


switch (lightcolor){ //makes the traffic light colors appear and flash
  case 1: //red light
    fill(255, 0, 0);
    circle(380, 260, 35);
    break
  case 2: //yellow light
    fill(255, 238, 5);
    circle(380, 315, 35);
    break
  case 3: //green light
    fill(0, 255, 0);
    circle(380, 365, 35);
    break
}
}


class FogMachine { //shiffman 7.3 arrays of objects
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() { //this makes the ellipses move a little bit, like particle effects
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

function atigmatism(a, b , c, d, e) {
  noStroke();
   fill(a, b, c, d);
  for (k = 0; k < 30; k++) {
  ellipse(380 + k*5, e + k*-4, 20 + k*-0.6);

}
}

function switchscene() {
if (mouseIsPressed){
  if (mouseX >= 100 ){
    if (mouseY <= 350)
      scene = 2
  }
  }
}

function revertscene() {
  if (keyIsPressed === true){
     scene = 1
}
}