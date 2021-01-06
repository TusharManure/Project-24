
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,side0,side1,side2;
 var invwall1;

function preload(){
	
}

function setup() {
  createCanvas(1536, 750);
  
 
	
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper(100, 600, 10);

     ground = new Ground(1536/2, 680, 1536, 20);
  
	 side0 = new Dustbin(550+400, 620, 20, 100);
     side1 = new Dustbin(635+400, 660, 150, 20);
     side2 = new Dustbin(720+400, 620, 20, 100);


     Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  side0.display();
  side1.display();
  side2.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position, 
		   {x:20, y: -20})
	}

  }


