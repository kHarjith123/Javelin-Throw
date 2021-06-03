var background1 , start;
var gameState = "start";



var player_running;
var player_released;


function preload(){
  
  bg = loadImage("Images/Background_1.jpg");
  playbutton = loadImage("Images/Playbutton.png")
  player_running = loadAnimation("Images/player1.png","Images/player1.png","Images/player2.png",
  "Images/player2.png","Images/player3.png","Images/player3.png","Images/player4.png" , "Images/player4.png" )
  player_released = loadAnimation("Images/player5.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
  background1 = createSprite(width/2,height/2);
  background1.addImage(bg);
  background1.scale = 1.9;
  background1.x = background1.width/2;
  
  
  start = createSprite(width/2+20,height/2);
  start.addImage(playbutton);

  player = createSprite(100,height-95,20,100);
  player.addAnimation("running",player_running);
  player.addAnimation("released",player_released);
  
  
  
  
}

function draw() {
  background(255);

  background1.velocityX = -3 
    
  if (background1.x < 0){
    background1.x = background1.width/2;
  }
  
  
  
  drawSprites();
  
  fill("green");
  textSize(33)
  text("JAVELIN THROW GAME",width/2-168,100);

  if((mousePressedOver(start) || touches.length > 0) && gameState === "start"){

    gameState = "play"
    start.visible = false;



  }
  
}