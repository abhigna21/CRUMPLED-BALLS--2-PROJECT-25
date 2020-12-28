class Paper {
    constructor(x,y, radius) {
        var options = {
            isStatic: false,
            restitution : 0.7,
            friction : 1.5,
            density : 0.5
        }
        this.image=loadImage("paper.png")
        this.body = Bodies.circle(x,y,radius/3,options);
        this.radius = 60;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,70);
        pop();
    }

}