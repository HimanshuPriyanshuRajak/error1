class Ball{
    constructor(x,y){
        var options={
            restitution:1.0
        }
        this.body = Bodies.circle(x,y,40,options);
        World.add(World, this.body)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(ball.position.x, ball.position.y, 20 , 20);
    }
}