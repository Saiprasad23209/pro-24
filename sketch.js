
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var rect1,rect2,rect3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	paper = new Paper (50,40,10);
	ground = new Ground(600,690,1200,20);
	/*rect1 =createSprite(450,630,5,100,);
	rect1.shapeColor = ("red");
	rect2=createSprite(550,680,210,5, {isStatic:true});
	rect2.shapeColor =("red");
	rect3=createSprite(650,630,5,100, {isStatic:true});
	rect3.shapeColor=("red");

	rect1body=Bodies.rectangle(450,630,5,100,{isStatic:true})
	World.add(world,rect1body)
	rect2body=Bodies.rectangle(450,670,210,5,{isStatic:true})
	World.add(world,rect2body)
	rect3body=Bodies.rectangle(650,630,5,100,{isStatic:true})
	World.add(world,rect3body)*/
	rect1=new Box(550,680,210,5)
	rect2=new Box(650,630,5,100)
	rect3=new Box(450,630,5,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  rect1.display();
  rect2.display();
  rect3.display();
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:20,y:-8}) 
}

}
