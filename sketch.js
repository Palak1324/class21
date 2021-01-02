var fixedRect, movingRect, fixedRect1,fixedRect2,fixedRect3,box1,box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(200, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "red";

  fixedRect1 = createSprite(400, 400, 50, 80);
  fixedRect1.shapeColor = "blue";

  fixedRect2 = createSprite(800, 400, 50, 80);
  fixedRect2.shapeColor = "pink";
 
  fixedRect3 = createSprite(1000, 400, 50, 80);
  fixedRect3.shapeColor = "yellow";
  box1 = createSprite(200, 200, 80, 20);
  box1.shapeColor = "brown";
  box1.velocityX=5;
  box2 = createSprite(1000, 200, 50, 80);
  box2.shapeColor = "white";
  box2.velocityX=-5;
  
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="green";
}
if(isTouching(movingRect,fixedRect1)){
  movingRect.shapeColor="blue";
}
if(isTouching(movingRect,fixedRect2)){
  movingRect.shapeColor="pink";
}
if(isTouching(movingRect,fixedRect3)){
  movingRect.shapeColor="yellow";
}

//bounceoff(box1,box2);
bounce(box1,box2)
  drawSprites();
}
