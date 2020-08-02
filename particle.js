class Particle{
    constructor(x,y,w,h){
        var options = {
            isStatic = true
        }
        this.body = bodies.circle(x,y,this.r, options);
        this.color = color(random(0,225), random(0,225), random(0,225);
        World.add(world,this.body)
    }
}
