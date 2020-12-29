//Create variables here
var dog,happydog,database, foodStock;
 var foodS 
 var lastFed ;
 var food1,food2
 var foodobj
 var fedTime
 var lastFed=0

function preload()
{
  //load images here
  dog=loadImage('Dog.png')
  happydog=loadImage('happydog.png')
}

function setup() {
  createCanvas(900, 900);
  database=firebase.database()
  dog1=createSprite(750,390,10,10)
  dog1.addImage(dog)
  dog1.scale=0.3

foodobj=new Food()


    var button1 = createButton('feed the dog');
    button1.position(600, 95);
    button1.mousePressed(feedDog)
  
    var button2 = createButton('Add Food');
    button2.position(700, 95);
    button2.mousePressed(addFoods)


}

  function draw() {  
  background(46,139,87)
 
foodobj.getFoodStock()
//console.log(foodS)

 foodobj.display()
 //console.log("working")
  drawSprites();
  fedTime=database.ref("feedTime")
 fedTime.on("value",function(data){
lastFed=data.val()
 })
 fill(225,225,254)
 textSize(15)
 if(lastFed>=12)
{
  text("Last Feed : " +lastFed%12+" PM ",70,55)
} else if (lastFed==0){
text("Last Feed : 12 AM",70,55)
}else{
  text("Last Feed : " + lastFed+" AM ",70,55)
}
}

 
  

function feedDog(){
  dog.addImage(happydog)
  foodObj.updateFoodStock(foodS-1)
 
   
}
function addFoods(){
  foodS++
 
   
}


