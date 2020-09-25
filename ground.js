class Ground {
    constructor(x,y,width,height) {
        var options ={
            isStatic: true
        }
        this.body = Bodies.rectangle(400,680,1600,10,options);
        this.width =2200;
        this.height = 10;
        World.add(world, this.body);
    
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(pos.x, pos.y, this.width,this.height);
        
        
    }
};