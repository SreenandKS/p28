
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,stone,boy,chain;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15;
function preload()
{
	// bImg = loadImage("images/backGround.jpg");
  // boyImage = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(890,400,550,600);
  stone = new Stone(240,530,50,50);
  boy = new Boy(300,600,200,350);
  chain = new SlingShot(stone.body,{x:240,y:530});
  m1 = new Mango(720,300,30);
  m2 = new Mango(750,350,30);
  m3 = new Mango(960,240,30);
  m4 = new Mango(1050,350,30);
  m5 = new Mango(900,300,30);
  m6 = new Mango(800,200,30);
  m7 = new Mango(1050,250,30);
  m8 = new Mango(950,150,30);
  m9 = new Mango(800,300,30);
  m10 = new Mango(850,230,30);
  m11 = new Mango(970,300,30);
  m12 = new Mango(800,370,30);
  m13 = new Mango(880,370,30);
  m14 = new Mango(1120,320,30);
  m15 = new Mango(900,200,30);

  

	Engine.run(engine);
  
}


function draw() {
  fullscreen();
  rectMode(CENTER);
  background(28,167,115);
  
  tree.display();
  
  boy.display();
  
  chain.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  m12.display();
  m13.display();
  m14.display();
  m15.display();
  stone.display();

  detectCollision(stone,m1);
  detectCollision(stone,m2);
  detectCollision(stone,m3);
  detectCollision(stone,m4);
  detectCollision(stone,m5);
  detectCollision(stone,m6);
  detectCollision(stone,m7);
  detectCollision(stone,m8);
  detectCollision(stone,m9);
  detectCollision(stone,m1);
  detectCollision(stone,m11);
  detectCollision(stone,m12);
  detectCollision(stone,m13);
  detectCollision(stone,m14);
  detectCollision(stone,m15);

  drawSprites();
 
 
  textSize(20);
  text("Press space to get a second chance to play ",20,20);
}

function mouseDragged(){
   
  Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    chain.fly();
  
}

function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(stone.body,{x:20,y:530}) 
      chain.attach(stone.body);
    }
}

function detectCollision(stones,mango){
  mangopos = mango.body.position;
  stonepos = stones.body.position;
  var distance = dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y);
  console.log(mango.radius);
  console.log(stones.radius);
  if(distance<= mango.radius+stones.radius){
    console.log(mango.radius);
    console.log(stones.radius);
    Matter.Body.setStatic(mango.body,false);
  }
}