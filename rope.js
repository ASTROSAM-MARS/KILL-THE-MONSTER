class rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 200, 
            stiffness : 1
        }
        this.pointB = pointB;
        this.body = Constraint.create(options); 
        World.add(world, this.body);
    }
}