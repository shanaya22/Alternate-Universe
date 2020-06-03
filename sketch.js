const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var sun;
var angle=0;
var anglespeed=0.2;

function setup(){
    var canvas = createCanvas(650,650);
    engine = Engine.create();
    world = engine.world;

    sun = new Sun(0,0,50);
    mercury = new Planet(30,100,20,20);
    venus = new Planet(80,150,50,50);
    earth = new Planet(150,100,50,50);
    mars = new Planet(180,150,40,40);
    jupiter = new Planet(230,100,70,70);
    saturn = new Planet(280,150,60,60);
    uranus = new Planet(330,100,55,55);
    neptune = new Planet(380,100,55,55);
}

function draw(){
    background(0);
  Engine.update(engine);
  translate(width/2,height/2);
  angleMode(DEGREES);
  rotate(angle);
  sun.display();
  mercury.display();
  fill("orange");
  venus.display();
  fill("blue");
  earth.display();
  fill("red");
  mars.display();
  fill("brown");
  jupiter.display();
  fill("ochre");
  saturn.display();
  fill("purple");
  uranus.display();
  fill("blue");
  neptune.display();

  angle=angle+anglespeed

  if(keyCode==32){
    anglespeed=0;
  }

  if(keyCode==ENTER){
    anglespeed=0.2;
  }

  if(frameCount%2==0){
    sun.radius=sun.radius+0.3;
  }

}

function isTouching(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2
    &&object2.x-object1.x<object1.width/2+object2.width/2
    &&object1.y-object2.y<object1.height/2+object2.height/2
    &&object2.y-object1.y<object1.height/2+object2.height/2){
      return true;
    }
else {
  return false;
}
}