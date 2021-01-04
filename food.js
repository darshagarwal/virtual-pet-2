class Food{
    constructor(){
        this.foodStock = 0;
        this.lastFed = 0;

        this.image = loadImage("Milk.png");
    }

    getFoodStock(){
      var foodStockRef  = database.ref('food');
        foodStockRef.on("value",data=>{
        this.foodStock = data.val();
        foodStock=this.foodStock;
            console.log("food:"+foodStock)
        });
        return this.foodStock;
    }

    update(stock){
        this.foodStock=stock;
        console.log(stock);
    }

    writeStock(x){
        if(x<=0){
          x=0;
        }else{
          x -= 1;
        }
    
        database.ref('/').update({
          Food:x,
        })
    }

    display(){
        var x = 80,y = 100;

        imageMode(CENTER);

        if(this.foodStock !==0){
            for(var i=0; i<this.foodStock;i++){
                if(i%10===0){
                    x = 80;
                    y += 50;
                }
                image(this.image,x,y,50,50);
                x += 30;
                text("Food Remaining:" + this.foodStock,150,100);
            }
        }
    }
}