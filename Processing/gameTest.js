let keyColor = 0;
let aPressed = false;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(aPressed){
    keyColor = 255;
  }
  else{
    keyColor = 0;
  }
  background(keyColor);
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
