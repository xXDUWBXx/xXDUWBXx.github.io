let xSpeed = 0;
let ySpeed = 0;
let playerX = 350;
let playerY = 350;
let screenX = 1150;
let screenY = 1150;
let speed = 4;
let x = 1;
let y = 1;
let a = 1;
let rotation = 0;
let cw = false;
let ccw = false;
let part = [];
let scene = 0;
let shadow;
let bee;
function setup() {
  createCanvas(700, 700);
  part[0] = loadImage('https://raw.githubusercontent.com/xXDUWBXx/xxduwbxx.github.io/main/html/images/VergilArtProjectPart1pictures.png');
  part[1] = loadImage('https://raw.githubusercontent.com/xXDUWBXx/xxduwbxx.github.io/main/html/images/VergilArtProjectPart2pictures.png');
  shadow = loadImage('https://raw.githubusercontent.com/xXDUWBXx/xxduwbxx.github.io/main/html/images/shadow.png');
  bee = loadImage('https://raw.githubusercontent.com/xXDUWBXx/xxduwbxx.github.io/main/html/images/bee.png');
}

function draw() {
  cursor('https://raw.githubusercontent.com/xXDUWBXx/xxduwbxx.github.io/main/html/images/cursor.png',8,8);
  background(0);
  for(let i = 0; i < speed; i ++){
    if(dist(mouseX,mouseY,playerX,playerY)>30){
      xSpeed = (mouseX-playerX)/dist(mouseX,mouseY,playerX,playerY)*dist(mouseX,mouseY,playerX,playerY)/200;
      playerX += xSpeed;
      ySpeed = (mouseY-playerY)/dist(mouseX,mouseY,playerX,playerY)*dist(mouseX,mouseY,playerX,playerY)/200;
      playerY += ySpeed;
    }
  }
  
  push();
  imageMode(CENTER);
  translate(width/2+screenX,height/2+screenY);
  rotate(rotation/500);
  fill(255);
  image(part[scene],0+scene*430,0+scene*400,2500,2500);
  pop();
  push();
  stroke(0);
  if(playerX > width-150){
    playerX = width-150;
  }
  if(playerX < 150){
    playerX = 150;
  }
  if(playerY > height-150){
    playerY = height-150;
  }
  if(playerY < 150){
    playerY = 150;
  }
  translate(playerX,playerY);
  x = mouseX - playerX;
  y = mouseY - playerY;
  a = atan2(y, x);
  rotate(a);
  image(bee,-30,-30);
  pop();
  push();
  imageMode(CENTER);
  image(shadow, playerX,playerY,2800,2800);
  pop();
  stroke(255);
  fill(255);
  if(cw){
    rotation ++;
  }
  if(ccw){
    rotation --;
  }
  if(mouseX > width-75){
    screenX --;
  }
  if(mouseX < 75){
    screenX ++;
  }
  if(mouseY > height-75){
    screenY --;
  }
  if(mouseY < 75){
    screenY ++;
  }
  if(mouseX > width-150){
    screenX --;
  }
  if(mouseX < 150){
    screenX ++;
  }
  if(mouseY > height-150){
    screenY --;
  }
  if(mouseY < 150){
    screenY ++;
  }
}

function keyPressed() {
  if(key == 'a' || key == 'A'){
    ccw = true;
  }
  if(key == 'd' || key == 'D'){
    cw = true;
  }
  if(key == 'x' || key == 'X'){
    scene = 1;
    rotation = 0;
  }
  if(key == 'z' || key == 'Z'){
    scene = 0;
  }
}

function keyReleased() {
  if(key == 'a' || key == 'A'){
    ccw = false;
  }
  if(key == 'd' || key == 'D'){
    cw = false;
  }
}
