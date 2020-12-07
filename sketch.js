var monkey , monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var ground, groundIMG;
var invisibleGround;
var forestbg, forestbgIMG;
var bgSound;
var score = 0;

function preload(){  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  groundIMG = loadImage("grass.jpg");
  
  forestbgIMG = loadImage("forestbg.jpg");
  
  bgSound = loadSound("410574__yummie__game-background-music-loop-short.mp3");
  
}


function setup() {
  createCanvas(600, 300);
  
  forestbg = createSprite(300,150,600,300);
  forestbg.addImage(forestbgIMG);
  
  ground = createSprite(600, 280, 500, 20);
  ground.addImage(groundIMG);
  ground.x = ground.width/2;
  
  invisibleGround = createSprite(25, 285,500, 10);
  invisibleGround.visible = false;
  
  monkey = createSprite(60,260,30,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.13;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  bgSound.loop();
  
}


function draw() {
  
  score = score + Math.round(getFrameRate()/60);
  
  bananas();
  obstacles();
  
  ground.velocityX = -8;
  console.log(ground.x);
  
  if(ground.x < 0 ) {
    ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y >= 240) {
    monkey.velocityY= -13;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(invisibleGround);
  
  drawSprites();
  
  textFont("Georgia Pro Semibold");
  fill("#A21D00");
  stroke("#801212");
  strokeWeight(2);
  textSize(20); 
  text("Survival Time: " + score, 390, 50);

  
}

function bananas() {
  
  if(frameCount % 80 === 0) {
    banana = createSprite(600,120, 50, 50);
    banana.y = Math.round(random(110, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -8;
    banana.lifetime = 100;
    bananaGroup.add(banana);

  }
}

function obstacles() {
  
  if(frameCount % 300 === 0) {
    obstacle = createSprite(600, 250, 50, 50);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -8;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}