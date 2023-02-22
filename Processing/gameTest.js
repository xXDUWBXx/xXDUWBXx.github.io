let keyColor = 0;
let aPressed = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER,CENTER);
}

function draw() {
  if(aPressed){
    keyColor = 255;
  }
  else{
    keyColor = 0;
  }
  fill(255);
  background(keyColor);
  text(windowWidth + ", " + windowHeight, windowWidth/2,windowHeight/2);
}

function keyPressed(){
  if(key=='a' || key == 'A'){
    aPressed = true;
  }
}
function keyReleased(){
  if(key == 'a' || key == 'A'){
    aPressed = false;
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
