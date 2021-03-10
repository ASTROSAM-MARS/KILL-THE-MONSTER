class hero{
    constructor(){
        this.body = Bodies.rectangle(200, 300 , 300, 100, {density : 5});
        this. height = 100;
        this.width = 300;
        this.image = loadImage("Superhero-01.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}