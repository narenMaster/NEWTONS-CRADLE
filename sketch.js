const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var b1,b2,b3,b4,b5,ground ;
var r1,r2,r3,r4,r5 ;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,350,50,20);

	b1 = new Bob(400,550,20);
	b2 = new Bob(410,550,20);
	b3 = new Bob(420,550,20);
	b4 = new Bob(430,550,20);
	b5 = new Bob(440,550,20);

	r1 = new Rope(b1.body,ground.body,-bobDiameter*2,0);
	r2 = new Rope(b2.body,ground.body,-bobDiameter*4,0);
	r3 = new Rope(b3.body,ground.body,-bobDiameter*6,0);
	r4 = new Rope(b4.body,ground.body,-bobDiameter*7,0);
	r5 = new Rope(b5.body,ground.body,-bobDiameter*8,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
 
}