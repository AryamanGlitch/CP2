
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bin1, bin2, bin3;


function preload(){

	
}



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	World = engine.world;

	//Create the Bodies Here.
ground = new Ground();

paper = new Paper();


 bin1 = new Bin (900,650);
//bin2 = new Bin(1143,667,130,15);
//bin3 = new Bin(1210,610,15,127);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 ground.display();
 paper.display();
 bin1.display();
 //bin2.display();
 //bin3.display();
}
 function keyPressed(){
	 if (keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper.body,paper.body.position,{x:417,y:-145} );
	 }
 }


