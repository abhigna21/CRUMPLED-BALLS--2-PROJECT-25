const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var paperObject,dustbinObject,groundObject;


function setup() {
	createCanvas(1600, 700)

	engine = Engine.create();
	world = engine.world;

	groundObject = new Ground(700,550,1600,20);
	paperObject = new Paper(200,300, 70);
	dustbinObject = new Dustbin(1000,420);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  Engine.update(engine);

  drawSprites();

  groundObject.display();
  paperObject.display();
  dustbinObject.display();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:45,y:-45});
	}
  
  }

