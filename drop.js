class Drop{
    constructor() {
        var options = {
            restitution:0.8,
            friction:0.1,
            density:1.0,
            isStatic:false
        }

    this.x = Math.round(random(10, 490))
    this.y = Math.round(random(10, 200))
    this.rain = Bodies.circle(this.x, this.y, 5, options);

    World.add(world, this.rain);
    }

    respawn() {
        if(this.rain.position.y > 600){
            Matter.Body.setPosition(this.rain, {x:random(10, 490), y:random(10, 200)});

        }
    }

    display(){
        var pos = this.rain.position;
        var angle = this.rain.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("cyan");
        circle(0,0,5);
        pop();
    }

}