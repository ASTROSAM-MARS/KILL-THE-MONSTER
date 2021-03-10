class ground{
    constructor(x,y,w){
        var options={
            isStatic : true,
            velocityY : 2
        }
        this.body = Bodies.rectangle(x,y,w, 10, options);
        this.width = w;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(13,234,23);
        rect(pos.x, pos.y, this.width, 10);
    }
}