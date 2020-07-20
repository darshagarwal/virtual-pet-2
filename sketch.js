//Create variables here
var dog,happy_DogImg,dog_img;
var foodS,foodStock;
var database;
var feed,addFood;
var fedTime,lastFed;
var foodObj;

function preload()
{
  //load images here
  dog_img = loadImage("dog.png");
  happy_DogImg = loadImage("doghappy.png");

}

function setup() {
  createCanvas(1500,500);
  database = firebase.database();

  feed = createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousepressed(feedDog());

  addFood = createButton("add Food");
  addFood.position(800,95);
  //addFood.mousepressed(addFood());

  // Code to calculate last fed time
    fedTime = database.ref('feedTime');
    fedTime.on("value",function(data){
      lastFed = data.val();
    });


  
  dog = createSprite(1200,250);
  dog.addImage("dog",dog_img);
  //dog.scale(5);

}


function draw() {  
  background(46,139,87);

  drawSprites();
  //add styles here
  textSize(20);
  fill("white");
  stroke(10)
  text("Food Remaining:" + foodS,150,100);
  text("last fed"+fedTime,25,50);

drawSprites()

}

function readStock(data){
    foodS = data.val();
}

function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x -= 1;
    }

    database.ref('/').update({
      Food:x,
    })
}

function feedDog(){

  //foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({

    Food : foodObj.getFoodStock(),
    FeedTime : hour(),

  })
    writeStock(foodS);
}

function updateFoodStock(stock){
  database.ref('/').update({
      foodStock :stock,
  });
}