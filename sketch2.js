var fir,mor;
var game1, game2;
function setup() {
  createCanvas(800,400);
  fir=createSprite(400, 200, 150, 70);
 mor =createSprite(400,200,70,150);
 fir.shapeColor="blue";
 mor.shapeColor="blue";
 game1=createSprite(100,100,50,50);
 game2=createSprite(100,300,50,50);
}

function draw() {
  background(255,255,255);  
  mor.x=World.mouseX;
  mor.y=World.mouseY;
  console.log(mor.x-fir.x)
  if(isTouching(mor,game2)){
  game2.shapeColor="red";
     mor.shapeColor="red";
  }
  else{
     game2.shapeColor="blue";
     mor.shapeColor="blue";
  }
  drawSprites();
}
