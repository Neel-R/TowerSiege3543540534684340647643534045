const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var object, sling, platform1, slingshot, score = 0;

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  block1 = new Box(600,305,30,40);
  block2 = new Box(630,305,30,40);
  block3 = new Box(660,305,30,40);
  block4 = new Box(690,305,30,40);
  block5 = new Box(720,305,30,40);
  block6 = new Box(750,305,30,40);
  block7 = new Box(780,305,30,40);

  block8 = new Box(630,405,30,40);
  block9 = new Box(660,405,30,40);
  block10 = new Box(690,405,30,40);
  block11 = new Box(720,405,30,40);
  block12 = new Box(750,405,30,40);

  block13 = new Box(660,505,30,40);
  block14 = new Box(690,505,30,40);
  block15 = new Box(720,505,30,40);

  block16 = new Box(690,535,30,40);

  object = new Object(200,200,60,60);
  
  platform1 = new Ground(700,560,400,20);

  slingshot = new SlingShot(object.body,{x:200,y:200})
}

function draw() {
  background(0,0,0);
  Engine.update(engine);

  text("Score"+score,1000,400)

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
  block16.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  object.display();
  platform1.display();
  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(object.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(object.body);
  }
}