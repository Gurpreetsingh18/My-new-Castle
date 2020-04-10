const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,box3,box4,box5;

var sideWall1,sideWall2;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
    world = engine.world;

    box1 = new Box(250,150,70,70);
    box2 = new Box(250,150,70,70);
    box3 = new Box(250,150,70,70);
    box4 = new Box(180,370,70,70);
    box5 = new Box(330,220,70,70);
    sideWall1 = new SideWall(210,320,10,330);
    sideWall2 = new SideWall(290,300,10,290);
    ground = new Ground(600,390,1200,20);
}

function draw() {
  background(0);  

  Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    sideWall1.display();
    sideWall2.display();
    ground.display();
}
