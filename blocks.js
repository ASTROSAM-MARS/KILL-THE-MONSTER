class blocks{
    constructor(x,y, r,g,b){
        this.body = Bodies.rectangle(x,y,70,70);
        this.r = r;
        this.g = g;
        this.b = b;
        this.width = 70;
        this.height = 70;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.r,this.g, this.b);
        rect(pos.x, pos.y, 70, 80);
    }
}