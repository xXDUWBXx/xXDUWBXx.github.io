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
let scene = 0;
let qTSlider = 0;
let qTEvent = false;
let slider = false;
let sliderPressed = false;
let cave;
let scroll = 0;
let shield = [];
let medusaPresent = false;
let hint = false;
let hintTime = 0;
let poly;
let hall;
let frozen = false;
let quest = true;
let dialogueHappening = false;
let dialogueTimer = 0;
let dialogue = 0;
let iconE;
let fade = 0;
let divineIntervention = false;
let scaleFactor;
let screenSize;
let darkMountain;
let graeae = [];
let haveEyes = true;
let graeaeTimer = 0;
let graeaeFrame = 0;
let graeaeFrameDelay = 0;
let theft = false;
let mountain;
let athena;
let talkedToAthena = false;
let zeus = [];
let talkedToZeus = false;
let hermes = [];
let talkedToHermes = false;
let hesperides = [];
let talkedToHesperides = false;
let talkingTo = "";
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
  poly = loadImage('https://xxduwbxx.github.io/html/images/polydectes.png');
  hall = loadImage('https://xxduwbxx.github.io/html/images/hall.png');
  iconE = loadImage('https://xxduwbxx.github.io/html/images/iconE.png');
  darkMountain = loadImage('https://xxduwbxx.github.io/html/images/darkMountain.png');
  graeae[0] = loadImage('https://xxduwbxx.github.io/html/images/graeae.png');
  graeae[1] = loadImage('https://xxduwbxx.github.io/html/images/graeaeEye0.png');
  graeae[2] = loadImage('https://xxduwbxx.github.io/html/images/graeaeEye1.png');
  graeae[3] = loadImage('https://xxduwbxx.github.io/html/images/graeaeEye2.png');
  graeae[4] = loadImage('https://xxduwbxx.github.io/html/images/graeaeEye3.png');
  graeae[5] = loadImage('https://xxduwbxx.github.io/html/images/graeaeEye4.png');
  graeae[6] = loadImage('https://xxduwbxx.github.io/html/images/graeaeEye5.png');
  graeae[7] = loadImage('https://xxduwbxx.github.io/html/images/graeaeEye4.png');
  graeae[8] = loadImage('https://xxduwbxx.github.io/html/images/graeaeEye3.png');
  graeae[9] = loadImage('https://xxduwbxx.github.io/html/images/graeaeEye2.png');
  graeae[10] = loadImage('https://xxduwbxx.github.io/html/images/graeaeEye1.png');
  mountain = loadImage('https://xxduwbxx.github.io/html/images/mountain.png');
  athena = loadImage('https://xxduwbxx.github.io/html/images/athena.png');
  hermes[0] = loadImage('https://xxduwbxx.github.io/html/images/hermesHolding.png');
  hermes[1] = loadImage('https://xxduwbxx.github.io/html/images/hermes.png');
  zeus[0] = loadImage('https://xxduwbxx.github.io/html/images/zeusHolding.png');
  zeus[1] = loadImage('https://xxduwbxx.github.io/html/images/zeus.png');
  hesperides[0] = loadImage('https://xxduwbxx.github.io/html/images/hesperidesHolding.png');
  hesperides[1] = loadImage('https://xxduwbxx.github.io/html/images/hesperides.png');
}
function setup() {
  //createCanvas(500,500);
  textAlign(CENTER,CENTER);
  textSize(50);
  imageMode(CORNER);
  if(windowWidth > windowHeight){
    scaleFactor = windowHeight/500;
    screenSize = windowHeight;
  }
  else{
    scaleFactor = windowWidth/500;
    screenSize = windowWidth;
  }
  createCanvas(screenSize,screenSize);
}

