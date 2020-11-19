const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas, Mouse, canvasmouse;
var ground;
var bob1,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;

function setup() {
  canvas = createCanvas(windowWidth/2,windowHeight/2);
  engine = Engine.create();
  world = engine.world;

 textSize(15);
 fill("white");
text(mouseX+","+mouseY,mouseX,mouseX);

bob1 = new Pendulum(250,200,"black");
World.add(world,bob1);
string1 = new Sling(bob1.body,{x:250,y:10});

bob2 = new Pendulum(200,200,"black");
World.add(world,bob2);
string2 = new Sling(bob2.body,{x:200,y:10});

bob3 = new Pendulum(150,200,"black");
World.add(world,bob3);
string3 = new Sling(bob3.body,{x:150,y:10});

bob4 = new Pendulum(100,200,"black");
World.add(world,bob3);
string4 = new Sling(bob3.body,{x:100,y:10});

bob5 = new Pendulum(50,200,"black");
World.add(world,bob3);
string5 = new Sling(bob3.body,{x:50,y:10});

MouseDragged();

}

function draw() {
  background(0);

  Engine.update(engine);

  bob1.display();
  string1.display();

  bob2.display();
  string2.display();

  bob3.display();
  string3.display();
  
  bob4.display();
  string4.display();

  bob5.display();
  string5.display();


  drawSprites();
}

function MouseDragged(){
  Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY });
}

