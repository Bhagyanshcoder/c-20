
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var pebble;
var platform;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
var pebble_options={restitution: 0.5, frictionAir: 0.01}

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  platform=Bodies.rectangle(290,200,200,20,ground_options);
World.add(world,platform);
  pebble=Bodies.circle(200,10,20,pebble_options);
  World.add(world,pebble);
  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 ellipse(pebble.position.x,pebble.position.y,20,20);
 rect(platform.position.x,platform.position.y,200,20);
}

