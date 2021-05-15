var car;  
var b, bImg;
var wall ;
var speed;
var weight;
var sound;

function preload(){


}

function setup() {
  createCanvas(1600,600);
 
  car=createSprite(100, 300, 50, 50);
car.shapeColor="deepskyblue";


  //car.debug=true;

  wall=createSprite(1500,300,30,500);
wall.shapeColor="#964B00";
}

function draw() {
  background(	'#000000');  3
if(keyDown("a")){
 
  speed=random(55,90);
  weight=random(400,1500);
  car.shapeColor="deepskyblue";
  car.x=100;
  car.y=300;
  car.velocityX=speed;
}
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;

    d=0.5*weight*speed*speed/22500;

    if(d<100){
      car.shapeColor="greenyellow";
    }
    else if(d>100 &&  d<180){
      car.shapeColor="yellow";
    }
    else if(d>180){
      car.shapeColor="red";
    }

  }
  drawSprites();
}