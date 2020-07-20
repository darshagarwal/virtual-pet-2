class Food{
    constructor(){
        this.foodStock
        this.lastFed
        this.image = loadImage("Milk.png");
    }

    getFoodStock(){
        database = firebase.database();
        this.foodStock = database.ref('Food');
        this.foodStock.on("value",readStock);
    }

    updateFoodStock(stock){
        database.ref('/').update({
            foodStock :stock,
        });
    }

    display(){
        var x=80,y=100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock !== 0){
            for(i=0; i<this.foodStock;i++){
                if(i%10===0){
                    x = 80;
                    y += 50;
                }
                image(this.image,x,y,50,50);
                x += 30;
            }
        }
    }

}