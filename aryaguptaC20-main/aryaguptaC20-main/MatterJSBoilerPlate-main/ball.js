class Ball
{
    constructor(x,y)
    {
        var options={
            restitution:0.95
        }
        this.r=15
        this.body=Bodies.circle(x,y,this.r,options)
        
        World.add(world,this.body)
    }

    display()
    {
      var pos=this.body.position
      push()
      ellipseMode(RADIUS)
      fill("brown")
      ellipse(pos.x,pos.y,this.r)
      pop()
    }

}