const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var world,engine;
var ground,stand1;
var box1,box2,box3,box4,box5,box6,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var polygon,polygonimg,slingshot;

function preload(){
    polygonimg = loadImage("polygon.png");
}

function setup(){
    createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(650,490,1300,20);
    stand1 = new Stand(390,300,250,10);
    box1 = new Box(300,275);
    box2 = new Box(330,275);
    box3 = new Box(360,275);
    box4 = new Box(390,275);
    box5 = new Box(420,275);
    box6 = new Box(450,275);
    box7 = new Box(480,275);
    box8 = new Box(330,235);
    box9 = new Box(360,235);
    box10 = new Box(390,235);
    box11 = new Box(420,235);
    box12 = new Box(450,235);
    box13 = new Box(360,195);
    box14 = new Box(390,195);
    box15 = new Box(420,195);
    box16 = new Box(390,145);

    polygon = Bodies.circle(60,200,20);
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x:100,y:200});
}
function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX+","+mouseY,mouseX,mouseY);
    ground.display();
    stand1.display();
    fill("pink");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill("lightblue");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill("turquoise");
    box13.display();
    box14.display();
    box15.display();
    fill("skyblue");
    box16.display();

    imageMode(CENTER);
    image(polygonimg,polygon.position.x,polygon.position.y,50,50);
 
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.polygon);
    }
}