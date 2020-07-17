
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
    

	engine = Engine.create();
	world = engine.world;
	


	packagebody=createSprite(width/2,654,200,15);
	packagebody.shapeColor=color(255,0,0);
	
    packagebody2=createSprite(650,590,15,150);
	packagebody2.shapeColor=color(255,0,0);
	
	packagebody3=createSprite(850,590,15,150);
	packagebody3.shapeColor=color(255,0,0);
	
	
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
    
	
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
    paper = new Paper(10,630,15);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  paper.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-85});
	 }
	}

