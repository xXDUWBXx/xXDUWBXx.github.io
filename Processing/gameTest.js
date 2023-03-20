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
let scene = 0; //change this back to 0!!!
let qTSlider = 0;
let qTEvent = false;
let slider = false;
let sliderPressed = false;
let cave;
let scroll = 0; //change this back to 0!!!
let shield = [];
let medusaPresent = false;
let hint = false;
let hintTime = 0;
let poly = [];
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
let skin = 0;
let innerCave;
let medusa = [];
let pegasus;
let chrysaor;
let murder = false;
let murderTimer = 0;
let murderFrame = 0;
let medusaDead = false;
let pegX = 0;
let pegY = 0;
let chryX = 0;
let chryY = 0;
let tallHall;
let stone = 0;
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
  //+9
  perseus[9] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredFront.png');
  perseus[10] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredLeft0.png');
  perseus[11] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredLeft1.png');
  perseus[12] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredLeft0.png');
  perseus[13] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredLeft2.png');
  perseus[14] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredRight0.png');
  perseus[15] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredRight1.png');
  perseus[16] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredRight0.png');
  perseus[17] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredRight2.png');
  //+18
  perseus[18] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredFrontPurple.png');
  perseus[19] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredLeft0Purple.png');
  perseus[20] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredLeft1Purple.png');
  perseus[21] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredLeft0Purple.png');
  perseus[22] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredLeft2Purple.png');
  perseus[23] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredRight0Purple.png');
  perseus[24] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredRight1Purple.png');
  perseus[25] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredRight0Purple.png');
  perseus[26] = loadImage('https://xxduwbxx.github.io/html/images/perseusArmoredRight2Purple.png');
  //murder ;)
  perseus[27] = loadImage('https://xxduwbxx.github.io/html/images/perseusHead.png');
  cave = loadImage('https://xxduwbxx.github.io/html/images/cave.png');
  shield[0] = loadImage('https://xxduwbxx.github.io/html/images/shieldFront.png');
  shield[1] = loadImage('https://xxduwbxx.github.io/html/images/shieldFrontMedusa.png');
  poly[0] = loadImage('https://xxduwbxx.github.io/html/images/polydectes.png');
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
  innerCave = loadImage('https://xxduwbxx.github.io/html/images/innerCave.png');
  medusa[0] = loadImage('https://xxduwbxx.github.io/html/images/medusa.png');
  medusa[1] = loadImage('https://xxduwbxx.github.io/html/images/medusaMurder0.png');
  medusa[2] = loadImage('https://xxduwbxx.github.io/html/images/medusaMurder1.png');
  medusa[3] = loadImage('https://xxduwbxx.github.io/html/images/medusaMurder2.png');
  medusa[4] = loadImage('https://xxduwbxx.github.io/html/images/medusaMurder3.png');
  medusa[5] = loadImage('https://xxduwbxx.github.io/html/images/medusaMurder4.png');
  pegasus = loadImage('https://xxduwbxx.github.io/html/images/pegasus.png');
  chrysaor = loadImage('https://xxduwbxx.github.io/html/images/chrysaor.png');
  poly[1] = loadImage('https://xxduwbxx.github.io/html/images/polydectesStone.png');
  tallHall = loadImage('https://xxduwbxx.github.io/html/images/tallHall.png');
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
  frameRate(60);
}

