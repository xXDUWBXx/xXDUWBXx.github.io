let aPressed = false;
let dPressed = false;
let playerX = 200;
let playerY = 250;
let jumpVel = 0;
let jump = false;
let gravityVel = 0;
let perseus = [];
let playerFrame = 0;
let playerFrameDelay = 0;
let scene = 3;
let qTSlider = 0;
let slider = false;
let sliderPressed = false;
let cave;
let scroll = 0;
let shield = [];
let medusaPresent = false;
let hint = false;
let hintTime = 0;
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
  cave = loadImage('https://xxduwbxx.github.io/html/images/cave.png');
  shield[0] = loadImage('https://xxduwbxx.github.io/html/images/shieldFront.png');
  shield[1] = loadImage('https://xxduwbxx.github.io/html/images/shieldFrontMedusa.png');
}
function setup() {
  createCanvas(500,500);
  textAlign(CENTER,CENTER);
  textSize(50);
  imageMode(CORNER);
}

function draw() {
  if(scene == 0){
    scene ++;
  }
  else if(scene == 1){
    background(0);
    noStroke();
    if(qTSlider <=50){
      qTSlider = 50;
      slider = true;
    }
    else if(qTSlider >=445){
      qTSlider = 445;
      slider = false;
    }
    fill(255);
    rect(50,300,400,25);
    fill(255,0,0);
    rect(225,300,50,25);
    fill(0,255,0);
    rect(qTSlider,300,5,25);
    if(sliderPressed && qTSlider >= 225 && qTSlider <=275){
      scene ++;
      sliderPressed = false;
    }
    else{
      sliderPressed = false;
    }
    if(slider){
      qTSlider += 7;
    }
    else{
      qTSlider -= 7;
    }
  }
  else if(scene == 2){
    scene ++;
  }
  else if(scene == 3){
    //page setup
    fill(255);
    noStroke();
    background(0);
    image(cave,-scroll,0);
    if(playerX+scroll >= 680 && playerX+scroll <= 770){
      medusaPresent = true;
      if(hint){
        fill(255,0,255);
        text('!',playerX+25,playerY-25);
      }
    } else {
      medusaPresent = false;
    }
    //scrolling
    if(playerX > 350 && scroll < 500){
      scroll += 3;
      playerX = 350;
    }
    else if(playerX < 100 && scroll > 0){
      scroll -= 3;
      playerX = 100;
    }
    if(scroll > 500){
      scroll = 500;
    }
    if(scroll < 0){
      scroll = 0;
    }
    if(hint){
      if(hintTime <= 360){
        hintTime ++;
        fill(255);
        text('Hint Activated!',250,100);
      }
    }
  }
  else if(scene == 4){
    //here Perseus will cut off Medusa's head
  }
  if(scene == 2 || scene == 3){
    //movement
    if(aPressed){
      playerX -= 3;
      if(playerFrame >= 1 && playerFrame < 4 && playerFrameDelay >= 15){
        playerFrame += 1;
        playerFrameDelay = 0;
      }
      else if(playerFrame < 1 || playerFrame > 4){
        playerFrame = 1;
        playerFrameDelay = 0;
      }
      else if(playerFrameDelay >= 15){
        playerFrame = 1;
        playerFrameDelay = 0;
      }
      playerFrameDelay ++;
    }
    if(dPressed){
      playerX += 3;
      if(playerFrame >= 5 && playerFrame < 8 && playerFrameDelay >= 15){
        playerFrame += 1;
        playerFrameDelay = 0;
      }
      else if(playerFrame < 5 || playerFrame > 8){
        playerFrame = 5;
        playerFrameDelay = 0;
      }
      else if(playerFrameDelay >= 15){
        playerFrame = 5;
        playerFrameDelay = 0;
      }
      playerFrameDelay ++;
    }
    if(playerFrame >= 9){
      playerFrame = 0;
    }
    if((!dPressed && !aPressed) || (dPressed && aPressed)){
      playerFrame = 0;
      playerFrameDelay = 0;
    }
    if(playerX < 0){
      playerX = 0;
    }
    else if(playerX > 450){
      playerX = 450;
    }
    //player
    fill(255,0,0);
    //rect(playerX,playerY,50,100);
    image(perseus[playerFrame],playerX,playerY,50,100);
    if(scene == 3){
      image(shield[int(medusaPresent)],playerX,playerY+15,50,100);
    }
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
}

function keyPressed(){
  if(key == 'a' || key == 'A' || keyCode == LEFT_ARROW){
    aPressed = true;
  }
  if(key == 'd' || key == 'D' || keyCode == RIGHT_ARROW){
    dPressed = true;
  }
  if(key == 'w' || key =='W' || keyCode == UP_ARROW){
    jump = true;
  }
  if(key == ' ' && scene == 1){
    sliderPressed = true;
  }
  if((key == 'e' || key == 'E') && scene == 3){
    scene = 4;
  }
  if((key == 'h' || key == 'H') && scene == 3){
    hint = true;
  }
}
function keyReleased(){
  if(key == 'a' || key == 'A' || keyCode == LEFT_ARROW){
    aPressed = false;
  }
  if(key == 'd' || key == 'D' || keyCode == RIGHT_ARROW){
    dPressed = false;
  }
  if(key == 'w' || key =='W' || keyCode == UP_ARROW){
    jump = false;
  }
}

//start w/ perseus pursuing persistent probably to perilous percave, where pe pill pill per!
