class Stone{
    constructor(x, y,radius) {
        var options = {
          'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,{options});
        this.image = loadImage("images/stone.png");
      
        // this.radius = radius;
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
    
        var position = this.body.position;
        push();
        translate(position.x,position.y);
        
        imageMode(CENTER);
        image(this.image,0,0, this.radius, this.radius);
        pop();
      }
}