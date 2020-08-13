const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//code
var engine, world;
var box1, box2, box3, box4, box5;
var ground;
var boxes=[];
var polyimage;

var score = 0;
textColor = "white";

function preload(){
    polyimage = loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Polygon(150, 100, 40, 40);
    slingshot = new Launcher (box1.body, {x:150, y:100});

    ground = new Ground(600,390,1200,20);

    stand1 = new Ground (420, 300, 250, 10);
    stand2 = new Ground (700, 200, 200, 10);

    for(var I = 330; I<511; I=I+30){
        boxes.push(new Box (I, 275, 30, 40, "lightblue"));
    }

    for(var I = 360; I<481; I=I+30){
        boxes.push(new Box (I, 235, 30, 40, "pink"));
    }

    for(var I = 390; I<451; I=I+30){
        boxes.push(new Box (I, 195, 30, 40, "purple"));
    }

    for(var I = 420; I<421; I=I+30){
        boxes.push(new Box (I, 155, 30, 40, "red"));
    }

    for(var I = 640; I<761; I=I+30){
        boxes.push(new Box (I, 175, 30, 40, "green"));
    }

    for(var I = 670; I<731; I=I+30){
        boxes.push(new Box (I, 135, 30, 40, "blue"));
    }

    for(var I = 700; I<701; I=I+30){
        boxes.push(new Box (I, 95, 30, 40, "violet"));
    }


}

function draw(){
    /*
    if (getBackground()){
        background ("white");
        console.log("white");
    } else {
        background(0);
        console.log("black");
    }
    */
   background("lightgreen");
    Engine.update(engine);
    ground.display();

    for(var I=0; I<boxes.length; I++){
        boxes[I].display();
        //boxes[I].score();
    }
    stand1.display();
    stand2.display();

    box1.display();
    slingshot.display();

//    text ("Score : " + score, 750, 40);
   
}

function mouseDragged (){
    Matter.Body.setPosition(box1.body,{x:mouseX, y:mouseY});
}

function mouseReleased (){
    slingshot.fly();
}

function keyPressed (){
    if (keyCode==32){
        slingshot.attach(box1.body);
    }
}

/*
async function getBackground() {
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var responseJSON = await response.json();
    var dt = responseJSON.datetime;
    var r = dt.slice(11, 13);

    if (r>=06 && r<=19){

        return true;
    } else {
        return false;
  
    }
}
*/