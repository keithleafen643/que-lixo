
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground , ball , left , right 

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
	ball = Bodies.circle(100,100,40,ball_options)
	World.add(world,ball)
	Engine.run(engine);
  left = new Ground(1100,600,20,120)
	ground = new Ground(400,670,width,20)
  right = new Ground(1350,600,20,220)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 left.display();
 right.display();
 ellipse(ball.position.x,ball.position.y,40,40);
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:185,y:-185})
	}
}

