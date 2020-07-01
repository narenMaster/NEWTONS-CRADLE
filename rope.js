class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX ;
        this.offsetY = offsetY ;
        var options = {
            bodyA: bodyA,
            pointB:{x :this.offsetX , y :this.offsetY} ,
            bodyB : bodyB ,
            
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    

    display(){
        
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       
    }
    
}