class Paper{
    constructor(x,y,radius) {
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2,
        }
        this.body = Bodies.circle(300,590,70,options);
        this.radius = 70;
        this.image = loadImage("paper.png")
        World.add(world, this.body);

    }
    
    
   
    display(){
        var pos = this.body.position;
        fill("white");
        circle(pos.x,pos.y,this.radius);
        push();
        imageMode(CENTER);
        image(this.image, pos.x,pos.y,120);
    }
        }
