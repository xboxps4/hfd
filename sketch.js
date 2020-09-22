var happyDog;
var dog,database,foodS;
var foodStock;

function preload()
{
  dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
	createCanvas(500,500);
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
  drawSprites();
  
  if(keyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  text("Press up arrow to feed the dog"),450,450;

}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x)
{
  database.ref('/').update({
    Food:x
  })
}
