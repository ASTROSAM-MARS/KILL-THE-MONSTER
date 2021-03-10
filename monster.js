class monster{
    constructor(num){
        this.body = Bodies.rectangle(700, 300, 150, 150);
        if(num == 1)
        this.image = loadImage("Monster-01.png");
        else
        this.image = loadImage("Monster-02.png");
        this.width = 200;
        this.height = 200;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 200, 200);
    }
}