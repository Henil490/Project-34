//Create variables here
var dog,dogImg1,dogImg2;
var foodS,foodStock
var database;
function preload()
{
	//load images here
  dogImg1=loadImage("images/dogImg.png");
  dogImg2=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,300,50,150);
  dog.addImage(dogImg1)

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg2);
  
  //add styles here
  fill("red");
  text("Food remaining : "+foodS,170,200);
  textSize(10);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
drawSprites();
}}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
    Food:x
  })
}





