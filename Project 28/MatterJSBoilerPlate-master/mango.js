class Mango{
    constructor(x, y,radius) {
        var options = {
          'isStatic':true,
            'restitution':0,
            'friction':1
            
        }
        this.body = Bodies.circle(x, y,radius,{options,isStatic:true});
        this.image = loadImage("images/mango.png");
      
        this.radius = radius/0.75;
        World.add(world, this.body);
      }
      display(){
    
        var position = this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
      }
}