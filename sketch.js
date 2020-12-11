
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var body,ball1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

this.body = createSprite(400,50,600,50);
this.body.shapeColor = "red";
World.add(World, this.body);
ball1 = new  Ball(140,250);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  drawSprites();
 
}



