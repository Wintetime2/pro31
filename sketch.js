const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var thunder1, thunder2;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
}

function setup(){
    var canvas = createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;
    

    man = new Umber();

    drp1 = new Drop(5, 200);
    drp2 = new Drop(15, 200);
    drp3 = new Drop(25, 200);
    drp4 = new Drop(35, 200);
    drp5 = new Drop(45, 200);
    drp6 = new Drop(55, 200);
    drp7 = new Drop(65, 200);
    drp8 = new Drop(75, 200);
    drp9 = new Drop(85, 200);
    drp10 = new Drop(95, 200);
    drp11 = new Drop(105, 200);
    drp12 = new Drop(115, 200);
    drp13 = new Drop(125, 200);
    drp14 = new Drop(135, 200);
    drp15 = new Drop(145, 200);
    drp16 = new Drop(155, 200);
    drp17 = new Drop(165, 200);
    drp18 = new Drop(175, 200);
    drp19 = new Drop(185, 200);
    drp20 = new Drop(195, 200);
    drp21 = new Drop(205, 200);
    drp22 = new Drop(215, 200);
    drp23 = new Drop(225, 200);
    drp24 = new Drop(235, 200);
    drp25 = new Drop(245, 200);
    drp26 = new Drop(255, 200);
    drp27 = new Drop(265, 200);
    drp28 = new Drop(275, 200);
    drp29 = new Drop(285, 200);
    drp30 = new Drop(295, 200);
    drp31 = new Drop(305, 200);
    drp32 = new Drop(315, 200);
    drp33 = new Drop(325, 200);
    drp34 = new Drop(335, 200);
    drp35 = new Drop(345, 200);
    drp36 = new Drop(355, 200);
    drp37 = new Drop(365, 200);
    drp38 = new Drop(375, 200);
    drp39 = new Drop(385, 200);
    drp40 = new Drop(395, 200);
    drp41 = new Drop(405, 200);
    drp42 = new Drop(415, 200);
    drp43 = new Drop(425, 200);
    drp44 = new Drop(435, 200);
    drp45 = new Drop(445, 200);
    drp46 = new Drop(455, 200);
    drp47 = new Drop(465, 200);
    drp48 = new Drop(475, 200);
    drp49 = new Drop(485, 200);
    
}

function draw(){
    background("black");
    Engine.update(engine);

    man.display();

    drp1.display();
    drp2.display();
    drp3.display();
    drp4.display();
    drp5.display();
    drp6.display();
    drp7.display();
    drp8.display(); 
    drp9.display(); 
    drp10.display(); 
    drp11.display(); 
    drp12.display(); 
    drp13.display(); 
    drp14.display(); 
    drp15.display(); 
    drp16.display(); 
    drp17.display(); 
    drp18.display(); 
    drp19.display(); 
    drp20.display(); 
    drp21.display(); 
    drp22.display(); 
    drp23.display(); 
    drp24.display(); 
    drp25.display();
    drp26.display();
    drp27.display();
    drp28.display();
    drp29.display();
    drp30.display(); 
    drp31.display(); 
    drp32.display(); 
    drp33.display(); 
    drp34.display(); 
    drp35.display();
    drp36.display();
    drp37.display();
    drp38.display();
    drp39.display(); 
    drp40.display();
    drp41.display();
    drp42.display(); 
    drp43.display(); 
    drp44.display(); 
    drp45.display(); 
    drp46.display();
    drp47.display(); 
    drp48.display();
    drp49.display();

drp1.respawn();
drp2.respawn();
drp3.respawn();
drp4.respawn();
drp5.respawn();
drp6.respawn();
drp6.respawn();
drp7.respawn();
drp8.respawn();
drp9.respawn();
drp10.respawn();
drp11.respawn();
drp12.respawn();
drp13.respawn();
drp14.respawn();
drp15.respawn();
drp16.respawn();
drp17.respawn();
drp18.respawn();
drp19.respawn();
drp20.respawn();
drp21.respawn();
drp22.respawn();
drp23.respawn();
drp24.respawn();
drp25.respawn();
drp26.respawn();
drp27.respawn();
drp28.respawn();
drp29.respawn();
drp30.respawn();
drp31.respawn();
drp32.respawn();
drp33.respawn();
drp34.respawn();
drp35.respawn();
drp36.respawn();
drp37.respawn();
drp38.respawn();
drp39.respawn();
drp40.respawn();
drp41.respawn();
drp42.respawn();
drp43.respawn();
drp44.respawn();
drp45.respawn();
drp46.respawn();
drp47.respawn();
drp48.respawn();
drp49.respawn();

SpawnLightning();

drawSprites();
}   


function SpawnLightning() {
    rand = Math.round(random(1,2))
    if(frameCount%80 === 0){
        thunder = createSprite(random(10, 370), random(10, 30), 10 ,10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            default: break;
        }
        thunder.scale = random(0.3, 0.6);
    }

}