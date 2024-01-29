const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var fruit
var fruit_options
var fruit_con

let engine;
let world;
var ground;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(6,{x:250,y:0})
  rectMode(CENTER);
  ellipseMode(RADIUS);

  fruit_options = {
    density : 0.001
  }



  fruit = Bodies.circle(250,100, 20, fruit_options)
  Matter.Composite.add(rope.body,fruit)

  fruit_con = new Link(rope,fruit)



  textSize(50)
  
  
}

function draw() 
{
  background(51);
  ground.show();
  rope.show()
  ellipse(fruit.position.x,fruit.position.y,20,20)
  
  Engine.update(engine);
  

 
   
}