function draw() {
  textAlign(CENTER,CENTER);
  scale(scaleFactor);
  imageMode(CORNER);
  rectMode(CORNER);
  if(scene == 0){
    background(0);
    image(hall,0,0,500,500);
    image(poly[0],390,290);
    fill(255);
    stroke(0);
    textSize(20);
    text("WASD/Arrow Keys to move",250,440);
    text("E to interact/skip text",250,460);
    if(quest){
      textSize(50);
      fill(255);
      stroke(0);
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
        text('I must seek help from the gods!',playerX-55,225,160,35);
        text('(Press E to continue)',playerX-55,260,160,20);
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
          textAlign(RIGHT);
          text("Can you please help me find the Hesperides?",playerX+50,playerY-25);
        }
        else if(dialogue == 1){
          fill(200,200,200);
          stroke(0);
          strokeWeight(2);
          text("No.",325,280);
          text("Go away.",450,280);
          text("We don't like you.",400,250);
        }
        else if(dialogue == 2){
          fill(100,100,255);
          strokeWeight(2);
          stroke(0);
          text("Then you leave me no choice but to steal that eye of yours!",playerX-100,playerY-100,150,100);
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
      textSize(15);
      fill(255);
      stroke(0);
      text("Steal the eye while it is at its most vulnerable!",250,450);
    }
    if(theft){
      frozen = true;
      dialogueTimer ++;
      haveEyes = false;
      if(dialogue == 0){
        textSize(15);
        stroke(0);
        fill(100,100,255);
        text("Haha! I got your eye! Now you must take me to the Hesperides if you ever want your eye back!", playerX-100,playerY-100,150,100);
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
      if(dialogueHappening){
        frozen = true;
        dialogueTimer ++;
        textSize(25);
        fill(255);
        stroke(0);
        text('(Press E to continue)',250,450);
        //Athena
        if(playerX < 60){
          if(dialogue == 0){
            fill(255,255,0);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            textAlign(LEFT);
            text('Hello there, Perseus!',0,275);
            textAlign(CENTER,CENTER);
          }
          else if(dialogue == 1){
            fill(0,0,255);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            textAlign(LEFT);
            text('Oh, uh, hi Athena',playerX,playerY-25);
            textAlign(CENTER,CENTER);
          }
          else if(dialogue == 2){
            fill(255,255,0);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            textAlign(LEFT);
            text('Take this polished shield, you',0,260);
            text("can use it to see Medusa's reflection",0,275);
            text('without being turned to stone.',0,290);
            textAlign(CENTER,CENTER);
          }
          else if(dialogue == 3){
            fill(0,0,255);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            textAlign(LEFT);
            text('Oh, thanks',playerX,275);
            textAlign(CENTER,CENTER);
          }
          else if(dialogue == 4){
            fill(255,255,0);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            textAlign(LEFT);
            text('Remember to press E to enter',0,260);
            text("Medusa's cave when you see",0,275);
            text('her reflection in the shield.',0,290);
            textAlign(CENTER,CENTER);
          }
          else if (dialogue == 5){
            fill(0,0,255);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            textAlign(LEFT);
            text('Press E? What are',playerX,275);
            text('you talking about?',playerX,290);
            textAlign(CENTER,CENTER);
          }
          else{
            dialogueHappening = false;
            dialogueTimer = 0;
            talkedToAthena = true;
            frozen = false;
            dialogue = 0;
          }
        }
        //Hermes 150,300, width 50
        else if(playerX > 100 && playerX < 200){
          if(dialogue == 0){
            fill(200,150,100);
            stroke(0);
            textSize(15);
            strokeWeight(1);
            text("Good evening, Perseus",175,275);
          }
          else if(dialogue == 1){
            fill(0,0,255);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            text("Oh, hi there Hermes",playerX+25,275);
          }
          else if(dialogue == 2){
            fill(200,150,100);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            text("Take my sandals, they will",175,275);
            text("help you travel more quickly",175,290);
          }
          else if(dialogue == 3){
            fill(0,0,255);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            text("Thanks!",playerX+25,275);
          }
          else{
            dialogueHappening = false;
            dialogueTimer = 0;
            talkedToHermes = true;
            frozen = false;
            dialogue = 0;
          }
        }
        //Zeus 290,300 width 60
        else if(playerX < 350 && playerX > 240){
          if(dialogue == 0){
            fill(0,0,255);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            text("HI DAD!!!",playerX+25,275);
          }
          else if(dialogue == 1){
            fill(255,0,255);
            stroke(0);
            strokeWeight(1);
            textSize(16);
            text("Hello son, take these gifts: this adamantine",320,259);
            text("sword will let you kill Medusa, and the Helm",320,275);
            text("of Darkness will let you escape unseen.",320,291);
          }
          else if(dialogue == 2){
            fill(0,0,255);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            text("THANKS DAD!!!",playerX+25,275);
          }
          else{
            dialogueHappening = false;
            dialogueTimer = 0;
            talkedToZeus = true;
            frozen = false;
            dialogue = 0;
          }
        }
        //Hesperides
        else if(playerX > 390){
          if(dialogue == 0){
            fill(255,100,100);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            textAlign(RIGHT);
            text("Welcome, Perseus",495,275);
            textAlign(CENTER,CENTER);
          }
          else if(dialogue == 1){
            fill(0,0,255);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            textAlign(RIGHT);
            text("Hi, where are the other Hesperides?",playerX+50,275);
            textAlign(CENTER,CENTER);
          }
          else if(dialogue == 2){
            fill(255,100,100);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            textAlign(RIGHT);
            text("They are busy. In the meantime, take",495,275);
            text("this knapsack to store Medusa's head.",495,290);
            textAlign(CENTER,CENTER);
          }
          else if(dialogue == 3){
            fill(0,0,255);
            stroke(0);
            strokeWeight(1);
            textSize(15);
            textAlign(RIGHT);
            text("Thank you!",playerX+50,275);
            textAlign(CENTER,CENTER);
          }
          else{
            dialogueHappening = false;
            dialogueTimer = 0;
            talkedToHesperides = true;
            frozen = false;
            dialogue = 0;
          }
        }
      }
      else{
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
      if(talkedToHermes && talkedToZeus && talkedToHesperides && talkedToAthena){
        fill(255,0,255);
        stroke(0);
        strokeWeight(1);
        textSize(16);
        text("Now go and slay that treacherous gorgon!",320,275);
        textSize(25);
        fill(255);
        stroke(0);
        text('(Press E to continue)',250,450);
      }
    }
    else{
      fill(255,0,255);
      stroke(0);
      strokeWeight(1);
      textSize(16);
      text("Now go and slay that treacherous gorgon!",320,275);
      background(0,fade);
      fade += 2;
      if(fade >= 255){
      scene ++;
      fade = 0;
      playerX = 0;
      }
    }
  }
  else if(scene == 3){
    //page setup
    fill(255);
    noStroke();
    background(0);
    skin = 9;
    image(cave,-scroll,0);
    if(playerX+scroll >= 670 && playerX+scroll <= 790){
      skin = 18;
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
  }
  else if(scene == 4){
    //here Perseus will cut off Medusa's head
    fill(255);
    background(0);
    image(innerCave,0,0);
    image(medusa[int(medusaDead)*5],300,350);
    if(!murder){
      textSize(50);
      fill(255);
      stroke(0);
      strokeWeight(1);
      text('!',350,300);
      if(playerX > 250 && playerX < 400){
        image(iconE,327.5,277.5);
      }
    }
    else{
      frozen = true;
      fill(0);
      strokeWeight(2);
      stroke(0);
      rect(250,300,200,100);
      push();
      scale(2);
      image(medusa[murderFrame],250/2,300/2);
      pop();
      murderTimer ++;
      if(murderTimer > 60 && murderFrame >= 5){
        murder = false;
        murderTimer = 0;
        murderFrame = 0;
        medusaDead = true;
        frozen = false;
        pegX = 350;
        pegY = 350;
        chryX = 350;
        chryY = 350;
      }
      else if(murderTimer > 60){
        murderTimer = 0;
        murderFrame ++;
      }
    }
    if(medusaDead){
      image(pegasus,pegX,pegY);
      pegX -= 5;
      pegY -= 5;
      image(chrysaor,chryX,chryY);
      chryY -= 5;
      chryX += 5;
      if(chryY <= 0){
        background(0,fade);
        fade += 2;
        if(fade >= 255){
          scene ++;
          fade = 0;
          playerX = 0;
          quest = true;
        }
      }
    }
  }
  else if(scene == 5){
    //last bit of dialogue w/ polydectes, then he is turned to stone, then camera pans up to sunset :)
    background(255);
    image(tallHall,0,scroll);
    image(poly[stone],390,290+scroll+500);
    if(quest){
      textSize(50);
      fill(255);
      stroke(0);
      text('!',420,275);
      if(playerX >= 325){
        imageMode(CENTER);
        image(iconE,420,275);
        imageMode(CORNER);
      }
    }
    else if(dialogueHappening){
      quest = false;
      stroke(0);
      strokeWeight(1);
      textSize(15);
      frozen = true;
      dialogueTimer ++;
      if(dialogue == 0){
        fill(255,200);
        rect(340,220,160,75);
        fill(100);
        noStroke();
        textSize(15);
        text("Perseus?!? You're back?!? (Press E to continue)",340,220,160,75);
      }
      else if(dialogue == 1){
        fill(255,200);
        rect(playerX-55,220,160,75);
        fill(0,0,200);
        noStroke();
        textSize(15);
        text('I have returned with your gift, BEHOLD! (Press E to continue)',playerX-55,220,160,75);
      }
      else if(dialogue == 2){
        fill(255,200);
        rect(340,240,160,50);
        fill(255,0,0);
        stroke(255,0,0);
        textSize(15);
        text("WAIT! NO-",420,255);
        fill(100,255);
        noStroke();
        text('(Press E to continue)',420,275)
      }
      else{
        murder = true;
        dialogueHappening = false;
      }
    }
    if(murder){
      image(perseus[27],325,300+scroll+500);
      murderTimer ++;
      if(murderTimer > 15){
        stone = 1;
      }
      if(murderTimer > 60 && scroll < 0){
        scroll ++;
      }
      if(murderTimer > 120 && murderTimer < 750){
        fill(0);
        stroke(255);
        textSize(50);
        text("The End",250,250);
      }
    }
  }
  if(!divineIntervention && !murder){
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
    image(perseus[playerFrame+skin],playerX,playerY);
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
      if((playerX < 60 && !talkedToAthena) || (playerX < 200 && playerX > 100 && !talkedToHermes) || (playerX < 350 && playerX > 240 && !talkedToZeus) || (playerX > 390 && !talkedToHesperides)){
        dialogueHappening = true;
      }
      if(dialogueHappening && dialogueTimer >= 50){
        dialogueTimer = 0;
        dialogue ++;
      }
      if(talkedToHermes && talkedToZeus && talkedToHesperides && talkedToAthena){
        quest = false;
      }
      /*if(playerX < 60 && !talkedToAthena){
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
      }*/
    }
    else if(scene == 3 && playerX+scroll >= 670 && playerX+scroll <= 790){
      scene = 4;
      playerX = 0;
      scroll = -500;
    }
    else if(scene == 4 && playerX > 250 && playerX < 400){
      murder = true;
    }
    else if(scene == 5){
      if(playerX >= 325 && quest){
        quest = false;
        dialogueHappening = true;
      }
      else if(dialogueTimer >= 50){
        dialogueTimer = 0;
        dialogue ++;
      }
    }
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
- make inner cave
- make medusa
- kill medusa
- kill Polydectes with medusa's head
- full perseus skin
- some other stuff, idk
- fix bugs
- make presentation
*/
