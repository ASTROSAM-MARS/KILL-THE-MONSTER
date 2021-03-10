const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;

var engine, world;
var backImage, back;
var Ground, ground2;
var superhero;
var block1, block2, block3, block4, block5;
var block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15;
var rope1;
var monster1;


function preload() {
  backImage = loadImage("Back.png");
}

function setup() {
  createCanvas(1350, 650);
  engine = Engine.create();
  world = engine.world;
  back = createSprite(1150, 500, 3000, 500);
  back.scale =0.8;
  back.addImage ("back",backImage);
  back.velocityX = -3;
  Ground = new ground(200,500, 800);
  ground2 = new ground(690, 385, 30);

//building1
  block1 = new blocks(400,460,133, 102, 61);
  block2 = new blocks(400, 387, 97, 75,47);
  block3 = new blocks(400, 314, 133, 102, 61);
  block4 = new blocks(400, 241, 97, 75, 47);
  block5 = new blocks(400, 168, 133, 102, 61);

  //building2
  block6 = new blocks(480,460, 209, 85, 19);
  block7 = new blocks(480,387, 242,145, 92);
  block8 = new blocks(480,314, 209, 85, 19);
  block9 = new blocks(480,241, 242,145, 92);
  block10 = new blocks(480,168, 209, 85, 19);

  //building3
  block11 = new blocks(560, 460, 233, 237, 126);
  block12 = new blocks(560, 387, 154, 158, 21);
  block13 = new blocks(560, 314, 233, 237, 126);
  block14 = new blocks(560, 241, 154, 158, 21);
  block15 = new blocks(560, 168, 233, 237, 126);

  superhero = new hero();
  rope1 = new rope(superhero.body, {x : 170, y: 100});
  monster1 = new monster(Math.round(random(1,2)));
}

function draw() {
  back.velocityX = -3;
  if(back.x<0)
  back.x = 1150 ;
  Engine.update(engine);
  drawSprites();
  Ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  superhero.display();
  monster1.display();
  if(monster1.body.position.y>310){
  ground2 = null;
  textSize(20);
  text("PRESS SPACE TO RESET", 600,100);
  }
}
function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x : mouseX, y : mouseY});
}

function keyPressed(){
  if(keyCode == 32){
    setup();
  }
}

