class Umber{
    constructor() {
        var options = {
            restitution:0.8,
            friction:0.1,
            density:200000,
            isStatic:true
        }

        this.x = 250;
        this.y = 440;

        this.umber = Bodies.rectangle(this.x, this.y, 50, 15, options);
        this.image = loadImage("walking_1.png")

        World.add(world, this.umber);
    }

    display(){
        var pos = this.umber.position;
        var angle = this.umber.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 50, 200, 200);
        pop();
    }
}