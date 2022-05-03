
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world
var ground1,ground2,ground3;
var rotater1,rotater2;
var ball1,ball2,ball3,ball4,ball5;

var angle1=60;
var angle2=70;
var angle3=80;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ground_options ={
        isStatic:true
    }
    
    ground1 = Bodies.rectangle(400,699,800,20,ground_options)
    World.add(world,ground1);

    ground2 = Bodies.rectangle(150,500,250,20,ground_options)
    World.add(world,ground2);

    ground3 = Bodies.rectangle(650,500,250,20,ground_options)
    World.add(world,ground3);

    var rotater_options ={
        isStatic:true
    }

    rotater1 = Bodies.rectangle(400,300,150,20,rotater_options)
    World.add(world,rotater1);

    rotater2 = Bodies.rectangle(400,300,150,20,rotater_options)
    World.add(world,rotater2);

    rotater3 = Bodies.rectangle(400,300,150,20,rotater_options)
    World.add(world,rotater3);

    ball1=new Ball(350,100,15);
	ball2=new Ball(360,100,15);
	ball3=new Ball(380,100,15);
    ball4=new Ball(400,100,15);
	ball5=new Ball(420,100,15);

    fill("brown")
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
 
  background("lightGreen");
  Engine.update(engine)

  rect(ground1.position.x,ground1.position.y,800,20);
  rect(ground2.position.x,ground2.position.y,250,20);
  rect(ground3.position.x,ground3.position.y,250,20);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  Matter.Body.rotate(rotater1,angle1)
  push();
  translate(rotater1.position.x,rotater1.position.y)
  rotate(angle1)
  rect(0,0,150,20)
  pop();
  angle1 +=10;

  Matter.Body.rotate(rotater2,angle2)
  push();
  translate(rotater2.position.x,rotater2.position.y)
  rotate(angle2)
  rect(0,0,150,20)
  pop();
  angle2 +=20;

  Matter.Body.rotate(rotater3,angle3)
  push();
  translate(rotater1.position.x,rotater1.position.y)
  rotate(angle3)
  rect(0,0,150,20)
  pop();
  angle3 +=30;
  
  drawSprites();
 
}



