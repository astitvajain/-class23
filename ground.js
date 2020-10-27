class Ground{
    constructor(x,y,width,height){
        var option={isStatic: true}
        this.bodies=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world, this.bodies)
    }
    display(){
        rectMode(CENTER);
        fill("brown");
    rect(this.bodies.position.x,this.bodies.position.y,this.width,this.height);
    }
}