function draw() {
  //scale(scaleFactor);
  if(scene == 0){
    background(0);
    image(hall,0,0,500,500);
    image(poly,390,290);
    fill(255);
    stroke(0);
    if(quest){
      text('!',420,275);
      if(playerX >= 325){
        imageMode(CENTER);
        image(iconE,420,275);
        imageMode(CORNER);
      }
    }
    else if(dialogueHappening){
      frozen = true;
      dialogueTimer ++;
      if(dialogue == 0){
        fill(255,200);
        rect(340,190,160,100);
        fill(100);
        noStroke();
        textSize(15);
        text('Welcome, Perseus! Do you have a horse to bring to my upcoming banquet as a gift? (Press E to continue)',340,190,160,100);
      }
      else if(dialogue == 1){
        fill(255,200);
        rect(playerX-55,190,160,100);
        fill(0,0,200);
        noStroke();
        textSize(15);
        text('Unfortunately I do not own a horse. But please, name a gift and I shall bring it. (Press E to continue)',playerX-55,190,160,100);
      }
      else if(dialogue == 2){
        fill(255,200);
        rect(340,215,160,75);
        fill(100);
        noStroke();
        textSize(15);
        text('I have the perfect idea! You shall bring me... (Press E to continue)',340,215,160,75);
      }
      else if(dialogue == 3){
        fill(255,200);
        rect(340,240,160,50);
        fill(255,0,0);
        stroke(255,0,0);
        textSize(15);
        text("MEDUSA'S HEAD",420,255);
        fill(100,255);
        noStroke();
        text('(Press E to continue)',420,275)
      }
      else if(dialogue == 4){
        fill(255,200);
        rect(playerX-55,215,160,75);
        fill(0,0,200);
        noStroke();
        textSize(15);
        text('I must seek help from the gods!\n(Press E to continue)',playerX-55,215,160,75);
      }
      else{
        dialogueTimer = 0;
        dialogue = 0;
        frozen = false;
        dialogueHappening = false;
      }
      textSize(50);
    }
    else{
      background(0,fade);
      fade += 2;
      if(fade >= 255){
        scene ++;
        fade = 0;
        playerX = 0;
        divineIntervention = true;
      }
    }
  }
  else if(scene == 1){
    background(0);
    noStroke();
    if(divineIntervention){
      image(perseus[0],225,200);
      dialogueTimer ++;
      frozen = true;
      if(dialogue == 0){
        textSize(50);
        fill(255,255,0);
        stroke(255,255,0);
        text('Perseus!',125,50);
        fill(255);
        textSize(15);
        noStroke();
        text('(Press E to continue)', 250,450);
      }
      else if(dialogue == 1){
        textSize(15);
        fill(100,100,255);
        stroke(0,0,255);
        text('Huh?',250,175);
        fill(255);
        textSize(15);
        noStroke();
        text('(Press E to continue)', 250,450);
      }
      else if(dialogue == 2){
        textSize(50);
        fill(255,255,0);
        stroke(255,255,0);
        text("It's me, Athena! I will help you kill Medusa,",0,0,500,200);
        text('But you must listen to me!',0,300,500,150);
        fill(255);
        textSize(15);
        noStroke();
        text('(Press E to continue)', 250,450);
      }
      else if(dialogue == 3){
        textSize(50);
        fill(255,255,0);
        stroke(255,255,0);
        text("Find the Hesperides and they will give you what you need.",0,0,500,200);
        text('NOW GO!',0,300,500,150);
        fill(255);
        textSize(15);
        noStroke();
        text('(Press E to continue)', 250,450);
      }
      else if(dialogue == 4){
        textSize(15);
        fill(100,100,255);
        stroke(0,0,255);
        text('How will I find them?',250,175); //then "hello?", then "I must seek the graeae"
        fill(255);
        textSize(15);
        noStroke();
        text('(Press E to continue)', 250,450);
      }
      else if(dialogue == 5){
        textSize(15);
        fill(100,100,255);
        stroke(0,0,255);
        text('Hello?',250,175);
        fill(255);
        textSize(15);
        noStroke();
        text('(Press E to continue)', 250,450);
      }
      else if(dialogue == 6){
        textSize(15);
        fill(100,100,255);
        stroke(0,0,255);
        text('I must seek the Graeae, they will help me!',250,175);
        fill(255);
        textSize(15);
        noStroke();
        text('(Press E to continue)', 250,450);
      }
      else{
        background(0,fade);
        fade += 2;
        if(fade >= 255){
          fade = 0;
          playerX = 0;
          dialogue = 0;
          dialogueTimer = 0;
          divineIntervention = false;
          frozen = false;
          quest = true;
        }
      }
    }
    else{
      background(0);
      image(darkMountain,0,0);
      if(graeaeFrame >= 1 && graeaeFrame < 10 && graeaeFrameDelay >= 15){
        graeaeFrame += 1;
        graeaeFrameDelay = 0;
      }
      else if(graeaeFrame < 1 || graeaeFrame > 10){
        graeaeFrame = 1;
        graeaeFrameDelay = 0;
      }
      else if(graeaeFrameDelay >= 15){
        graeaeFrame = 1;
        graeaeFrameDelay = 0;
      }
      graeaeFrameDelay ++;
      if(!haveEyes){
        graeaeFrame = 0;
      }
      image(graeae[graeaeFrame],300,300);
      if(quest){
        textSize(50);
        fill(255);
        stroke(0);
        text("!",395,275);
        if(playerX > 250){
          image(iconE,375,250);
        }
      }
      if(dialogueHappening){
        dialogueTimer ++;
        frozen = true;
        if(dialogue == 0){
          textSize(15);
          fill(100,100,255);
          stroke(0);
          strokeWeight(2);
          text("Can you please help me find the Hesperides?",playerX+25,playerY-25);
        }
        else if(dialogue == 1){
          fill(200,200,200);
          stroke(0);
          strokeWeight(2);
          text("No.",325,280);
          text("Go away.",450,280);
          text("We don't like you.",400,310);
        }
        else if(dialogue == 2){
          fill(100,100,255);
          strokeWeight(2);
          stroke(0);
          text("Then you leave me no choice but to steal that eye of yours!",playerX-50,playerY-100,150,100);
        }
        else{
          dialogueHappening = false;
          frozen = false;
          dialogueTimer = 0;
          dialogue = 0;
          qTEvent = true;
        }
      }
    }
    if(qTEvent){
      textSize(50);
      text("!",395,275);
      if(playerX > 300){
        image(iconE,375,250);
      }
    }
    if(theft){
      frozen = true;
      dialogueTimer ++;
      haveEyes = false;
      if(dialogue == 0){
        textSize(15);
        stroke(0);
        fill(100,100,255);
        text("Haha! I got your eye! Now you must take me to the Hesperides if you ever want your eye back!", playerX-50,playerY-100,150,100);
      }
      else if(dialogue == 1){
        fill(200,200,200);
        strokeWeight(2);
        stroke(0);
        text("Ugh! FINE!",400,275);
      }
      else{
        background(0,fade);
        fade += 2;
        if(fade >= 255){
          scene ++;
          fade = 0;
          playerX = 0;
          dialogue = 0;
          dialogueTimer = 0;
          dialogueHappening = false;
          theft = false;
          qTEvent = false;
          frozen = false;
          strokeWeight(1);
          quest = true;
        }
      }
    }
  }
  else if(scene == 2){
    background(0);
    image(mountain,0,0);
    image(athena,10,300);
    image(hermes[int(talkedToHermes)],150,300);
    image(zeus[int(talkedToZeus)], 290,300);
    image(hesperides[int(talkedToHesperides)],440,300);
    //Athena - Shield
    //Hesperides - knadpsack
    //Zeus - Adamantine Sword, Helm of Darkness
    //Hermes - Winged Sandals  
    if(quest){
      textSize(50);
      fill(255);
      stroke(0);
      strokeWeight(1);
      if(!talkedToAthena){
        text("!",35,275);
        if(playerX < 60){
          image(iconE,12.5,250);
        }
      }
      if(!talkedToHermes){
        text("!",175,275);
        if(playerX < 200 && playerX > 100){
          image(iconE,152.5,250);
        }
      }
      if(!talkedToZeus){
        text("!",320,275);
        if(playerX < 350 && playerX > 240){
          image(iconE,297.5,250);
        }
      }
      if(!talkedToHesperides){
        text("!",465,275);
        if(playerX > 390){
          image(iconE,442.5,250);
        }
      }
    }
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
    scene --;
  }
  if(scene == 0 || (scene == 1 && !divineIntervention) || scene == 2 || scene == 3){
    if(frozen){
      jumpVel = 0;
      dPressed = false;
      aPressed = false;
    }
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
    if(fade != 0){
      background(0,fade);
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
  if(key == 'e' || key == 'E'){
    if(scene == 0){
      if(playerX >= 325 && quest){
        quest = false;
        dialogueHappening = true;
      }
      else if(dialogueTimer >= 50){
        dialogueTimer = 0;
        dialogue ++;
      }
    }
    else if(scene == 1){
      if(dialogueTimer >= 50 && (divineIntervention || dialogueHappening || theft)){
        dialogueTimer = 0;
        dialogue ++;
      }
      if(quest && playerX > 250){
        dialogueHappening = true;
        quest = false;
      }
      if(qTEvent && (graeaeFrame == 2 || graeaeFrame == 3 || graeaeFrame == 7 || graeaeFrame == 8) && playerX > 300){
        haveEyes = false;
        theft = true;
        qTEvent = false;
      }
    }
    else if(scene == 2){
      if(playerX < 60 && !talkedToAthena){
        talkingTo = "athena";
      }
      else if(playerX < 200 && playerX > 100 && !talkedToHermes){
        talkingTo = "hermes";
      }
      else if(playerX < 350 && playerX > 240 && !talkedToZeus){
        talkingTo = "zeus";
      }
      else if(playerX > 390 && !talkedToHesperides){
        talkingTo = "hesperides";
      }
    }
    else if(scene == 3 && playerX+scroll >= 680 && playerX+scroll <= 770){
      scene = 4;
    }
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
function windowResized(){
  if(windowWidth > windowHeight){
    scaleFactor = windowHeight/500;
    screenSize = windowHeight;
  }
  else{
    scaleFactor = windowWidth/500;
    screenSize = windowWidth;
  }
  resizeCanvas(screenSize,screenSize);
}

//start w/ perseus pursuing persistent probably to perilous percave, where pe pill pill per!

//optional: make skin of fully equipped Perseus for scene 3 & sprite for each piece of equipment for scene 2

/*
todo:
- make banquet hall, mountain, inner cave
- make characters (Polydectes, medusa, old women, gods, etc.)
- kill medusa
- kill Polydectes with medusa's head
- some other stuff, idk
- fix bugs
- make presentation
*/
