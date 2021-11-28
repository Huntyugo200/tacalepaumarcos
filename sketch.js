var corredor;
var corredorimagem;
var rua;
var ruaimagem;
var bordaesquerda;
var boradadireita;

function preload(){
  ruaimagem=loadImage("path.png");
  corredorimagem=loadAnimation("Runner-1.png","Runner-2.png");
 
}

function setup(){
  createCanvas(400,400);
  rua=createSprite(200,200);
  rua.velocityY=2;
  rua.addImage(ruaimagem);
  corredor=createSprite(180,340,30,30);
  corredor.addAnimation("correndo",corredorimagem);
  boradadireita=createSprite(410,0,100,800);
  boradadireita.visible=false;
  bordaesquerda=createSprite(0,0,100,800);
bordaesquerda.visible=false;
  corredor.scale=0.1;
}
function draw() {
  background(600);
  //height e a altura
  if(rua.y>400){
    rua.y=height/2;
  }

  corredor.x=World.mouseX;

corredor.collide(boradadireita);
corredor.collide(bordaesquerda);
  drawSprites();
}

  


