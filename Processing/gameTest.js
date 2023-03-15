let aPressed = false;
let dPressed = false;
let playerX = 200;
let playerY = 250;
let jumpVel = 0;
let jump = false;
let gravityVel = 0;
let perseus = [];
let playerFrame = 0;
function preload() {
  perseus[0] = loadImage('https://xxduwbxx.github.io/html/images/perseusFront.png');
  perseus[1] = loadImage('https://xxduwbxx.github.io/html/images/perseusLeft0.png');
  perseus[2] = loadImage('https://xxduwbxx.github.io/html/images/perseusLeft1.png');
  perseus[3] = loadImage('https://xxduwbxx.github.io/html/images/perseusLeft0.png');
  perseus[4] = loadImage('https://xxduwbxx.github.io/html/images/perseusLeft2.png');
  perseus[5] = loadImage('https://xxduwbxx.github.io/html/images/perseusRight0.png');
  perseus[6] = loadImage('https://xxduwbxx.github.io/html/images/perseusRight1.png');
  perseus[7] = loadImage('https://xxduwbxx.github.io/html/images/perseusRight0.png');
  perseus[8] = loadImage('https://xxduwbxx.github.io/html/images/perseusRight2.png');
}
function setup() {
  createCanvas(500,500);
  textAlign(CENTER,CENTER);
  textSize(50);
  imageMode(CORNER);
}

function draw() {
  //movement
  if(aPressed){
    playerX -= 3;
    if(playerFrame >= 10 && playerFrame < 49){
      playerFrame += 1;
    }
    else{
      playerFrame = 10;
    }
  }
  if(dPressed){
    playerX += 3;
    if(playerFrame >= 50 && playerFrame < 89){
      playerFrame += 1;
    }
    else{
      playerFrame = 50;
    }
  }
  if(floor(playerFrame/10) >= 9){
    print(playerFrame);
    playerFrame = 0;
  }
  if(!dPressed && !aPressed){
    playerFrame = 0;
  }
  if(playerX < 0){
    playerX = 0;
  }
  else if(playerX > 450){
    playerX = 450;
  }
  //page setup
  fill(255);
  noStroke();
  background(0);
  fill(200,100,50);
  rect(0,400,500,100);
  //player
  fill(255,0,0);
  //rect(playerX,playerY,50,100);
  image(perseus[floor(playerFrame/10)],playerX,playerY,50,100);
  //gravity & jumping
  if(playerY < 300){
    playerY += gravityVel;
    gravityVel ++;
  } 
  else if (playerY > 300){
    playerY = 300;
    gravityVel = 0;
    jumpVel = 0;
  } else{
    gravityVel = 0;
    jumpVel = 0;
  }
  if(jump && playerY == 300){
    jumpVel = 15;
  }
  playerY -= jumpVel;
}

function keyPressed(){
  if(key=='a' || key == 'A' || keyCode == LEFT_ARROW){
    aPressed = true;
  }
  if(key=='d' || key == 'D' || keyCode == RIGHT_ARROW){
    dPressed = true;
  }
  if(key=='w' || key =='W' || keyCode == UP_ARROW){
    jump = true;
  }
}
function keyReleased(){
  if(key == 'a' || key == 'A' || keyCode == LEFT_ARROW){
    aPressed = false;
  }
  if(key=='d' || key == 'D' || keyCode == RIGHT_ARROW){
    dPressed = false;
  }
  if(key=='w' || key =='W' || keyCode == UP_ARROW){
    jump = false;
  }
}

//start w/ perseus pursuing persistent probably to perilous percave, where pe pill pill per!
