//Create variables here
var dog,happy_DogImg,dog_img;
var foodS,foodStock,feed,addFood,feedTime,foodObj;
var database;

function preload()
{
  //load images here
  
  dog_img = loadImage("dog.png");
  happy_DogImg = loadImage("doghappy.png");

}

function setup() {
  createCanvas(1300,500);
  database = firebase.database();
  
  dog = createSprite(950,250);
  dog.addImage("dog",dog_img);

  feed= createButton("Feed the dog");
  feed.position(900,250);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(850,250);
  //addFood.mousePressed(addFoods);

  foodObj=new Food();
  foodObj.getFoodStock();

}


function draw() {  
  background(46,139,87)
  foodObj.display();

  /*if(keyWentDown(UP_ARROW)){
    writeStock(foodStock);
    dog.addImage("dog",happy_DogImg);
    foodStock -= 1;
  }  */

  drawSprites();
  //add styles here
  textSize(20);
  fill("white");
  stroke(10)
  text("Food Remaining:" + foodStock,150,100);
  text("NOTE:"+ "Press Up Arrow key to feed milk to your dog",25,50);

drawSprites()

}

/*function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x -= 1;
    }

    database.ref('/').update({
      Food:x,
    })
  }*/

function feedDog(){
  dog.addImage(happy_DogImg);

  foodObj.update(foodObj.getFoodStock()-1);
  database.ref('/').update({
    food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

