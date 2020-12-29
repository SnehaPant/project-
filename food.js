class Food{
    constructor(){
       
        this.image=loadImage("Milk.png")
    }

        getFoodStock(){
            console.log("woring")
            var foodCount1 = database.ref('food');
            foodCount1.on("value",function(data){
              foodS= data.val();
           
           })
        }
        
    updateFoodStock(count){
        database.ref('/').update({
            'food': count
          });
    }
   
    display(){
        var x=80,y=100
        imageMode(CENTER)
        image(this.image,720,220,70,70)
        if (foodS!=0){
            for(var i=0;i<foodS;i++){
                if(i%10==0){
                  x=80
                  y=y+50
                }
                image(this.image,x,y,50,50)
                x=x+30
            }
        }
    }  
}