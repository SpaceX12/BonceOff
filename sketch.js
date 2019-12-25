var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 80, 50);
  fixedRect = createSprite(600,200,50,80);
  object1 = createSprite(800,200,50,80);
  object2 = createSprite(1000,200,50,80);
  fixedRect.velocityX = 2;
  object1.velocityX = -2;
  movingRect.shapeColor = 'green';
  fixedRect.shapeColor = 'green';
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 /* if(isTouching(movingRect, object1)){
    movingRect.shapeColor = 'red';
    object1.shapeColor = 'red';
  }
  else{
    movingRect.shapeColor = 'green';
    object1.shapeColor = 'green';
  }*/
    bounceOff(object1, fixedRect)
  drawSprites();
}

